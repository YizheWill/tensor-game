export default async function initCamera(width, height, fps) {
  const constraints = {
    audio: false,
    video: {
      facingMode: 'user',
      width: width,
      height: height,
      frameRate: { max: fps },
    },
  };

  const video = document.querySelector('#webcam');
  video.width = width;
  video.height = height;

  const stream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = stream;

  return new Promise((resolve) => {
    video.onloadedmetadata = () => {
      resolve(video);
    };
  });
}
