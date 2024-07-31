import {clearMessage} from "./clearMessage.js";

export function listenToCloseMessageButton () {
    if (document.querySelector(".message-button")) {
        const messageButton = document.querySelector(".message-button");
        messageButton.addEventListener("click", function() {
            clearMessage();
        });
    }
}