import {clearMessage} from "./clearMessage.js";
import {clearFieldErrors} from "./clearFieldErrors.js";

export function clearAllMessages () {
    clearMessage();
    clearFieldErrors();
}
