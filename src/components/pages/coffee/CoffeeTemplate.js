import React, {Component} from 'react';
import "./CoffeeTemplate.css";
import { Row, Col, Container, Modal, Button } from 'react-bootstrap';
import axios from 'axios';
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader"

const override = css`
  display: block;
  margin: 50px auto;
  border-color: red;
`;

class CoffeeTemplate extends Component{

    state = {
        nice : "",
        memebersMenuShow : false,
        menuMenuShow : false,
        group : {},
        loading: true
    }

    componentDidMount(){
        const {groupId} = this.props.match.params;
        axios.get("/svc/api/v1/groups/" + groupId)
        .then((res)=> {
          console.log(res);  
          if(res.data){
            this.setState({group: res.data, loading: false});
          }
        })
    }

    handleMenuClick = (menuName, show) => {
        this.setState({[menuName]: show})
    }

    render(){
        
        console.log(this.props)
        const range = [];
        for(let i=1; i<6; i++){
            range.push(i);
        }
        return(
            <>  <SyncLoader
                    css={override}
                    size={15}
                    color={"#74d1d2"}
                    loading={this.state.loading}
                />  
                { this.state.loading == false &&
                <Container className="coffee-template">   
                    <div className="ct-date-box">
                        <div className="ct-date-box-left">-</div>
                        <div className="ct-date-box-text">2020-03-16 ~ 2020-03-22</div>
                        <div className="ct-date-box-right">-</div>
                    </div>
                    <div className="ct-slide-menu">
                        <div className="ct-slide-menu-box" onClick={()=>this.handleMenuClick('memebersMenuShow', true)}>Members</div>
                        <div className="ct-slide-menu-box"  onClick={()=>this.handleMenuClick('menuMenuShow', true)}>Menu</div>
                        <div className="ct-slide-menu-box">Total</div>
                        <div className="ct-slide-menu-box">Settings</div>
                    </div>    
                    <Row>
                        { range.map((i) => 
                            <Col xs={12} md={6} lg={4} xl={3} key={i}>
                            <div className="ct-daily-box">
                                <div className="ct-daily-box-title">
                                    2020-03-15 (수)
                                </div>
                                <table className="ct-daily-box-table">
                                    <thead>
                                        <tr>
                                            <th>이름</th>
                                            <th>메뉴</th>
                                            <th>금액</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>홍길동</td>
                                            <td>카페라떼</td>
                                            <td>3,500</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Col>
                        )}                   
                    </Row>
                </Container>
                }

                <Modal show={this.state.memebersMenuShow} onHide={()=>this.handleMenuClick('memebersMenuShow', false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>Members</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        { this.state.group.members && this.state.group.members.map((member)=><div key={member._id}>{member.name}</div>)}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>this.handleMenuClick('memebersMenuShow', false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>this.handleMenuClick('memebersMenuShow', false)}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.state.menuMenuShow} onHide={()=>this.handleMenuClick('menuMenuShow', false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>Members</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        { this.state.group.store && this.state.group.store.menu 
                        && this.state.group.store.menu.map((m)=><div key={m._id}>{m.name}</div>)}
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={()=>this.handleMenuClick('menuMenuShow', false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>this.handleMenuClick('menuMenuShow', false)}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>

            </>
        )   
    }


}

export default CoffeeTemplate;