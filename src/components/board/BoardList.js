import React, {useEffect} from 'react';

// core components
import Board from "components/board/Board";

function BoardList() {
  useEffect( ()=> {
    //event
  });
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