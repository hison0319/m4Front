import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Headroom from "headroom.js";

import {
  Container,
  NavbarBrand,
  Navbar,
} from "reactstrap";

import { LogoIcon } from "components/common/icons";

import ProfileIcon from 'components/common/imagebox/ProfileIcon'
import ProfileIcon2 from 'components/common/imagebox/ProfileIcon2'

function UserNavbar() {
  useEffect(()=> {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });
  const styleTest = {
    backgroundColor: "rgba(54, 151, 201, 0.8)"
  }

  const sessionInfo = "BUSINESS_USER"
  // const sessionInfo = "NORMAL_USER"

  return (
    <>
      <div className="header-global" style={styleTest}>
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container>
            <NavbarBrand style={{color:'#C94A18'}} className="mr-lg-5" to="/" tag={Link}>
              <LogoIcon/> FOOBAR
            </NavbarBrand>
            <NavbarBrand to="/" tag={Link}>
              {sessionInfo==="BUSINESS_USER"?
              <ProfileIcon2/>:
              <ProfileIcon/>}
            </NavbarBrand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default UserNavbar;
