import AddNoteForm from "../../components/AddNoteForm/AddNoteForm";

export default function NewOrderPage({ user, setNote, note }) {
    return (
        <>
            <h1>New Note</h1>
            <AddNoteForm user={user} setNote={setNote} note={note} />
        </>
    );
}