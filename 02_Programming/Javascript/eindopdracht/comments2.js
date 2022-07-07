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

    // reply button
    let replyButton = document.createElement("button");
    replyButton.id = "replybutton"
    replyButton.textContent = "Reply";
    newComment.appendChild(replyButton);

    // reply function
    replyButton.onclick = function () {
        let replyText = document.querySelector("#replyText");
        
        replyText.textContent = "Replying to " + userName;

        let removeText = document.querySelector("#removeText");
        removeText.textContent = "X" ;

        removeText.addEventListener("click", function(){
            replyText.textContent = "";
            removeText.textContent = "";
          });

        }
   
        if (replyText.textContent.includes('Replying to')) {
            newComment.setAttribute('style', 'white-space: pre-line;');
            newComment.textContent = `Replying to ${userName} \r\n \r\n`;
            newComment.textContent += userComment;
            newComment.appendChild(replyButton);
        }

    return false;
}

