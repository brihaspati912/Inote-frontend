import React, { useContext, useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,

} from "@material-tailwind/react";

import noteContext from './notes/context/noteContext.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Trash2, Pencil } from 'lucide-react';



export default function card(props) {

    const context = useContext(noteContext);

    const { notes, updateNote } = props

    const { deleteNote } = context;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => {

        setShow(true);
        console.log(notes)
    }

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
                            <Pencil className="cursor-pointer ml-4" size={16} onClick={handleShow} />

                        </div>
                    </div>

                    <hr className="border-t border-gray-300 my-2" />
                    <Typography className='mb-4'>
                        {props.des}
                    </Typography>


                </CardBody>

            </Card>




            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Note</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" id="title" defaultValue={props.title} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <input type="text" className="form-control" id="description" defaultValue={props.des} />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
