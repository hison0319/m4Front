/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

// core components
// import UserNavbar from "components/navbars/UserNavbar.js";
import CardsFooter from "components/common/argon_basic/CardsFooter.js";

// index page sections
import Hero from "components/common/argon_basic/Hero";
import Buttons from "components/common/argon_basic/Buttons.js";
import Inputs from "components/common/argon_basic/Inputs.js";
import CustomControls from "components/common/argon_basic/CustomControls.js";
import Menus from "components/common/argon_basic/Menus.js";
import Navbars from "components/common/argon_basic/Navbars.js";
import Tabs from "components/common/argon_basic/Tabs.js";
import Progress from "components/common/argon_basic/Progress.js";
//import Pagination from "components/common/argon_basic/Pagination.js";
import Pills from "components/common/argon_basic/Pills.js";
import Labels from "components/common/argon_basic/Labels.js";
import Alerts from "components/common/argon_basic/Alerts.js";
import Typography from "components/common/argon_basic/Typography.js";
import Modals from "components/common/argon_basic/Modals.js";
import Datepicker from "components/common/argon_basic/Datepicker.js";
import TooltipPopover from "components/common/argon_basic/TooltipPopover.js";
import Carousel from "components/common/argon_basic/Carousel.js";
import Icons from "components/common/argon_basic/Icons.js";
// import Signin from "components/Signin.js";
import Download from "components/common/argon_basic/Download.js";

class Sample extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        {/* <UserNavbar /> */}
        <main ref="main">
          <Hero />
          <Buttons />
          <Inputs />
          <section className="section">
            <Container>
              <CustomControls />
              <Menus />
            </Container>
          </section>
          <Navbars />
          <section className="section section-components">
            <Container>
              <Tabs />
              <Row className="row-grid justify-content-between align-items-center mt-lg">
                <Progress />
                {/* <Pagination /> */}
              </Row>
              <Row className="row-grid justify-content-between">
                <Pills />
                <Labels />
              </Row>
              <Alerts />
              <Typography />
              <Modals />
              <Datepicker />
              <TooltipPopover />
            </Container>
          </section>
          <Carousel />
          <Icons />
          {/* <Signin /> */}
          <Download />
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Sample;
