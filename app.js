// run application in loop




/*
// Permanently record desktop audio from the default input device.
const recorder = require('node-record-lpcm16');
const fs = require('fs');

// create global hotkey with control + alt + printscreen
const { registerHotkey } = require('node-hotkey');
registerHotkey('control+alt+printscreen', () => {
    // start recording
    recorder.start().pipe(fs.createWriteStream('output.raw'));
    // stop recording after 5 seconds
    setTimeout(() => {
        recorder.stop();
    }, 5000);
});

*/