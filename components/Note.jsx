import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from "./card.jsx"
import noteContext from './notes/context/noteContext.jsx';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Note() {
    const context = useContext(noteContext)

    const { notes, getNote } = context;
    useEffect(() => {
        getNote()
    }, [])

    const updateNote = (note) => {
        ref.current.click()
    }
    const ref = useRef("")


    return (
        <>







            {notes.map((note) => {
                return (
                    <div key={note._id} className='' >
                        <Card title={note.title} des={note.des} tag={note.tag} id={note._id}
                            update={() => { updateNote(note) }}
                        />

                    </div>
                )
            })}
        </>
    )
}
