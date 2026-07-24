import './app.js';
import '@tensorflow/tfjs-backend-webgl';
import * as tf from '@tensorflow/tfjs';

// Initialize TF.js backend
async function init() {
  await tf.ready();
  console.log('TF.js ready, backend:', tf.getBackend());
}

init().catch(console.error);