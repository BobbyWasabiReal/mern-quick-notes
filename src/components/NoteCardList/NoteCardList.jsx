import NoteCardItem from '../NoteCardItem/NoteCardItem';

export default function NoteCardList({ myNotes }) {
    const notes = myNotes.map(note => (
        <NoteCardItem myNote={note} key={note._id} />
    ));
    return (
        <ul>{ notes }</ul>
    );
}