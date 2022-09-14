/*
UserMedia Desktop Audio Recorder
buffer 15 seconds of audio

*/

function handleStream(stream) {
    console.log('got stream');
    console.log(stream);


    document.querySelector('#recordingRunning').innerHTML = 'Recording...';
}
function startRecording() {
    console.log('start recording');
    navigator.mediaDevices.getUserMedia({
        audio: {
            mandatory: {
                chromeMediaSource: 'desktop'
            }
        },
        video: {
            mandatory: {
                chromeMediaSource: 'desktop'
            }
        }
    }).then(handleStream, function (err) {
        console.log('Error: ' + err);
    });
}

function stopRecording() {
    console.log('stop recording');
}