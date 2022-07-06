function submitComment() {
    // Naam en comment van de user ophalen
    let inputcont = document.querySelector(".input-container");
    let userName = document.querySelector(".user-name").value;

    // Onzichtbare container voor het positioneren van de nieuwe comments
    let newContainer = document.createElement("div")
    newContainer.id = "containerid";
    inputcont.parentNode.insertBefore(newContainer, inputcont);

    // Nieuw element met de username en een img maken
    let newUser = document.createElement("div")
    newUser.id = "userid";

    let img = document.createElement("img");
    img.src = "carousel-hamster.jpg";
    img.id = "userphoto";
    // inputcont.parentNode.insertBefore(img, inputcont);

    newUser.textContent = userName;
    // document.body.appendChild(newUser)
    newUser.appendChild(img)
    inputcont.parentNode.insertBefore(newUser, inputcont);

    // Inhoud comment
    let userComment = document.querySelector(".user-comment").value;
    let newComment = document.createElement("div")
    let replyButton = document.createElement("button");
    replyButton.id = "replybutton"
    newComment.id = "commentid";
    newComment.textContent = userComment;
    replyButton.textContent = "Reply";

    // Button
    newComment.appendChild(replyButton)
    inputcont.parentNode.insertBefore(newComment, inputcont);

    // Reply button function
    replyButton.onclick = function () {
        let inputcont = document.querySelector(".input-container");
        inputcont.firstChild.textContent = "Replying to " + userName;
        let submitReply = document.createElement("button");
        submitReply.textContent = "Submit"
        inputcont.appendChild(submitReply);
        submitReply.onclick = function () {
            let replyUser = document.createElement("div")
            replyUser.id = "userid";
        
            let replyImg = document.createElement("img");
            replyImg.src = "carousel-hamster.jpg";
            replyImg.id = "userphoto";
            let replyUsername = document.querySelector(".user-name").value;
            replyUser.textContent = replyUsername;
            replyUser.appendChild(replyImg)
            inputcont.parentNode.insertBefore(replyUser, inputcont);
        
            let userComment = document.querySelector(".user-comment").value;
            let replyComment = document.createElement("div");
            replyComment.id = "commentid";
            replyComment.innerHTML = `<a>Replying to ${userName}</a><p>${userComment}</p>`
            inputcont.parentNode.insertBefore(replyComment, inputcont);
        }
    }
} 
