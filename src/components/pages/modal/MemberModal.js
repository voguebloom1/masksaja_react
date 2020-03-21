import React from 'react'
import { Modal, Button,Table } from 'react-bootstrap';
import { MdControlPoint } from "react-icons/md";

export const MemberModal = (props) => {
    return(
        <Modal show={props.membersMenuShow} onHide={()=>props.handleMenuClick('membersMenuShow', false)}>
            <Modal.Header closeButton>
            <Modal.Title>{props.group.name} 모임사람들</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <colgroup>
                        <col width="10%"></col>
                        <col width="50%"></col>
                        <col width="20%"></col>
                        <col width="20%"></col>
                    </colgroup>
                    <thead>
                        <tr>
                            <th> No. </th>
                            <th> Name </th>
                            <th>#</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.group.members && 
                        props.group.members.map( (member, i) =>  
                            <tr key={member._id}>
                                <td>{i}</td>
                                {
                                    member.modify ? 
                                    <td><input onChange={(e) => props.handleInputOnChange(e, "memberName", member._id )} value={member.name}></input></td>
                                    : <td>{member.name}</td>
                                }
                                {
                                    member.modify ? 
                                    <td><Button onClick={()=>props.handlOnClickButton("saveMember", member._id)}>저장</Button></td>
                                    :<td><Button>수정</Button></td>
                                }
                                <td><Button onClick={()=>props.handlOnClickButton("deleteMember", member._id)}>삭제</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <div className="md-control-point">
                    <MdControlPoint onClick={()=>props.handlOnClickButton("addMemeber")}/>
                </div>
                
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=>props.handleMenuClick('membersMenuShow', false)}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default MemberModal