import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';


import './MainTemplate.css';

class MainTemplate extends Component{

  state = {
    groups : []
  }

  componentDidMount(){
    axios.get("http://localhost:10000/svc/api/v1/groups")
      .then((res)=> {
        console.log(res);
        if(res.data){
          this.setState({groups: res.data});
        }
      })
  }

  handleClick  = (id) => {
    this.props.history.push('/group');
  } 

  render(){
    console.log(this.props)
    const { groups } = this.state;


    return (
      <div className="main-template">
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
