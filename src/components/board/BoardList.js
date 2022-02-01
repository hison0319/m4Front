import React, { useEffect } from 'react';

// core components
import Board from "components/board/Board";

function BoardList() {

  useEffect(()=>{
    //for develop
    console.log("BoardList.js rendered!");
  }, []);

  return (
    <>
      <main>
        <Board/>
        <Board/>
      </main>
    </>
  )
}
export default BoardList;