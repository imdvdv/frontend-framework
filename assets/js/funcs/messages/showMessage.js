export function showMessage (successStatus, text) {
    if (document.querySelector(".message")){
        const message = document.querySelector(".message"),
            messageText = message.querySelector(".message-text");
        if (successStatus) {
            if (message.classList.contains("failure")){
                message.classList.remove("failure")
            }
            message.classList.add("success");
        } else {
            if (message.classList.contains("success")){
                message.classList.remove("success")
            }
            message.classList.add("failure");
        }
        message.classList.add("show");
        messageText.textContent = text;
    }
}