/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Camera.js":
/*!***********************!*\
  !*** ./src/Camera.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initCamera\n/* harmony export */ });\nasync function initCamera(width, height, fps) {\n  const constraints = {\n    audio: false,\n    video: {\n      facingMode: 'user',\n      width: width,\n      height: height,\n      frameRate: {\n        max: fps\n      }\n    }\n  };\n  const video = document.querySelector('#webcam');\n  video.width = width;\n  video.height = height;\n  const stream = await navigator.mediaDevices.getUserMedia(constraints);\n  video.srcObject = stream;\n  return new Promise(resolve => {\n    video.onloadedmetadata = () => {\n      resolve(video);\n    };\n  });\n}\n\n//# sourceURL=webpack://amsl/./src/Camera.js?");

/***/ }),

/***/ "./src/DrawFingers.js":
/*!****************************!*\
  !*** ./src/DrawFingers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _drawHand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawHand */ \"./src/drawHand.js\");\n\n\nclass DrawFingers {\n  constructor(width, height, fps, ctx, video, resultText) {\n    this.width = width;\n    this.height = height;\n    this.fps = fps;\n    this.ctx = ctx;\n    this.video = video;\n    this.resultText = resultText;\n    this.config = {\n      video: {\n        width: 640,\n        height: 480,\n        fps: 30\n      }\n    };\n    this.landmarkColors = {\n      thumb: 'red',\n      indexFinger: 'blue',\n      middleFinger: 'yellow',\n      ringFinger: 'green',\n      pinky: 'pink',\n      palmBase: 'white'\n    };\n    this.gestureStrings = {\n      thumbs_up: 'ThumbUp',\n      victory: 'Victory'\n    };\n    this.knownGestures = [fp.Gestures.VictoryGesture, fp.Gestures.ThumbsUpGesture];\n    this.GE = new fp.GestureEstimator(this.knownGestures);\n  }\n\n  async genPredicts(video) {\n    const model = await handpose.load();\n    const predictions = model.estimateHands(video, true);\n    console.log('HandPose Model loaded');\n    return predictions;\n  }\n\n  drawPoint(x, y, r, color) {\n    this.ctx.beginPath();\n    this.ctx.arc(x, y, r, 0, 2 * Math.PI);\n    this.ctx.fillStyle = color;\n    this.ctx.fill();\n  }\n\n  async estimateHands() {\n    const predicts = await this.genPredicts(this.video);\n    this.ctx.clearRect(0, 0, this.config.video.width, this.config.video.height);\n    console.log('predicts', predicts, 'length', predicts.length);\n\n    if (predicts.length > 0) {\n      (0,_drawHand__WEBPACK_IMPORTED_MODULE_0__.drawHand)(predicts, this.ctx);\n      const est = this.GE.estimate(predicts[0].landmarks, 7);\n\n      if (est.gestures?.length) {\n        let result = est.gestures.reduce((acc, ele) => acc.confidence > ele.confidence ? acc : ele);\n        console.log('result', result);\n\n        if (this.resultText.innerText !== result.name) {\n          this.resultText.innerText = result.name;\n        }\n      }\n    }\n  }\n\n  async draw() {\n    this.estimateHands();\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawFingers);\n\n//# sourceURL=webpack://amsl/./src/DrawFingers.js?");

/***/ }),

