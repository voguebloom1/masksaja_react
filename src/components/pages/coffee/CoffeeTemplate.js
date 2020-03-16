import React, {Component} from 'react';
import "./CoffeeTemplate.css";
import { Row, Col, Container } from 'react-bootstrap';

class CoffeeTemplate extends Component{

    state = {
        nice : ""
    }

    componentDidMount(){
        this.setState({nice: "1"});
        console.log("componentDidMount");
    }

    render(){

        const range = [];
        for(let i=1; i<10; i++){
            range.push(i);
        }
        console.log(range);

        return(
            <Container className="coffee-template">
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
        )   
    }


}

export default CoffeeTemplate;