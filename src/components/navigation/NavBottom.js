import React from 'react';
import { Link } from "react-router-dom";

function NavBottom() {
  return (
    <>
      <nav id="custom_bottom_nav" className='navigation_bottom'>
        <div>
          <Link
          className="h5 text-secondary default-link"
          to="/profile">
            <small>btn1</small>
          </Link>
        </div>
        <div>
          <Link
          className="h5 text-secondary default-link"
          to="/manager">
            <small>btn1</small>
          </Link>
        </div>
        <div>
          <Link
          className="h5 text-secondary default-link"
          to="/account">
            <small>btn1</small>
          </Link>
        </div>
        <div>
          btn4
        </div>
      </nav>
    </>
  )
}
export default NavBottom;