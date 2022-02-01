import React, { useEffect, useRef } from 'react';
import {
  Row,
  Col,
  Button
} from "reactstrap"
import ImgCircleSmall from 'components/common/imagebox/ImgCircleSmall';
import ImgSquredSmall from 'components/common/imagebox/ImgSquredSmall';
import Account from 'components/account/Account';
import Aboutus from "components/footers/Aboutus";
import ModalView from "components/common/modalView/ModalView";
import { images } from "utils/images";

function Header() {
  //스크롤 이동에 따른 헤더 불러오기
  let timer;
  let fadeOutToggle;
  let documentY;
  
  window.addEventListener("scroll", function() {
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      documentY = document.documentElement.scrollTop;
      if(document.getElementById("custom_header")) {
        if(documentY - window.__scrollPosition > 0 && document.documentElement.scrollTop > 50) {
          if(!document.getElementById("custom_header").classList.contains("fade_out_box")) {
            document.getElementById("custom_header").classList.remove("fade_in_box");
            document.getElementById("custom_header").classList.add("fade_out_box");
          }
        } else if(documentY - window.__scrollPosition < 0) {
          if(!document.getElementById("custom_header").classList.contains("fade_in_box")) {
            document.getElementById("custom_header").classList.remove("fade_out_box");
            document.getElementById("custom_header").classList.add("fade_in_box");
            if(fadeOutToggle) {
              fadeOutHeader();
              fadeOutToggle = false;
            }
          }
        }
        window.__scrollPosition = documentY;
      }
    }, 50);
  });

  function fadeOutHeader() {
    setTimeout(function() {
      if(document.getElementById("custom_header")) {
        if(!document.getElementById("custom_header").classList.contains("fade_out_box") && document.documentElement.scrollTop > 50) {
          document.getElementById("custom_header").classList.remove("fade_in_box");
          document.getElementById("custom_header").classList.add("fade_out_box");
        }
        fadeOutToggle = true;
      }
    }, 3000);
  }

  useEffect(()=>{
    fadeOutHeader();
    //forDevelop
    console.log("Header.js rendered!");
  },[])

  const AccountModalRef = useRef();
  const AboutusModalRef = useRef();

  const AccountModal = <ModalView
  ref={AccountModalRef}
  item={<Account isModalOpen={true}/>}
  closingModal={()=>{
      //nothing
  }}
  />
  const AboutusModal = <ModalView
  ref={AboutusModalRef}
  item={<Aboutus/>}
  closingModal={()=>{
      //nothing
  }}
  />

  return (
    <>
      <header id="custom_header" className="header">
        <Row>
          <Col xs="6" className="text-left">
            <Button
            className="btn-icon-only rounded-circle"
            color="neutral"
            onClick={()=>{
              AboutusModalRef.current.showAlert();
            }}
            >
              <span className="btn-inner--icon">
                <ImgSquredSmall
                imageURL={images.imgIcon}
                />
              </span>
            </Button>
            <small className="fix_color_2">mmmm</small>
          </Col>
          <Col xs="6" className="text-right">
            <Button
            className="btn-icon-only rounded-circle"
            color="neutral"
            onClick={()=>{
              AccountModalRef.current.showAlert();
            }}
            >
              <span className="btn-inner--icon">
                <ImgCircleSmall
                imageURL={images.imgTestProfile}
                />
              </span>
            </Button>
          </Col>
        </Row>
      </header>
      {AccountModal}
      {AboutusModal}
    </>
  )
}
export default Header;