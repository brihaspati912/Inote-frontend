import React, { useContext, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,

} from "@material-tailwind/react";

import noteContext from './notes/context/noteContext.jsx';

import { Trash2, Pencil } from 'lucide-react';



export default function card(props) {

    const context = useContext(noteContext);

    const { notes, updateNote } = props

    const { deleteNote } = context;
    return (
        <>
            <Card className="w-small mt-1 w-[12rem]  ">

                <CardBody>


                    <div className="flex justify-between items-center">
                        <Typography>
                            {props.title}
                        </Typography>
                        <div className="flex justify-center items-center ml-4">
                            <Trash2 className="cursor-pointer ml-4" size={16} onClick={() => deleteNote(props.id)} />
                            <Pencil className="cursor-pointer ml-4" size={16} onClick={updateNote} />

                        </div>
                    </div>

                    <hr className="border-t border-gray-300 my-2" />
                    <Typography className='mb-4'>
                        {props.des}
                    </Typography>


                </CardBody>

            </Card>
        </>
    )
}
