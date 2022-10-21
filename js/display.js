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

