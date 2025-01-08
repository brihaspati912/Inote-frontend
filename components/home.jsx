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


            <div className="flex grid grid-cols-1 sm:grid-cols-1 justify-center sm:justify-center md:grid-cols-4 lg:grid-cols-6 gap-8">

                <Note />

            </div>



        </div>












    </>
    )
}
