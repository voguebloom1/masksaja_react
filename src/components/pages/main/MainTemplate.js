import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { css } from "@emotion/core";
import SyncLoader from "react-spinners/SyncLoader"

import './MainTemplate.css';

const override = css`
  display: block;
  margin: 50px auto;
  border-color: red;
`;

class MainTemplate extends Component{

  state = {
    groups : [],
    loading: true
  }

  componentDidMount(){
    axios.get("/svc/api/v1/groups")
      .then((res)=> {
        if(res.data){
          this.setState({groups: res.data, loading: false});
        }
      })
  }

  handleClick  = (id) => {
    this.props.history.push('/group');
  } 

  render(){
    const { groups } = this.state;


    return (
      <div className="main-template">
          <SyncLoader
            css={override}
            size={15}
            color={"#74d1d2"}
            loading={this.state.loading}
          />
          {groups.map((group) => 
            <div key={group._id} className="mt-group-box" onClick={()=>this.handleClick(group._id)}>
              <div className="mt-group-box-title">{group.name}</div>
            </div> 
          )}
      </div>
      
    );
  }
}

export default MainTemplate;
