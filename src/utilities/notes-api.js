import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAll() {
    return sendRequest(BASE_URL);
}

export async function create(noteData) {
    return sendRequest(BASE_URL, 'POST', noteData);
}  

export async function deleteOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export async function update(noteData) {
    return sendRequest(`${BASE_URL}/${noteData._id}`, 'PUT', noteData);
}