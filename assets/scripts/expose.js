window.addEventListener('DOMContentLoaded', init);

function init () {
  const hornSelect = document.getElementById('horn-select');     
  const hornImage = document.querySelector('#expose img');       
  const audio = document.querySelector('#expose audio');     
  const volumeSlider = document.getElementById('volume');         
  const volumeIcon = document.querySelector('#volume-controls img'); 
  const playButton = document.querySelector('#expose button');    

  const jsConfetti = new JSConfetti();

  const HORN_MAP = {
    'air-horn': {
      img: './assets/images/air-horn.svg',
      sound: './assets/audio/air-horn.mp3'
    },
    'car-horn': {
      img: './assets/images/car-horn.svg',
      sound: './assets/audio/car-horn.mp3'
    },
    'party-horn': {
      img: './assets/images/party-horn.svg',
      sound: './assets/audio/party-horn.mp3'
    }
  };

  function updateHorn (name) {
    if (!HORN_MAP[name]) return;
    const { img, sound } = HORN_MAP[name];
    hornImage.src = img;
    hornImage.alt = name;
    audio.src = sound;
  }

  function updateVolume (val) {
    const v = Number(val);
    audio.volume = v / 100; 

    let level;
    if (v === 0) level = 0;
    else if (v < 33) level = 1;
    else if (v < 67) level = 2;
    else level = 3;

    volumeIcon.src = `./assets/icons/volume-level-${level}.svg`;
    volumeIcon.alt = `Volume level ${level}`;
  }

  hornSelect.addEventListener('change', e => updateHorn(e.target.value));

  volumeSlider.addEventListener('input', e => updateVolume(e.target.value));

  playButton.addEventListener('click', () => {
    if (!audio.src) return;     
    audio.currentTime = 0;          
    audio.play();

    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  updateHorn(hornSelect.value);
  updateVolume(volumeSlider.value);
}
