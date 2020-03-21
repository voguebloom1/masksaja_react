
import React from 'react'
import { Row, Col, Container, Modal, Button,Table } from 'react-bootstrap';

export const MenuModal = (props) => {
    return(
        <Modal show={props.menuMenuShow} onHide={()=>props.handleMenuClick('menuMenuShow', false)}>
        <Modal.Header closeButton>
        <Modal.Title>{ props.group.store && props.group.store.name} 메뉴판</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            { props.group.store && props.group.store.menu 
            && props.group.store.menu.map((m)=><div key={m._id}>{m.name}</div>)}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={()=>props.handleMenuClick('menuMenuShow', false)}>
            Close
        </Button>
        <Button variant="primary" onClick={()=>props.handleMenuClick('menuMenuShow', false)}>
            Save Changes
        </Button>
        </Modal.Footer>
    </Modal>
    )
}

export default MenuModal