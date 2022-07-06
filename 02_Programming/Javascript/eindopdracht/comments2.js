function addComment() {
    let userComment = document.getElementById("usercomment").value;
let userName = document.getElementById("username").value;

// inhoud comment plaatsen
let newComment = document.createElement("div")
newComment.id = "commentid";
newComment.textContent = userComment;
document.body.appendChild(newComment)

// username en image
let newUser = document.createElement("div")
newUser.id = "userid";
newUser.textContent = userName;
document.body.appendChild(newUser);

let img = document.createElement("img");
img.src = "carousel-hamster.jpg";
img.id = "userphoto";
newUser.appendChild(img);

let replyButton = document.createElement("button");
replyButton.id = "replybutton"
replyButton.textContent = "Reply";
// newComment.appendChild(replyButton)
// inputcont.parentNode.insertBefore(newComment, inputcont);


return false;
}

// var t = new Date().getTimezoneOffset() / 60;

// console.log(t)
