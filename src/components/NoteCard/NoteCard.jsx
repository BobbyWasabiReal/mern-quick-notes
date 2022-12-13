import { useState, useEffect } from 'react';
import * as notesAPI from '../../utilities/notes-api';
import NoteCardList from '../NoteCardList/NoteCardList';

export default function NoteCard({ user }) {
    const [myNotes, setMyNotes] = useState([]);

    useEffect(function () {
        async function getNotes() {
            const notes = await notesAPI.getAll();
            setMyNotes(notes);
        }
        getNotes();
    }, [])

    return (
        <>
            { myNotes.length > 0 ?
                <div className="noteCard">
                    <NoteCardList myNotes={myNotes.filter(note => note.user === user._id)} />
                </div>
                :
                <h2>No Notes Yet... :(</h2>
            }
        </>
    );
}