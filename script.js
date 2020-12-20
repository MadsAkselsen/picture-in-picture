const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Promt to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log('error here:', error);
  }
}

button.addEventListener('click', async () => {
  //disable button
  button.disabled = true;
  //start Picture in Picture
  await videoElement.requestPictureInPicture();
  // reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();
