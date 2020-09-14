 
document.querySelectorAll('[data-translate]').forEach(el=>{
    debugger;
    el.innerText = chrome.i18n.getMessage(el.getAttribute('data-translate'));
})

document.querySelectorAll('[data-translate-url]').forEach(el=>{
    el.href = chrome.i18n.getMessage(el.getAttribute('data-translate-url'));
    el.target="_blank"
})

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    document.write(sender + ": " + message);
    sendResponse({
        data: "I am fine, thank you. How is life in the background?"
    }); 
});
