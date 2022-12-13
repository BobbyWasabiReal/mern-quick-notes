export default function NoteCardItem({ myNote }) {
    return (
        <div className="MyNoteCardItem">
            <h3 className="MyNoteCardItem-title">{myNote.title}</h3>
            <p className="MyNoteCardItem-content">{myNote.content}</p>
        </div>
    );
}