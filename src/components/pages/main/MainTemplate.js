import React, {Component} from 'react';
import axios from 'axios';
import { css } from "@emotion/core";
import { Route, Switch } from 'react-router-dom';

import GroupTemplate from "../group/GroupTemplate"
import './MainTemplate.css';
import CoffeeTemplate from '../coffee/CoffeeTemplate';

const override = css`
  display: block;
  margin: 50px auto;
  border-color: red;
`;

class MainTemplate extends Component{

  state = {
    groups : [],
    loading: true,
    selectGroupId: ""
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
        <Route exact path="/" component={GroupTemplate}/>
        <Route path="/group/:groupId" component={CoffeeTemplate}
          selectGroupId={this.state.selectGroupId}/>
      </div>
      
    );
  }
}

export default MainTemplate;
