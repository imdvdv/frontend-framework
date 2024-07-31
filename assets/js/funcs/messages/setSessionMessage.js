export function setSessionMessage (successStatus, messageText) {
    sessionStorage.setItem("status", successStatus);
    sessionStorage.setItem("message", messageText);
}