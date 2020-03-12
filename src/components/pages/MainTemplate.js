import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

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


  render(){

    const { groups } = this.state;

    return (
      <div className="account-template">
          {groups.map((group) => 
            <div key={group._id} className="at-group-box">
              <div>{group.name}</div>
            </div> 
          )}
      </div>
    );
  }
}

export default MainTemplate;
