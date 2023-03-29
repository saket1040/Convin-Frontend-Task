import React from 'react'
import Modal from 'react-bootstrap/Modal';


const ModalIframe = ({src, show, handleclose}) => {
  return (
    <Modal show={show} onHide={handleclose}>
      {console.log(src)}
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <iframe width="460" height="315" src={src+'?autoplay=1'} title="YouTube video player"  allow="autoplay;" allowFullScreen></iframe>
      </Modal.Body>
    </Modal>
  )
}

export default ModalIframe
