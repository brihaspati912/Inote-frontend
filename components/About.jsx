import React, { useContext } from 'react';
import noteContext from './notes/context/noteContext';

export default function About() {
    const a = useContext(noteContext)
    return (
        <>
            <h1>hello i am {a.name} about</h1>
        </>
    )
}
