import {showSessionMessage} from "./showSessionMessage.js";
import {clearMessage} from "./clearMessage.js";

export function listenToSessionMessage () {
    window.addEventListener("unload", (e) => {
        if (sessionStorage["status"] && sessionStorage["message"]) {
            showSessionMessage();

            window.addEventListener("onunload", (e) => {
                clearMessage();
            });
            
        }
    });
    // window.onload = function (e) {
    //     if (sessionStorage["status"] && sessionStorage["message"]) {
    //         showSessionMessage();
    //         window.onunload = function (e) {
    //             clearMessage();
    //         }
    //     }
    // }
}