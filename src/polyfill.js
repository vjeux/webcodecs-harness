
// == webcodecs-polyfill

// import {polyfillWebCodecsApi} from 'webcodecs-polyfill';
// module.exports.polyfillWebCodecsApi = async function() { polyfillWebCodecsApi() };

// == node-webcodecs

const webcodecs = require('node-webcodecs');
export const polyfillWebCodecsApi = async () => {
	globalThis.VideoDecoder ??= webcodecs.VideoDecoder;
	globalThis.AudioDecoder ??= webcodecs.AudioDecoder;
	globalThis.VideoEncoder ??= webcodecs.VideoEncoder;
	globalThis.AudioEncoder ??= webcodecs.AudioEncoder;
	globalThis.EncodedVideoChunk ??= webcodecs.EncodedVideoChunk;
	globalThis.EncodedAudioChunk ??= webcodecs.EncodedAudioChunk;
	globalThis.VideoFrame ??= webcodecs.VideoFrame;
	globalThis.VideoColorSpace ??= webcodecs.VideoColorSpace;
	globalThis.AudioData ??= webcodecs.AudioData;
	globalThis.DOMRectReadOnly ??= webcodecs.DOMRectReadOnly;
};


// == node-libav-webcodecs
// npm install canvas node-web-audio-api

// import { init } from 'node-libav-webcodecs/polyfill';
// export const polyfillWebCodecsApi = init;


// == node-libav-webcodecs

// import { installWebCodecsPolyfill } from 'webcodecs-node';
// module.exports.polyfillWebCodecsApi = async function() { installWebCodecsPolyfill() };


// browser

// export const polyfillWebCodecsApi = async function() { };
