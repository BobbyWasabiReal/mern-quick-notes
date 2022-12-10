import NoteCard from "../../components/NoteCard/NoteCard";

export default function MyNotePage({ note }) {

    return (
        <>
            <h1>My Notes</h1>
            <NoteCard note={note} />
        </>
    );
}