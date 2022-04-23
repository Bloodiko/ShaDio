const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'js/preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {

    console.log('App is ready');

    // Register a 'CommandOrControl+X' shortcut listener.
    const ret = globalShortcut.register('CommandOrControl+Shift+X', () => {
        console.log('CommandOrControl+Shift+X is pressed')
    })

    if (!ret) {
        console.log('registration failed')
    }

    // Check whether a shortcut is registered.
    console.log(globalShortcut.isRegistered('CommandOrControl+Shift+X'))

    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    });

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('will-quit', () => {
    // Unregister a shortcut.
    globalShortcut.unregister('CommandOrControl+Shift+X')

    // Unregister all shortcuts.
    globalShortcut.unregisterAll()
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