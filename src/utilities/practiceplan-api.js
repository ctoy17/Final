import sendRequest from "./send-request";
const BASE_URL = '/api/practiceplan';

//show all practices
export function practiceList() {
    return sendRequest(BASE_URL, 'GET');
}
export function addPracticePlan(planData) {
//add practice plan
    return sendRequest(BASE_URL, 'POST', planData);
}


export function removePracticePlan(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

  // Updates the practice plan
export function updatePlan(id) {
    // Changing data on the server, so make it a POST request
    return sendRequest(`${BASE_URL}/${id}`, 'POST');
}