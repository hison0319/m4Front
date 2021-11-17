import React, {useEffect} from 'react';

// core components
import Board from "components/board/Board";

function FeedList() {
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
export default FeedList;