
export function checkRuleExists (params, key) {

    if (params.hasOwnProperty(key) && params[key].hasOwnProperty('rule') && params[key]['rule']) {
        return true;
    } else {
        return false;
    }

}