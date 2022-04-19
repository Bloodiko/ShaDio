const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

console.log(app);

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})



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