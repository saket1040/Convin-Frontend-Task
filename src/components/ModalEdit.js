import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ModalEdit = ({ editShow, handleCloseEdit, card, setCardData, cardData }) => {
    const [name, setName] = useState(card.title);
    const [bucketname, setBucketname] = useState(card.bucketName);
    const [link, setLink] = useState(card.link);

    const editCard = () => {
        const newState = cardData.map(obj => {
            // 👇️ if id equals 2, update country property
            if (obj.id === card.id) {
                return {
                    ...obj, title: name,
                    bucketName: bucketname,
                    link: link
                };
            }

            // 👇️ otherwise return the object as is
            return obj;
        });

        setCardData(newState);
        handleCloseEdit();
    }
    return (
        <Modal show={editShow} onHide={handleCloseEdit}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Bucket Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Bucket Name" value={bucketname} onChange={(e) => setBucketname(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Card Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Card Name" value={name} onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Link</Form.Label>
                        <Form.Control type="text" placeholder="Enter Link" value={link} onChange={(e) => setLink(e.target.value)} />
                    </Form.Group>
                    <Button variant="success" onClick={editCard} >
                        Done
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default ModalEdit;
