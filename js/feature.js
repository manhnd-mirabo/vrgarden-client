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

function getNumberItemFriendVideo(id) {
    let arrayFriendVideos = document.getElementsByClassName("friend-box");
    let n = 0;
    for (let i = 0; i < arrayFriendVideos.length; i++) {
        if (arrayFriendVideos[i].hasAttribute("id")) {
            if (arrayFriendVideos[i].getAttribute("id") === id) {
                n = i;
            }
        }
    }
    return n + 1;
}

function toggleVoice(status, id) {
    if (id === "OWNER") {
        console.log("toggle voice in owner");
    } else {
        console.log('CLick in element number: ' + getNumberItemFriendVideo(id));
    }
    console.log('CLick voice: ' + status);
}

function toggleVideo(status, id) {
    if (id === "OWNER") {
        console.log("toggle voice in owner");
    } else {
        console.log('CLick in element number: ' + getNumberItemFriendVideo(id));
    }
    console.log('CLick Video: ' + status);
}

function addOwnItem(name, statusMic, statusCamera) {
	addItemVideo(true, name, statusMic, statusCamera)
}
function addItem(name, statusMic, statusCamera) {
	addItemVideo(false, name, statusMic, statusCamera)
}
function addItemVideo(isMe, name, statusMic, statusCamera) {
	var idstr = isMe ? "owner-box" : "friend-box";
    let id = idstr + makeid(5);
    let elementHtml =  `
        <div class="friend-box" id="${id}">
        <video class="video" id="myVideo" autoplay></video>

            <div class="info">
                <div class="name">
                    <span class="name-user">
                        ${name}
                    </span>
                </div>
                <div class="button-group">
                    <span class="button-voice" onclick="toggleVoice(${statusMic}, '${id}')">
                        <i class="fa fa-volume-up" aria-hidden="true"></i>
                    </span>
                    <span class="button-video" onclick="toggleVideo(${statusCamera}, '${id}')">
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

function removeItemFriendVideoByNum(n) {
    let arrayFriendVideos = document.getElementsByClassName("friend-box");
    arrayFriendVideos[n-1].remove();
}

function getItemFriendVideo(n) {
    let arrayFriendVideos = document.getElementsByClassName("friend-box");
    return arrayFriendVideos[n].children[0];
}
