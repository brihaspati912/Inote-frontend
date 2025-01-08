import React, { useContext, useEffect } from 'react'
import Card from "./card.jsx"
import noteContext from './notes/context/noteContext.jsx';
import Modal from './Modal.jsx';

export default function Note() {
    const context = useContext(noteContext)

    const { notes, getNote } = context;
    useEffect(() => {
        getNote()
    }, [])

    const updateNote = () => {

    }

    return (
        <>
            <Modal />
            {notes.map((note) => {
                return (
                    <div key={note._id} update={() => { updateNote(note) }}>
                        <Card title={note.title} des={note.des} tag={note.tag} id={note._id} />

                    </div>
                )
            })}
        </>
    )
}
