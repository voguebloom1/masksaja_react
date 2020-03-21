import React, {Component} from 'react';
import "./CoffeeTemplate.css";
import { Row, Col, Container } from 'react-bootstrap';

class CoffeeTemplate extends Component{

    state = {
        nice : ""
    }

    componentDidMount(){
        this.setState({nice: "1"});
    }

    render(){

        const range = [];
        for(let i=1; i<10; i++){
            range.push(i);
        }
        return(
            <>  
                {/* <div className="date-box">
                    <div>2020-03-16 ~ 2020-03-22</div>
                </div>               */}
                <Container className="coffee-template">   
                    <Row>
                        <Col xs={12} md={12} lg={12} xl={12}>
                            <div className="ct-total-box">
                                <table className="ct-total-box-table">
                                    <thead>
                                        <tr>
                                            <th>이름</th>
                                            <th>월</th>
                                            <th>화</th>
                                            <th>수</th>
                                            <th>목</th>
                                            <th>금</th>
                                            <th>토</th>
                                            <th>일</th>
                                            <th>합계</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {range.map((i) =>
                                            <tr>
                                                <td>홍길동</td>
                                                <td><span className="menu">아벤</span></td>
                                                <td><span className="menu">아벤</span></td>
                                                <td><span className="menu">아벤</span></td>
                                                <td><span className="menu">아벤</span></td>
                                                <td><span className="menu">아벤</span></td>
                                                <td><span className="menu">아벤</span></td>
                                                <td><span className="menu">아벤</span></td>
                                                <td>20,000</td>
                                            </tr>
                                        )} 
                                    </tbody>
                                </table>
                            </div>
                        </Col>
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
            </>
        )   
    }


}

export default CoffeeTemplate;