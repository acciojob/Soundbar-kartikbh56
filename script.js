const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const buttons = document.getElementById('buttons');

sounds.forEach(sound => {
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});

buttons.addEventListener('click', (e) => {
  const btnText = e.target.innerText.toLowerCase();

  if (btnText === 'stop') {
    stopSounds();
  } else if (sounds.includes(btnText)) {
    stopSounds();
    document.getElementById(btnText).play();
  }
});

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
