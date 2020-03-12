import React, {Component} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


import './TopNaviBar.css';

class TopNaviBar extends Component{
  render(){
    return (
      <div className="top-navi-bar">
        <i className="icon-coffee"/>
      </div>
    );
  }
}

export default TopNaviBar;
