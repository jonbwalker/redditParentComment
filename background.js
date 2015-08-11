/* Regex-pattern to check URLs against. 
 It matches URLs like: http[s]://[...]reddit.com[...] */
var urlRegex = /^https?:\/\/(?:[^\.]+\.)?reddit\.com/;

/* A function creator for callbacks */
function interactWithDom(domContent) {
    console.log("I present to you, the DOM, my lord:\n" + domContent);
}

/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('Hello from browserAction clickListener, my lord')
    /*...check the URL of the active tab against the pattern... */
    if (urlRegex.test(tab.url)) {
        console.log('it matches, my lord')
        /* ...if it matches, send a message specifying a callback too */
        chrome.tabs.sendMessage(tab.id, { text: "report_back" },
            interactWithDom);
    }
});