function addComment() {

    let userComment = document.getElementById("usercomment").value;
    let userName = document.getElementById("username").value;

    if (userName === "" || userComment === "") {
        alert("Please fill in both your name and comment")
    }  else {

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
        removeText.textContent = "X";

        let submitreplybtn = document.querySelector("#submitreplybtn");

        removeText.addEventListener("click", function () {
            replyText.textContent = "";
            removeText.textContent = "";
            submitreplybtn.textContent = ""
        });

        let submitReply = document.createElement("button");
        submitReply.id = "submitreply";
        submitReply.textContent = "Submit"
        submitreplybtn.appendChild(submitReply);
        submitReply.onclick = function () {
            let userComment = document.getElementById("usercomment").value;
            let replyUserName = document.getElementById("username").value;

            if (userName === "" || userComment === "") {
                alert("Please fill in both your name and comment")
            }  else {
            // inhoud comment plaatsen
            let newComment = document.createElement("div")
            newComment.id = "commentid";
            newComment.innerHTML = `<a style="font-size:0.9rem" href="#commentid">Replying to ${userName}</a><br><br>${userComment}`
            document.body.appendChild(newComment)

            // username en image
            let newUser = document.createElement("div")
            newUser.id = "userid";
            newUser.textContent = replyUserName;
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
        }}
    }
    }

    // if (replyText.textContent.includes('Replying to')) { gebruiken voor submitreply functie?
    //     // newComment.setAttribute('style', 'white-space: pre-line;');
    //     // newComment.textContent = `Replying to ${userName} \r\n \r\n`;
    //     // newComment.textContent += userComment;
    //     newComment.innerHTML = `<a style="font-size:0.9rem" href="#commentid">Replying to ${userName}</a><br><br>${userComment}`
    //     newComment.appendChild(replyButton);
    // }

    return false;
}

