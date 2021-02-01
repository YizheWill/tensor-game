# LEARNING ASL (tensorflow.js powered)

## [Demo](https://yizhewill.github.io/tensor-game/)

### LEARNING_ASL is tensorflow.js powered web app for people to learn American Sign Language.

## TECHS

- #### HTML

- #### CSS

- #### Javascript

- #### Tensorflow.js

- #### ML Packages: Fingerpose, handpose and so on.

## CORE FUNCTIONS

#### 1. Use client's web cam to capture stream videos.

#### 2. Real time analysis of the video stream and recognize the hand in the frame.

#### 3. Use canvas to cover the video layer and draw the hand according to the joints and nodes.

#### 4. use machine learning packages to recognize the gesture and compare the gestures in the previously build library and render the character represented by the gesture.

## Approaches used in the project

#### 1. building model by myself:

- #### used opencv to take 20 pictures of each gesture and devided them into training and testing.
- #### used "labelImg" to tag the photos' "hand area"
- #### used tensorflow image classification to train the model and upload to IBM cloud.
- #### open source to public for future use.

### pros and cons:

#### learned the whole procedure of training a model and use it in the real life apps.

#### the models were trained in a very controlled environment, with very specific light source. So when using at different locations with different light sources, the result might be less accurate.

---

#### 2. use third party pre-built models like fingerpose and handpose.

- #### used lightweight packages handpose to recognize the hand and parse the data rendered back, used the parsed data to locate the joints and fingers, and then draw on the canvas.
- #### applied fingerpose package to recognize gesture of each finger and write specific functions create different gesture names.

### pros and cons:

#### packages selected are all very light weight, APIs are easy to use, and the results are more accurate compared with the models built by myself.

#### handpose and fingerpose are suppose to use the computer's CPU to run the image recognition. But sometimes they consume too much of the CPU and RAM to make the experience very laggy. So I ended up limiting the time of using the image recognition to 30 seconds to prevent bad UX.

---

## Future Features

- #### train a more accurate model with more pictures with different environment variables.
- #### try lower the CPU consumption of the ML models.
