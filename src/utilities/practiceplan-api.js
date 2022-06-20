import sendRequest from "./send-request";
const BASE_URL = '/api/practiceplan';


export function createPractice(practice) {
    return sendRequest(`${BASE_URL}/create`, 'POST', { practice });
}

export function getAllPractices() {
    return sendRequest(`${BASE_URL}/practices`);
}

export function getCoachPractices() {
    return sendRequest(`${BASE_URL}/coach`);
}
export function viewDetails(id) {
    return sendRequest(`${BASE_URL}/coach/${id}`);
}

export function removePracticePlan(id) {
    return sendRequest(`${BASE_URL}/coach/${id}`, 'DELETE');
}

export function updatePlan(id) {
    return sendRequest(`${BASE_URL}/coach/${id}`, 'POST');
}