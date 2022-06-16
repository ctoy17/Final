import sendRequest from "../../src/utilities/send-request";
const BASE_URL = '/api/team'

export function teamList(){
    return sendRequest(BASE_URL);
}
export function addTeam(teamData){
    return sendRequest(BASE_URL, 'POST', teamData);
}
export function removeTeam(id){
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE')
}
export function updatePlan(id){
    return sendRequest(`${BASE_URL}/${id}`, 'POST')
}