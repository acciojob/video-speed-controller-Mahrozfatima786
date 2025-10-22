const video = player.querySelector('.player__video'); // use class that Cypress expects
const rewindButton = player.querySelector('.rewind');
const forwardButton = player.querySelector('.forward');

// Event listeners
rewindButton.addEventListener('click', () => {
  video.currentTime += parseFloat(rewindButton.dataset.skip);
});

forwardButton.addEventListener('click', () => {
  video.currentTime += parseFloat(forwardButton.dataset.skip);
});
