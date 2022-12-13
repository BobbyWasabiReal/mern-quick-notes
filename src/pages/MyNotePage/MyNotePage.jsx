import NoteCard from "../../components/NoteCard/NoteCard";

export default function MyNotePage({ notes, user }) {

    return (
        <>
            <h1>My Notes</h1>
            <NoteCard user={user} notes={notes} />
        </>
    );
}