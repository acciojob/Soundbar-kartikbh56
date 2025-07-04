//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3'];
const buttonsContainer = document.getElementById('buttons');

// Dynamically create play buttons
sounds.forEach(sound => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.textContent = `Play ${sound}`;
  btn.addEventListener('click', () => {
    stopSounds();
    const audio = document.createElement('audio');
    audio.src = `./sounds/${sound}.mp3`;
    audio.id = 'current-audio';
    document.body.appendChild(audio);
    audio.play();
  });
  buttonsContainer.appendChild(btn);
});

// Create stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop');
stopBtn.textContent = 'Stop';
stopBtn.addEventListener('click', stopSounds);
buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopSounds() {
  const current = document.getElementById('current-audio');
  if (current) {
    current.pause();
    current.currentTime = 0;
    current.remove();
  }
}
