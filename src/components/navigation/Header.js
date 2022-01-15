import React, { useEffect } from 'react';

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