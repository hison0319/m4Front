/*
작성자 : 손한이
작성일 : 2021.11.28
내용 :  shop manager의 Dashboard (뷰)
*/
import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

import ChartsContainer from "./charts/ChartsContainer";
import CustomerList from "./customerList/CustomerList";

const Dashboard = React.memo(() => {
  useEffect(() => {
    // console.log('Dashboard is rendering!')
  })

  return (
    <>
      <Container>
        <Row className="my-2">
          <Col>
            <Row className="mx-1 my-1">
              <Col>
                <ChartsContainer/>
              </Col>
            </Row>

            <Row>
              <Col>
                <div className= "my-1">
                  <CustomerList/>
                </div>
              </Col>
            </Row>

          </Col>
        </Row>
      </Container>
    </>
  );
});

export default Dashboard;
