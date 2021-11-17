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
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Container,
  NavbarBrand,
  Navbar,
  Button,
  UncontrolledCollapse,
  NavItem,
  NavLink,
  Nav,
} from "reactstrap";

import ProfileIcon from 'components/common/imagebox/ProfileIcon'

class UserNavbar extends React.Component {

  //함수형 전환 시
  // useEffect(()=> {
  //   let headroom = new Headroom(document.getElementById("navbar-main"));
  //   // initialise
  //   headroom.init();
  // });
  // const [collapseClasses, setCollapseClasses] = useState("");
  // const [collapseOpen, setCollapseOpen] = useState(false);

  // const onExiting = () => {
  //   setCollapseClasses("collapsing-out");
  // };

  // const onExited = () => {
  //   setCollapseClasses("");
    
  // };

  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    const styleTest = {
      // backgroundColor: "#DDEFFF"
      backgroundColor: "rgb(199, 221, 228)"
    }
    return (
      <>
        <div className="header-global" style={styleTest}>
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                LOGO
              </NavbarBrand>
              {/* <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <NavLink
                className="nav-link-icon my-1"
                href="/profile"
                // onClick={e => e.preventDefault()}
                >
                <i className="ni ni-notification-70" />
                Profile
                </NavLink>
                <NavLink
                className="nav-link-icon my-1"
                href="/manager"
                // onClick={e => e.preventDefault()}
                >
                <i className="ni ni-notification-70" />
                Store Manager
                </NavLink>
                <NavLink
                className="nav-link-icon"
                href="/sample"
                // onClick={e => e.preventDefault()}
                >
                <i className="ni ni-notification-70" />
                COMPONENTSAMPLE
                </NavLink>
                <NavLink
                className="nav-link-icon"
                href="/signin"
                // onClick={e => e.preventDefault()}
                >
                <i className="ni ni-notification-70" />
                SIGNIN
                </NavLink>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem className="d-none d-lg-block ml-lg-4">
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="/signin"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-cloud-download mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">
                      Sign-in
                    </span>
                  </Button>
                </NavItem>
              </Nav>
              </UncontrolledCollapse> */}
              <NavbarBrand to="/" tag={Link}>
                <ProfileIcon/>
              </NavbarBrand>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
}

export default UserNavbar;
