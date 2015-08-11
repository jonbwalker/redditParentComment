/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    console.log("HAI FROM CONTENT.JS")

    if (msg.text && (msg.text == "report_back")) {
        console.log("HAI FROM CONTENT.JS if block")
        /* Call the specified callback, passing 
         the web-pages DOM content as argument */
        sendResponse(document.all[0].outerHTML);
    }
});