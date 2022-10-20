let contentVideo = document.getElementById('content-video');
let boxChat = document.getElementById('box-chat');

function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function toggleVoice(status) {
    console.log('CLick voice: '  + status);
}

function toggleVideo(status) {
    console.log('CLick Video: ' + status);
}

function addItem(name, statusMic, statusCamera) {
    let elementHtml =  `
        <div class="friend-box" id="friend-box-${makeid(5)}">
        <video class="video" autoplay></video>
        
            <div class="info">
                <div class="name">
                    <span class="name-user">
                        ${name}
                    </span>
                </div>
                <div class="button-group">
                    <span class="button-voice" onclick="toggleVoice(${statusMic})">
                        <i class="fa fa-volume-up" aria-hidden="true"></i>
                    </span>
                    <span class="button-video" onclick="toggleVideo(${statusCamera})">
                        <i class="fa fa-video-camera" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    `;

    contentVideo.insertAdjacentHTML('beforeend', elementHtml);
}

function removeItem(id) {
    let element = document.getElementById(id);
    element.remove();
}

// addItem("manh", true, false)
// removeItem("friend-box-uoOWZ")