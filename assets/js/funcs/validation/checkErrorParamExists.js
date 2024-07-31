export function checkErrorParamExists (params, key) {

    if (params.hasOwnProperty(key) && params[key].hasOwnProperty('error') && params[key]['error']) {
        return true;
    } else {
        return false;
    }

}