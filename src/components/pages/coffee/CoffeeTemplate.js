import React, {Component} from 'react';
import "./CoffeeTemplate.css";
import { Row, Col } from 'react-bootstrap';

class CoffeeTemplate extends Component{

    state = {
        nice : ""
    }

    componentDidMount(){
        this.setState({nice: "1"});
        console.log("componentDidMount");
    }

    render(){
        return(
        <div className="coffee-template">
            <Row>
                <Col>
                
                </Col>
            </Row>
            <div className="ct-daily-box">
                <div className="ct-daily-box-title">
                    2020-03-15 (수)
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>메뉴</th>
                            <th>금액</th>
                        </tr>
                    </thead>
                    
                </table>
            </div>
        </div>
        )   
    }


}

export default CoffeeTemplate;