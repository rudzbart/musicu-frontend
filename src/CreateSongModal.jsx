import React, { useState, forwardRef, useImperativeHandle } from "react";
import { Modal, Button } from 'react-bootstrap'
import SongService from "./SongService";
 
const CreateSongModal = forwardRef((props, ref) => {
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => {
        setShow(true)
    };
 
    useImperativeHandle(ref, () => {
        return {
            handleShow: handleShow
        };
    });
 
    const submit = (song) => {
 
        handleClose();
    };
 
    return (
        <>
            <Modal centered={true} show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Add New Song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => submit}>
                        Add
          </Button>
                    <Button variant="outline-dark" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
 
});
 
export default CreateSongModal;