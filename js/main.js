const NUMBER_FRIENDS = 5
const ICE_UPDATE_DELAY = 3000
const ICE_CONFIGURATION = {
    iceServers: [
        { urls: 'stun:stun.services.mozilla.com' },
        { urls: 'stun:stun.l.google.com:19302' },
        {
            urls: 'turn:localhost:3478',
            username: 'vrgDev',
            credential: 'mirabo@2050',
        },
    ],
}

function syncShowMyFace() {
    console.log('show my face');
    setTimeout(() => (async () => await showMyFace())(), 2000);
}

async function showMyFace() {
	addOwnItem("Own", true, true);
    console.log('Request userMedia to show my face...')
	let myVideo = document.getElementById('myVideo');
	let publishPeerConnection = new RTCPeerConnection(ICE_CONFIGURATION);
    let stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true })
    myVideo.srcObject = stream;
    publishPeerConnection.addStream(stream);
}
