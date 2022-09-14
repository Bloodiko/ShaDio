const { desktopCapturer } = require('electron');


/*
UserMedia Desktop Audio Recorder
buffer 15 seconds of audio

*/

function handleStream(stream) {

}

desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
    for (const source of sources) {
        console.log(source.name);
    }
})


try {
    const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
            mandatory: {
                chromeMediaSource: 'desktop'
            }
        }
    });
    handleStream(stream);
}
catch (e) {
    console.log(e);
}
