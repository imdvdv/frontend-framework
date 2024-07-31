import {showMessage} from "./showMessage.js";

export function showSessionMessage () {
    const status = sessionStorage.getItem("status"),
        message = sessionStorage.getItem("message");

    if (status === "true") {
        showMessage(true, message);
    } else if (status === "false") {
        showMessage(false, message);
    } else {
        showMessage(false, "Something went wrong. Please try again later.");
    }
}