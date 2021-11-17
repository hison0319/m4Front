import React, { useState, useEffect } from "react";
import classnames from "classnames";

import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

import VisitorListContainer from "./index/VisitorListContainer"
import WhiteListContainer from "./index/WhiteListContainer"
import BlackListContainer from "./index/BlackListContainer"

const CustomerList = React.memo(() => {
  useEffect(() => {
    // console.log('CustomerList is rendering!')
  })

  const [plainTabs, setPlainTabs] = useState(3);
  const toggleNavs = (e, index) => {
    e.preventDefault();
    setPlainTabs(index);
  };
  return (
    <>
      <Row className="justify-content-center">
        <Col className="mt-5 mt-lg-0" lg="6">
          {/* Menu */}
          <div className="nav-wrapper">
            <Nav
              className="nav-fill flex-column flex-md-row"
              id="tabs-icons-text"
              pills
              role="tablist"
            >
              <NavItem>
                <NavLink
                  aria-selected={plainTabs === 1}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: plainTabs === 1
                  })}
                  onClick={e => toggleNavs(e, 1)}
                  href="#pablo"
                  role="tab"
                >
                  블랙리스트
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={plainTabs === 2}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: plainTabs === 2
                  })}
                  onClick={e => toggleNavs(e, 2)}
                  href="#pablo"
                  role="tab"
                >
                  화이트리스트
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  aria-selected={plainTabs === 3}
                  className={classnames("mb-sm-3 mb-md-0", {
                    active: plainTabs === 3
                  })}
                  onClick={e => toggleNavs(e, 3)}
                  href="#pablo"
                  role="tab"
                >
                  방문자리스트
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <Card className="shadow">
            <CardBody>
              <TabContent activeTab={"plainTabs" + plainTabs}>
                <TabPane tabId="plainTabs1">
                  <BlackListContainer/>
                </TabPane>
                <TabPane tabId="plainTabs2">
                  <WhiteListContainer/>
                </TabPane>
                <TabPane tabId="plainTabs3">
                  <VisitorListContainer/>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
});

export default CustomerList;
