import React from 'react';
import { Link } from "react-router-dom";

function NavBottom({selected}) {
  const btn1Color = selected === 1? "color_3" : "basic_color_6";
  const btn2Color = selected === 2? "color_3" : "basic_color_6";
  const btn3Color = selected === 3? "color_3" : "basic_color_6";
  const btn4Color = selected === 4? "color_3" : "basic_color_6";
  return (
    <>
      <nav id="custom_bottom_nav" className='navigation_bottom'>
        <div>
          <Link
          className="default-link"
          to="/profile">
            <small className={btn1Color}>profile</small>
          </Link>
        </div>
        <div>
          <Link
          className="default-link"
          to="/manager">
            <small className={btn2Color}>manager</small>
          </Link>
        </div>
        <div>
          <Link
          className="default-link"
          to="/account">
            <small className={btn3Color}>QRcode</small>
          </Link>
        </div>
        <div>
          <Link
          className="default-link"
          to="/alarm">
            <small className={btn4Color}>Alarm</small>
          </Link>
        </div>
      </nav>
    </>
  )
}
export default NavBottom;