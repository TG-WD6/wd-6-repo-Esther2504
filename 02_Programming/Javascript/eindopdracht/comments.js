function submitComment() {
    let inputcont = document.querySelector(".input-container");

// Container met absolute positie zodat ze goed positionen
let newContainer = document.createElement("div")
newContainer.id = "containerid";
inputcont.parentNode.insertBefore(newContainer, inputcont);

    // Username
    let userName = document.querySelector(".user-name").value;
    let newUser = document.createElement("div")
    newUser.id = "userid";
    newUser.textContent = userName;
    // document.body.appendChild(newUser)
    inputcont.parentNode.insertBefore(newUser, inputcont);

    // Inhoud comment
    let userComment = document.querySelector(".user-comment").value;
    let newComment = document.createElement("div")
    newComment.id = "commentid";
    newComment.textContent = userComment;
    inputcont.parentNode.insertBefore(newComment, inputcont);

    // Userimage
    let img = document.createElement("img");
    img.src = "carousel-hamster.jpg";
    img.id = "userphoto"
    inputcont.parentNode.insertBefore(img, inputcont);
} 
