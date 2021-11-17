import React, { useEffect } from 'react';
import { 
  Table,
} from 'reactstrap';

import PaginationFive from 'components/common/pagination/PaginationFive';
import Blacks from './Blacks';

function BlackList(props) {
  useEffect(() => {
    // console.log('BlackList is rendering!')
  })

  const curPage = props.curPage;
  const pickPage = props.pickPage;
  const prePage = props.prePage;
  const nextPage = props.nextPage;
  const preShiftPage = props.preShiftPage;
  const nextShiftPage = props.nextShiftPage;

  return (
    <Table size="sm" style={{fontSize:"0.8em"}}>
      <thead>
        <tr className="text-center">
          {/* <th>#</th> */}
          <th>이름</th>
          <th>방문일</th>
          <th>정보</th>
        </tr>
      </thead>
      <tbody>
        <Blacks/>
        <Blacks/>
        <Blacks/>
        <Blacks/>
        <Blacks/>
        <Blacks/>
        <Blacks/>
        <Blacks/>
        <Blacks/>
        <Blacks/>
      </tbody>
      <tfoot>
        <tr>
          <td
          className="pt-4"
          colSpan="3">
            <PaginationFive
            curPage = {curPage}
            pickPage = {pickPage}
            prePage = {prePage}
            nextPage = {nextPage}
            preShiftPage = {preShiftPage}
            nextShiftPage = {nextShiftPage}
            />
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}

export default BlackList;