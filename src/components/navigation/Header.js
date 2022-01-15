import React, { useEffect } from 'react';

function Header() {
  //스크롤 이동에 따른 헤더 불러오기
  let timer;
  let fadeOutToggle;
  
  window.addEventListener("scroll", function() {
    console.log("header scroll");
    if(timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function() {
      let documentY = document.documentElement.scrollTop;
      const header = document.getElementById("custom_header");
      if(header) {
        const headerClassList = header.classList;
        if(documentY - window.__scrollPosition > 0) {
          if(!headerClassList.contains("fade_out_box")) {
            headerClassList.remove("fade_in_box");
            headerClassList.add("fade_out_box");
          }
        } else if(documentY - window.__scrollPosition < 0) {
          if(!headerClassList.contains("fade_in_box")) {
            headerClassList.remove("fade_out_box");
            headerClassList.add("fade_in_box");
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
      const header = document.getElementById("custom_header");
      if(header) {
        const headerClassList = header.classList;
        if(!headerClassList.contains("fade_out_box") && window.__scrollPosition !== 0) {
          headerClassList.remove("fade_in_box");
          headerClassList.add("fade_out_box");
        }
        fadeOutToggle = true;
      }
    }, 3000);
  }

  useEffect(()=>{
    fadeOutHeader();
  },[])

  return (
    <>
      <header id="custom_header" className="header">
        <small>header test</small>
      </header>
    </>
  )
}
export default Header;