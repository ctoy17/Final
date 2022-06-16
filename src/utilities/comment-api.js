import sendRequest from "./send-request";
const BASE_URL = '/api/comment';

export function commentList() {
    return sendRequest(BASE_URL);
}
export function addComment(comment) {
    return sendRequest(BASE_URL, 'POST', comment);
}

export function deleteComment(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function updateComment(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'POST');
}