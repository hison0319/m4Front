import React, { useEffect } from "react";
import {
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
      <Row className="my-2 mx-1">
        <Col>
          <Row className="my-1">
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
    </>
  );
});

export default Dashboard;
