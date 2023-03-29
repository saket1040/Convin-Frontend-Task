
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ModalIframe from './ModalIframe';
import { v4 as uuidv4 } from 'uuid';
import ModalEdit from './ModalEdit';
import { UserContext } from '../context/ContextProvider';
import CreateCard from './CreateCard';


function MainPage() {
    //modal iframe
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [iframe, setIframe] = useState('');
    const handleShow = (e) => {
        setShow(true);
        setIframe(e.link);
        setHistory(history => [...history, {
            name: e.title,
            link: e.link,
            time: new Date().toLocaleTimeString('en-US')
        }])
    }

    //form
    const [name, setName] = useState('');
    const [bucketname, setBucketname] = useState('');
    const [link, setLink] = useState('');

    const createCard = () => {
        setCardData(cardData => [...cardData,
        {
            id: uuidv4(),
            title: name,
            bucketName: bucketname,
            link
        }]);
    }

    //modal edit
    const [editCard, setEditCard] = useState({})
    const [editShow, setEditShow] = useState(false);
    const handleCloseEdit = () => setEditShow(false);
    const handleEdit = (card) => {
        console.log(card)
        setEditShow(true);
        setEditCard(card)
        //setCardData(cardData=>cardData.filter((card)=>card.id!==cardId))
    }
    const handleDelete = (cardId) => {
        setCardData(cardData => cardData.filter((card) => card.id !== cardId))
    }
    //multiple select and delete
    const [selected, setSelected] = useState([])
    const handleMultipleDelete = () => {
        for (let index = 0; index < selected.length; index++) {
            const element = selected[index];
            setCardData(cardData => cardData.filter((card) => card.id !== element.id))
        }
        setSelected([])
    }
    const handleMultiple = (cardSelect, e) => {
        if (selected.length === 0) {
            setSelected(selected => [...selected, cardSelect])
        }
        else if (selected[0].bucketName === cardSelect.bucketName) {
            setSelected(selected => [...selected, cardSelect])
            e.target.checked = (cardSelect.bucketName === selected[0].bucketName) ? true : false;
        }
        else {
            alert('Same category can be deleted at once')
            e.target.checked = (cardSelect.bucketName === selected[0].bucketName) ? true : false;
        }
    }

    //history
    const { setHistory, cardData, setCardData } = useContext(UserContext);
    return (
        <div className="App mx-5 my-4 row">
            {/* card */}
            <div style={{ textAlign: 'center' }}>
                <h3 >Cards</h3>
            </div>
            {cardData.map(card => (
                <Card style={{ width: '18rem' }} className="mx-2 my-2">
                    <Card.Body>
                        <div onClick={() => handleShow(card)} style={{ cursor: 'pointer' }}>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{card.bucketName}</Card.Subtitle>
                        </div>

                        <Card.Link href={card.link} target="_blank">{card.link}</Card.Link>
                        <br />
                        <div className='my-2'>
                            <Button variant="info" onClick={() => handleEdit(card)}>Edit</Button>{' '}
                            <Button variant="danger" onClick={() => handleDelete(card.id)}>Delete</Button>
                        </div>

                    </Card.Body>
                    <Form.Check
                        className='my-2'
                        type='checkbox'
                        id={card.id}
                        label="Select"
                        checked={selected.find((o) => {
                            if (o.id === card.id) {
                                return true;
                            }
                        })}
                        onChange={(e) => handleMultiple(card, e)}
                    />

                </Card>
            ))}
            {/* create form */}
            <div className='col-12'>
                {selected.length > 0 ? <Button variant="danger" onClick={() => handleMultipleDelete()} >Multiple Delete</Button> : <></>}
            </div>

            <CreateCard
                bucketname={bucketname}
                setBucketname={setBucketname}
                name={name}
                setName={setName}
                link={link}
                setLink={setLink}
                createCard={createCard} />

            {/* Modal */}
            {editShow ? (<ModalEdit
                editShow={editShow}
                handleCloseEdit={handleCloseEdit}
                card={editCard}
                setCard={setEditCard}
                setCardData={setCardData}
                cardData={cardData}
            />) : (<></>)}
            {show ? (<ModalIframe
                src={iframe}
                show={show}
                handleclose={handleClose}
            />) : (<></>)}

        </div>
    );
}

export default MainPage;
