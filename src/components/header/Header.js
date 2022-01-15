import React, {useEffect} from 'react';
import UserNavbar from "components/navbars/UserNavbar";

function Header() {
  useEffect( ()=> {
    document.documentElement.scrollTop = 100;
    document.scrollingElement.scrollTop = 100;
  });
  return (
    <>
      <header>
        <UserNavbar/>
      </header>
      <div className="mb-5"></div>
    </>
  )
}
export default Header;