/***/ "./src/drawHand.js":
/*!*************************!*\
  !*** ./src/drawHand.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawHand\": () => /* binding */ drawHand\n/* harmony export */ });\nconst fingerJoints = {\n  thumb: [0, 1, 2, 3, 4],\n  indexFinger: [0, 5, 6, 7, 8],\n  middleFinger: [0, 9, 10, 11, 12],\n  ringFinger: [0, 13, 14, 15, 16],\n  pinky: [0, 17, 18, 19, 20]\n}; // Infinity Gauntlet Style\n\nconst style = {\n  0: {\n    color: 'yellow',\n    size: 15\n  },\n  1: {\n    color: 'gold',\n    size: 6\n  },\n  2: {\n    color: 'green',\n    size: 10\n  },\n  3: {\n    color: 'gold',\n    size: 6\n  },\n  4: {\n    color: 'gold',\n    size: 6\n  },\n  5: {\n    color: 'purple',\n    size: 10\n  },\n  6: {\n    color: 'gold',\n    size: 6\n  },\n  7: {\n    color: 'gold',\n    size: 6\n  },\n  8: {\n    color: 'gold',\n    size: 6\n  },\n  9: {\n    color: 'blue',\n    size: 10\n  },\n  10: {\n    color: 'gold',\n    size: 6\n  },\n  11: {\n    color: 'gold',\n    size: 6\n  },\n  12: {\n    color: 'gold',\n    size: 6\n  },\n  13: {\n    color: 'red',\n    size: 10\n  },\n  14: {\n    color: 'gold',\n    size: 6\n  },\n  15: {\n    color: 'gold',\n    size: 6\n  },\n  16: {\n    color: 'gold',\n    size: 6\n  },\n  17: {\n    color: 'orange',\n    size: 10\n  },\n  18: {\n    color: 'gold',\n    size: 6\n  },\n  19: {\n    color: 'gold',\n    size: 6\n  },\n  20: {\n    color: 'gold',\n    size: 6\n  }\n}; // Drawing function\n\nconst drawHand = (predictions, ctx) => {\n  // Check if we have predictions\n  if (predictions.length > 0) {\n    // Loop through each prediction\n    predictions.forEach(prediction => {\n      // Grab landmarks\n      const landmarks = prediction.landmarks; // Loop through fingers\n\n      for (let j = 0; j < Object.keys(fingerJoints).length; j++) {\n        let finger = Object.keys(fingerJoints)[j]; //  Loop through pairs of joints\n\n        for (let k = 0; k < fingerJoints[finger].length - 1; k++) {\n          // Get pairs of joints\n          const firstJointIndex = fingerJoints[finger][k];\n          const secondJointIndex = fingerJoints[finger][k + 1]; // Draw path\n\n          ctx.beginPath();\n          ctx.moveTo(landmarks[firstJointIndex][0], landmarks[firstJointIndex][1]);\n          ctx.lineTo(landmarks[secondJointIndex][0], landmarks[secondJointIndex][1]);\n          ctx.strokeStyle = 'plum';\n          ctx.lineWidth = 4;\n          ctx.stroke();\n        }\n      } // Loop through landmarks and draw em\n\n\n      for (let i = 0; i < landmarks.length; i++) {\n        // Get x point\n        const x = landmarks[i][0]; // Get y point\n\n        const y = landmarks[i][1]; // Start drawing\n\n        ctx.beginPath();\n        ctx.arc(x, y, style[i]['size'], 0, 3 * Math.PI); // Set line color\n\n        ctx.fillStyle = style[i]['color'];\n        ctx.fill();\n      }\n    });\n  }\n};\n\n//# sourceURL=webpack://amsl/./src/drawHand.js?");

/***/ }),

/***/ "./src/handleText.js":
/*!***************************!*\
  !*** ./src/handleText.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ typeWriter\n/* harmony export */ });\nlet i = 0;\nlet text = 'Because of the pandemic, we have to stay 6 feet or more from each other. Even that distance might not be enough. But we need to communicate, we need to \"talk\" somehow. Let\\'s learn a sign language. Say hello to people at parks using ASL';\nconst nextButton = document.getElementById('next');\nconst policyText = document.getElementById('policy');\nconst core = document.getElementById('core');\npolicyText.style.display = 'none';\nnextButton.style.display = '';\ncore.style.display = 'none';\nasync function typeWriter() {\n  if (i < text.length) {\n    document.getElementById('modal-text').innerHTML += text.charAt(i);\n    i++;\n    setTimeout(typeWriter, 30);\n  }\n\n  if (i === text.length) {\n    policyText.style.display = '';\n    nextButton.style.display = '';\n  }\n}\nnextButton.addEventListener('click', () => {\n  const modal = document.getElementById('modal');\n  modal.style.display = 'none';\n  core.style.display = 'flex';\n});\n\n//# sourceURL=webpack://amsl/./src/handleText.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleText.js */ \"./src/handleText.js\");\n/* harmony import */ var _DrawFingers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawFingers */ \"./src/DrawFingers.js\");\n/* harmony import */ var _Camera_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Camera.js */ \"./src/Camera.js\");\n // import handpose from './handleHandPose.js';\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_handleText_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n  const canvas = document.querySelector('#video-canvas');\n  const ctx = canvas.getContext('2d');\n  const resultText = document.querySelector('#result-text');\n  canvas.width = 640;\n  canvas.height = 480;\n  console.log('Canvas initialized');\n  (0,_Camera_js__WEBPACK_IMPORTED_MODULE_2__.default)(640, 480, 30).then(video => {\n    video.play();\n    video.addEventListener('loadeddata', () => {\n      console.log('Camera is ready');\n      let drawFingers = new _DrawFingers__WEBPACK_IMPORTED_MODULE_1__.default(640, 480, 30, ctx, video, resultText);\n      setTimeout(() => {\n        setInterval(() => {\n          drawFingers.draw();\n        }, 1000);\n      }, 1000);\n    });\n  });\n});\n\n//# sourceURL=webpack://amsl/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;