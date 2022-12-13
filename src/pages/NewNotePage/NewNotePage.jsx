import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";

export default function NewOrderPage({ user, addNote }) {
    return (
        <>
            <h1>New Note</h1>
            <AddNoteForm user={user} addNote={addNote} />
        </>
    );
}