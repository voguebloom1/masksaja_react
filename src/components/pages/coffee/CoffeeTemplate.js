import React, {Component} from 'react';
import "./CoffeeTemplate.css";
import { Row, Col, Container, Modal, Button,Table } from 'react-bootstrap';
import axios from 'axios';
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader"
import { v4 as uuidv4 } from 'uuid';
import MenuModal from '../modal/MenuModal';
import MemberModal from '../modal/MemberModal';

const override = css`
  display: block;
  margin: 50px auto;
  border-color: red;
`;

class CoffeeTemplate extends Component{

    state = {
        nice : "",
        membersMenuShow : false,
        menuMenuShow : false,
        group : {},
        loading: true
    }

    componentDidMount(){
        this.callGroupInfo();
    }

    callGroupInfo = () => {
        this.setState({loading:true})
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

    // OnClickButton
    handlOnClickButton = (type, _id) => {

        if(type === 'addMemeber'){
            console.log(type);
            this.addMemeber();
        }else if(type === "saveMember"){
            this.saveMember(_id);
        }else if(type === "deleteMember"){
            this.deleteMember(_id);
        }
    }

    saveMember = (id) => {
        const { group } = this.state;
        const member = group.members.find((member) => member._id === id);
        if(member.create){
            const params = {
                name : member.name
            }
            axios.post("/svc/api/v1/groups/" + group._id + "/members/", params)
            .then((res)=> {
                this.setState({group: res.data});
            })
        }
    }

    addMemeber = () => {
        const {group} = this.state;

        const modifyMember = group.members.find(member=>member.modify == true);
        if(modifyMember){
            alert("한개씩 추가 가능합니다.")
        }else{
            if(group.members){
                group.members.push({_id: uuidv4(), name : "", modify : true, create : true}); 
                this.setState(group);
            }else{
                group.members = new Array();
                group.members.push({_id: uuidv4(), name : "", modify : true, create : true}); 
                this.setState(group);
            }
        }

    }

    deleteMember = (id) => {
        const { group } = this.state;
        axios.delete("/svc/api/v1/groups/" + group._id + "/members/" + id)
            .then((res)=>{
                this.setState({group: res.data});
            })
    }

    // OnChange
    handleInputOnChange = (e, type, id) => {

        if(type === 'memberName'){
            const text = e.target.value;
            const {group} = this.state;
            const members = group.members.map(member => {
                if(member._id === id){
                    member.name = text;
                }
                return member;
            })
            group.members = members;
            this.setState({group});
        }
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
                        <div className="ct-slide-menu-box" onClick={()=>this.handleMenuClick('membersMenuShow', true)}>Members</div>
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


                <MemberModal
                    handleMenuClick={this.handleMenuClick}
                    handlOnClickButton={this.handlOnClickButton}
                    handleInputOnChange={this.handleInputOnChange}
                    group={this.state.group}
                    membersMenuShow={this.state.membersMenuShow}

                />
                <MenuModal
                    handleMenuClick={this.handleMenuClick}
                    handlOnClickButton={this.handlOnClickButton}
                    handleInputOnChange={this.handleInputOnChange}
                    group={this.state.group}
                    menuMenuShow={this.state.menuMenuShow}
                />

            </>
        )   
    }


}

export default CoffeeTemplate;