import {showMessage} from "../messages/showMessage.js";
import {showFieldError} from "../messages/showFieldError.js";

export async function requestJSON(url, options = {}){
    try{
        let response = await fetch (url, options);
        let data = await response.json();
        if (options.method === "POST" || options.method === "PUT" || options.method === "PATCH" || options.method === "DELETE") {

            // Processing the response from the server in JSON format
            if (typeof data.status !== "undefined") {
                if (typeof data.url !== "undefined" && data.url !== "") {
                    document.location.href = data.url; // redirect to the URL specified by the server response
                } else if (typeof data.message !== "undefined" && data.message !== "") {
                    showMessage(data.status, data.message);
                }
                if (typeof data.errors !== "undefined" && typeof data.errors === "object") {
                    let inputKeys = Object.keys(data.errors);
                    inputKeys.forEach(function (inputKey) {
                        let field = document.querySelector(`#${inputKey}`)
                        showFieldError(field, data.errors[`${inputKey}`], "invalid");
                    });
                }
                return data.status;
            }
        } else if (options.method === "GET") {
            return data;
        } else {
            showMessage(false, "Method not supported");
            return false;
        }
    } catch{
        showMessage(false, "Something went wrong. Please try again later.");
        return false;
    }
}


