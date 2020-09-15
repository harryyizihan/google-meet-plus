chrome.storage.local.get('message_object', function (items) {
    setDanmu(items.message_object);
    chrome.storage.local.remove('message_object');
});

function setDanmu(message_object) {
    var div = document.createElement('div');
    document.body.appendChild(div)
    div.style.border = "thick solid #0000FF";
    div.style.position = "absolute";
    div.style.zIndex = "2147483647";
    div.style.left = "0px";
    div.style.top = "0px";
    console.log("we are in test.js and the danmu is from " + message_object.message);
}

