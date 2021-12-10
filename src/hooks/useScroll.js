import { useState, useEffect } from "react";

const useScroll = (initState) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollFlag, setScrollFlag] = useState(initState);

  const listener = () => {
    setScrollY(window.pageYOffset + window.innerHeight); //하단 스크롤 위치
    window.scrollY > 20 ? setScrollFlag(true) : setScrollFlag(false); // top버튼
    setTimeout(function () {
      setScrollFlag(false);
    }, 1000)
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return {
    scrollY,
    scrollFlag
  };
}

export default useScroll;