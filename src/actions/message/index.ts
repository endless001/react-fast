import { messageConstants } from '../../constants/message';


function success(message:string) {
    return { type: messageConstants.SUCCESS, message };
}

function error(message:string) {
    return { type: messageConstants.ERROR, message };
}

function clear() {
    return { type: messageConstants.CLEAR };
}