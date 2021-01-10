const fingerJoints = {
  thumb: [0, 1, 2, 3, 4],
  indexFinger: [0, 5, 6, 7, 8],
  middleFinger: [0, 9, 10, 11, 12],
  ringFinger: [0, 13, 14, 15, 16],
  pinky: [0, 17, 18, 19, 20],
};

// Infinity Gauntlet Style
const style = {
  0: { color: '#F5EC8E', size: 15 },
  1: { color: '#F5EC8E', size: 6 },
  2: { color: '#11E79A', size: 10 },
  3: { color: '#F5EC8E', size: 6 },
  4: { color: '#F5EC8E', size: 6 },
  5: { color: '#786DBA', size: 10 },
  6: { color: '#F5EC8E', size: 6 },
  7: { color: '#F5EC8E', size: 6 },
  8: { color: '#F5EC8E', size: 6 },
  9: { color: '#4D8FC6', size: 10 },
  10: { color: '#F5EC8E', size: 6 },
  11: { color: '#F5EC8E', size: 6 },
  12: { color: '#F5EC8E', size: 6 },
  13: { color: '#EF526D', size: 10 },
  14: { color: '#F5EC8E', size: 6 },
  15: { color: '#F5EC8E', size: 6 },
  16: { color: '#F5EC8E', size: 6 },
  17: { color: '#E4B569', size: 10 },
  18: { color: '#F5EC8E', size: 6 },
  19: { color: '#F5EC8E', size: 6 },
  20: { color: '#F5EC8E', size: 6 },
};

// Drawing function
export const drawHand = (predictions, ctx) => {
  // Check if we have predictions
  if (predictions.length > 0) {
    // Loop through each prediction
    predictions.forEach((prediction) => {
      // Grab landmarks
      const landmarks = prediction.landmarks;

      // Loop through fingers
      for (let j = 0; j < Object.keys(fingerJoints).length; j++) {
        let finger = Object.keys(fingerJoints)[j];
        //  Loop through pairs of joints
        for (let k = 0; k < fingerJoints[finger].length - 1; k++) {
          // Get pairs of joints
          const firstJointIndex = fingerJoints[finger][k];
          const secondJointIndex = fingerJoints[finger][k + 1];

          // Draw path
          ctx.beginPath();
          ctx.moveTo(landmarks[firstJointIndex][0], landmarks[firstJointIndex][1]);
          ctx.lineTo(landmarks[secondJointIndex][0], landmarks[secondJointIndex][1]);
          ctx.strokeStyle = 'pink';
          ctx.lineWidth = 4;
          ctx.stroke();
        }
      }

      // Loop through landmarks and draw em
      for (let i = 0; i < landmarks.length; i++) {
        // Get x point
        const x = landmarks[i][0];
        // Get y point
        const y = landmarks[i][1];
        // Start drawing
        ctx.beginPath();
        ctx.arc(x, y, style[i]['size'], 0, 3 * Math.PI);

        // Set line color
        ctx.fillStyle = style[i]['color'];
        ctx.fill();
      }
    });
  }
};
