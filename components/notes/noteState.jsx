import React from 'react';
import { useState } from 'react';
import NoteContext from './context/noteContext';

export default function NoteState(props) {
    const host = "http://localhost:8080/"

    const notesIntial = [


    ]
    const [notes, setNotes] = useState(notesIntial);

    //Get Notes
    const getNote = async () => {

        const url = `${host}api/notes/fetchallnotes`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjc3MTQwNDdhOGRjZTM0OTA0ZWU1NTc2IiwiaWF0IjoxNzM1NDc1MjcxfQ.rAnFjvw6rdwTCR4I7oTNhoMU691XyldR6g1yQu24xk8"
            }

        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }



    //Add a note
    const addNote = async (title, des, tag, id) => {

        const url = `${host}api/notes/addnotes${id}`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjc3MTQwNDdhOGRjZTM0OTA0ZWU1NTc2IiwiaWF0IjoxNzM1NDc1MjcxfQ.rAnFjvw6rdwTCR4I7oTNhoMU691XyldR6g1yQu24xk8"
            },
            body: JSON.stringify({ title, des, tag })
        });



        const note = {
            "_id": "6771503880c01324461a0654",
            "user": "67714047a8dce34904ee5576",
            "title": title,
            "des": des,
            "tag": tag,
            "date": "2024-12-29T13:35:52.274Z",
            "__v": 0


        }

        setNotes(notes.concat(note))
    }


    //Delete note

    const deleteNote = async (id) => {

        const url = `${host}api/notes/deletenote/${id}`
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjc3MTQwNDdhOGRjZTM0OTA0ZWU1NTc2IiwiaWF0IjoxNzM1NDc1MjcxfQ.rAnFjvw6rdwTCR4I7oTNhoMU691XyldR6g1yQu24xk8"
            }

        });
        const json = await response.json()
        console.log(json)

        console.log("delete" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }
    //Edit note
    const editNote = async (id, title, des, tag) => {
        const url = `${host}api/notes/updatenote/${id}`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjc3MTQwNDdhOGRjZTM0OTA0ZWU1NTc2IiwiaWF0IjoxNzM1NDc1MjcxfQ.rAnFjvw6rdwTCR4I7oTNhoMU691XyldR6g1yQu24xk8"
            },
            body: JSON.stringify({ title, des, tag })
        });
        const json = response.json();


        //API call


        //Logic to Edit
        for (let index = 0; index < notes.length; index++) {
            const element = array[index];
            if (element.id === id) {
                element.title = title;
                element.des = des;
                element.tag = tag;
            }

        }
    }
    //



    const contextValue = {

        notes,
        notesIntial,
        addNote,
        deleteNote,
        editNote,
        getNote,
        updateNote
    }

    return (
        <div>
            <NoteContext.Provider value={contextValue}>
                {props.children}
            </NoteContext.Provider>
        </div>
    )
}
