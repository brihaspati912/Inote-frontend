import React, { useContext } from 'react';
import Note from "../components/Note"
import AddNote from "../components/AddNote"



export default function Home() {


    return (<>

        <h1>Your Notes</h1>

        <AddNote />


        <div className="row-span-full">
            <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                About
            </label>




            <Note />




        </div>












    </>
    )
}
