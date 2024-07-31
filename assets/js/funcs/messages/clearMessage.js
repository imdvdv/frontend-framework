export function clearMessage () {
    if (document.querySelector(".message")) {
        const message = document.querySelector(".message");
        message.classList.remove("show", "failure", "success");
    }
    if (sessionStorage["status"] && sessionStorage["message"]){
        delete sessionStorage["status"];
        delete sessionStorage["message"];
    }
}