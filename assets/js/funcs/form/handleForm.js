import {validationParams} from "../../conf/validationParams.js";
import {showHidePassword} from "./showHidePassword.js";
import {listenToSessionMessage} from "../messages/listenToSessionMessage.js";
import {clearAllMessages} from "../messages/clearAllMessages.js";
import {validateForm} from "../validation/validateForm.js";
import {requestJSON} from "../requests/requestJSON.js";

export async function handleForm(form, url, params = validationParams){
    listenToSessionMessage();
    showHidePassword();

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        clearAllMessages();
        if (validateForm(form, params)) {
            const bodyData = new FormData(form);
            const options = {
                method: "POST",
                body: bodyData,
            };
            return await requestJSON(url, options);
        }
        return false;
    });

}
