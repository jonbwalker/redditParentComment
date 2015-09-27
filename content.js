/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    /* If the received message has the expected format... */
    console.log("Hello from CONTENT.JS your grace")

    function getParentCommentNodeList() {
        var comments = document.querySelectorAll('[class^="entry unvoted"]' || '[class*="entry likes"]' || 'class*="entry dislikes"]');
        console.log("comment node list", comments)
        return comments
    }
});