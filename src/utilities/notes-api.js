import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAll() {
    const res = await sendRequest(BASE_URL);
    return res.data;
}

export async function create(noteData) {
    const res = await sendRequest(`${BASE_URL}/new`, 'POST', noteData);
    return res.data;
}  

export async function deleteOne(id) {
    const res = await sendRequest(`${BASE_URL}/${id}`, 'DELETE');
    return res.data;
}

export async function update(noteData) {
    const res = await sendRequest(`${BASE_URL}/${noteData._id}`, 'PUT', noteData);
    return res.data;
}