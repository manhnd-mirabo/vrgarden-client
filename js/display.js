let closeBtn = document.getElementById("close-button");
let featureBtn = document.getElementById("feature");

closeBtn.addEventListener("click", function() {
    document.getElementById("box-chat").style.display = 'none';
    document.getElementById("feature").style.display = 'inline-block';
});

featureBtn.addEventListener("click", function() {
    document.getElementById("box-chat").style.display = 'inline-block';
    document.getElementById("feature").style.display = 'none';
});

function toogleFeatureBtn(bool) {
    if(!bool) {
        document.getElementById("feature").style.display = 'none';
    } else {
        document.getElementById("feature").style.display = 'inline-block';
    }
}

function toogleBoxChat(bool) {
    if(!bool) {
        document.getElementById("box-chat").style.display = 'none';
    } else {
        document.getElementById("box-chat").style.display = 'inline-block';
    }
}