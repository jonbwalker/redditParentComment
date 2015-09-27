
var parentComments = getParentCommentNodeList()

Array.prototype.forEach.call(parentComments, function(comment) {
    //console.log("Painting it red")
    comment.style.backgroundColor = "#E8F0FF"
});

function getParentCommentNodeList() {
    var comments = document.querySelectorAll('[class^="child"]');
    console.log("comment node list", comments)
    return comments
}