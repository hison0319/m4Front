import React from 'react';
import { Link } from "react-router-dom";
import {
  StoreIcon,
  ManageIcon,
  QrIcon,
  TimeUncheckedIcon,
} from "components/common/icons/Index"

function NavBottom({selected}) {
  const btn1Color = selected === 1? "fix_color_3" : "basic_color_6";
  const btn2Color = selected === 2? "fix_color_3" : "basic_color_6";
  const btn3Color = selected === 3? "fix_color_3" : "basic_color_6";
  const btn4Color = selected === 4? "fix_color_3" : "basic_color_6";
  return (
    <>
      <nav id="custom_bottom_nav" className='navigation_bottom'>
        <div>
          <Link
          className="default-link"
          to="/profile">
            <div className={btn1Color}>
              <StoreIcon/><br></br>
            </div>
            <small className={btn1Color} style={{fontSize:"0.6em"}}>profile</small>
          </Link>
        </div>
        <div>
          <Link
          className="default-link"
          to="/manager">
            <div className={btn2Color} style={{marginTop:"2px"}}>
              <ManageIcon/><br></br>
            </div>
            <small className={btn2Color} style={{fontSize:"0.6em"}}>manager</small>
          </Link>
        </div>
        <div>
          <Link
          className="default-link"
          to="/qrcode">
            <div className={btn3Color} style={{marginTop:"1px"}}>
              <QrIcon/><br></br>
            </div>
            <small className={btn3Color} style={{fontSize:"0.6em"}}>QRcode</small>
          </Link>
        </div>
        <div>
          <Link
          className="default-link"
          to="/alarm">
            <div className={btn4Color} style={{marginTop:"1px"}}>
              <TimeUncheckedIcon/><br></br>
            </div>
            <small className={btn4Color} style={{fontSize:"0.6em"}}>Alarm</small>
          </Link>
        </div>
      </nav>
    </>
  )
}
export default NavBottom;