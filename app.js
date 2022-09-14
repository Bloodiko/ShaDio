const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'js/preload.js'),
            nodeIntegrationInWorker: true
        },
        // show: false // uncomment later
    })

    // Register a 'CommandOrControl+H' shortcut listener.
    const ret = globalShortcut.register('CommandOrControl+Shift+H', () => {
        console.log('hiding window');
        win.hide();
    })

    if (!ret) {
        console.log('registration failed')
    }

    // register a 'CommandOrControl+Shift+I' shortcut listener.
    const ret2 = globalShortcut.register('CommandOrControl+Shift+I', () => {
        console.log('showing window');
        win.show();
    })

    if (!ret2) {
        console.log('registration failed')
    }

    win.loadFile('index.html')
}

app.whenReady().then(() => {

    console.log('App is ready');

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

    // Unregister all shortcuts.
    globalShortcut.unregisterAll()
})


