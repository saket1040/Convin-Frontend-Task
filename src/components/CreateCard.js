import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateCard = ({bucketname,setBucketname,name,setName,link,setLink,createCard}) => {
  return (
    <div>
       <Form className='my-5 px-5 py-3' style={{borderStyle: 'solid', borderColor:'#b9b9b9', borderWidth: 'thin'}}>
                <div style={{textAlign:'center'}}>
                <h3 >Create Card</h3>
                </div>
                
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
                <Button variant="success" onClick={createCard}>
                    Create
                </Button>
            </Form>
    </div>
  )
}

export default CreateCard
