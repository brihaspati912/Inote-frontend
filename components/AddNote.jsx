import React, { useContext, useState } from 'react';
import noteContext from './notes/context/noteContext.jsx';

export default function AddNote() {

    const context = useContext(noteContext)

    const { addNote } = context;
    const [note, setNote] = useState({ title: "", description: "", tag: "default", id: "" })


    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: [e.target.value] });

    }
    const handleClick = (e) => {
        console.log("Hello");
        e.preventDefault();
        addNote(note.title, note.description, note.tag, note.id)

    }
    return (
        <>



            <form className="max-w-sm ">
                <div className="mb-1">
                    <label htmlFor="title" id='title' className="text-sm/6 font-medium text-gray-900">

                        Title
                    </label>

                    <input type="text" name='title' className=" border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " placeholder="name@flowbite.com" onChange={handleChange} required />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" id='description' className="text-sm/6 font-medium text-gray-900">
                        Description
                    </label>

                    <input type="text" name='description' className=" border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 " placeholder="name@flowbite.com" onChange={handleChange} required />
                </div>

                <button type="submit" className="text-white mb-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " onClick={handleClick}>Submit</button>
            </form>

        </>
    )
}
