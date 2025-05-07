window.addEventListener('DOMContentLoaded', init);

function init () {
  const textInput = document.getElementById('text-to-speak');
  const voiceSel = document.getElementById('voice-select');
  const talkBtn = document.querySelector('#explore button');
  const faceImg = document.querySelector('#explore img');

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoices () {
    voices = synth.getVoices();
    voiceSel.querySelectorAll('option:not([disabled])').forEach(opt => opt.remove());

    voices.forEach((v, i) => {
      const opt = document.createElement('option');
      opt.value = i; 
      opt.textContent = `${v.name} (${v.lang})` + (v.default ? ' — DEFAULT' : '');
      voiceSel.appendChild(opt);
    });
  }

  populateVoices();                    
  if (typeof synth.onvoiceschanged !== 'undefined') {
    synth.onvoiceschanged = populateVoices;
  }

  talkBtn.addEventListener('click', () => {
    if (synth.speaking) synth.cancel();          

    const text = textInput.value.trim();
    if (!text) return;                         

    const utter = new SpeechSynthesisUtterance(text);
    const idx = parseInt(voiceSel.value, 10); 
    if (!Number.isNaN(idx) && voices[idx]) utter.voice = voices[idx];

    utter.addEventListener('start', () => {
      faceImg.src = 'assets/images/smiling-open.png';
    });
    utter.addEventListener('end',   () => {
      faceImg.src = 'assets/images/smiling.png';
    });

    synth.speak(utter);
  });
}
