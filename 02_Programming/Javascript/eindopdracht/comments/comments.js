function addComment() {
    let userComment = document.querySelector("#form__comment").value;
    let userName = document.querySelector("#form__username").value;
    let commentForm = document.querySelector("#form__container");

    // Als de velden niet zijn ingevuld, wordt de functie niet uitgevoerd
    if (userName === "" || userComment === "") {
        alert("Please fill in both your name and comment")
    } else {

        // Container voor betere positionering comments
        let commentContainer = document.createElement("div");
        commentContainer.id = "form__comment__container";
        commentForm.parentNode.insertBefore(commentContainer, commentForm);

        // Aanmaken comment div
        let newComment = document.createElement("div");
        newComment.id = "form__comment__text";
        newComment.textContent = userComment;
        commentContainer.appendChild(newComment);

        // Aanmaken username en img div
        let newUser = document.createElement("div")
        newUser.id = "form__user__name";
        newUser.textContent = userName;
        commentContainer.appendChild(newUser);

        let img = document.createElement("img");
        img.src = "../carousel/carousel-hamster.jpg";
        img.id = "form__user__photo";
        newUser.appendChild(img);

        // Aanmaken reply button
        let replyButton = document.createElement("button");
        replyButton.id = "form__reply__btn"
        replyButton.textContent = "Reply";
        newComment.appendChild(replyButton);

        // Functie om een reply te maken
        replyButton.onclick = function () {
            let replyText = document.querySelector("#form__reply");
            replyText.textContent = "Replying to " + userName;

            // Verstopt normale button en vervangt het door een nieuwe reply button
            let submitReplyBtn = document.querySelector("#form__reply__button");
            let submitButton = document.querySelector("#form__submit__button");
            submitButton.style.display = "none";
            let submitReply = document.createElement("button");
            submitReply.id = "form__submit__reply";
            submitReply.textContent = "Submit"
            submitReplyBtn.appendChild(submitReply);

            // Verwijdert reply button en tekst bij klikken van X
            let removeText = document.querySelector("#form__removereply");
            removeText.textContent = "X";
            removeText.addEventListener("click", function () {
                replyText.textContent = "";
                removeText.textContent = "";
                submitReplyBtn.textContent = "";
                submitButton.style.display = "block";
            });

            // Functie om de reply te plaatsen
            submitReply.onclick = function () {
                let userComment = document.querySelector("#form__comment").value;
                let replyUserName = document.querySelector("#form__username").value;

                if (userName === "" || userComment === "") {
                    alert("Please fill in both your name and comment")
                } else {
                    // Container voor betere positionering comments
                    let commentContainer = document.createElement("div");
                    commentContainer.id = "form__comment__container";
                    commentForm.parentNode.insertBefore(commentContainer, commentForm);

                    // Aanmaken comment div
                    let newComment = document.createElement("div")
                    newComment.id = "form__comment__text";
                    newComment.innerHTML = `<a style="font-size:0.9rem" href="#form__comment__text">Replying to ${userName}</a><br><br>${userComment}`

                    commentContainer.appendChild(newComment);

                    // Aanmaken username en img div
                    let newUser = document.createElement("div")
                    newUser.id = "form__user__name";
                    newUser.textContent = replyUserName;
                    commentContainer.appendChild(newUser);

                    let img = document.createElement("img");
                    img.src = "../carousel/carousel-hamster.jpg";
                    img.id = "form__user__photo";
                    newUser.appendChild(img);

                    // Aanmaken reply button
                    let replyButton = document.createElement("button");
                    replyButton.id = "form__reply__btn";
                    replyButton.textContent = "Reply";
                    newComment.appendChild(replyButton);

                    // Functie om een reply te maken
                    replyButton.onclick = function () {
                        let replyText = document.querySelector("#form__reply");
                        replyText.textContent = "Replying to " + replyUserName;

                        // Verstopt normale button en vervangt het door een nieuwe reply button
                        let submitReplyBtn = document.querySelector("#form__reply__button");
                        let submitButton = document.querySelector("#form__submit__button");
                        submitButton.style.display = "none";
                        let submitReply = document.createElement("button");
                        submitReply.id = "form__submit__reply";
                        submitReply.textContent = "Submit"
                        submitReplyBtn.appendChild(submitReply);

                        // Verwijdert reply button en tekst bij klikken van X
                        let removeText = document.querySelector("#form__removereply");
                        removeText.textContent = "X";
                        removeText.addEventListener("click", function () {
                            replyText.textContent = "";
                            removeText.textContent = "";
                            submitReplyBtn.textContent = "";
                            submitButton.style.display = "block";
                        });
                        // Functie om de reply te plaatsen
                        submitReply.onclick = function () {
                            let userComment = document.querySelector("#form__comment").value;
                            let replyReplyUserName = document.querySelector("#form__username").value;
                            let commentContainer = document.createElement("div");

                            // Container voor betere positionering comments
                            commentContainer.id = "form__comment__container";
                            commentForm.parentNode.insertBefore(commentContainer, commentForm);

                            // Aanmaken comment div
                            let newComment = document.createElement("div")
                            newComment.id = "form__comment__text";
                            newComment.innerHTML = `<a style="font-size:0.9rem" href="#form__comment__text">Replying to ${replyUserName}</a><br><br>${userComment}`
                            commentContainer.appendChild(newComment);

                            // Aanmaken username en img div
                            let newUser = document.createElement("div")
                            newUser.id = "form__user__name";
                            newUser.textContent = replyReplyUserName;
                            commentContainer.appendChild(newUser);

                            let img = document.createElement("img");
                            img.src = "../carousel/carousel-hamster.jpg";
                            img.id = "form__user__photo";
                            newUser.appendChild(img);

                            // Aanmaken reply button
                            let replyButton = document.createElement("button");
                            replyButton.id = "form__reply__btn";
                            replyButton.textContent = "Reply";
                            newComment.appendChild(replyButton);

                        }
                    }
                }
            }

            return false;
        }

    }
}