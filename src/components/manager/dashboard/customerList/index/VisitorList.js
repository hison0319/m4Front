import React, { useEffect } from 'react';
import { 
  Table,
} from 'reactstrap';

import PaginationFive from 'components/common/pagination/PaginationFive';
import Visitors from './Visitors';

function VisitorList(props) {
  useEffect(() => {
    // console.log('VisitorList is rendering!')
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
          <th>화이트</th>
          <th>블랙</th>
        </tr>
      </thead>
      <tbody>
        <Visitors/>
        <Visitors/>
        <Visitors/>
        <Visitors/>
        <Visitors/>
      </tbody>
      <tfoot>
        <tr>
          <td
          className="pt-4"
          colSpan="4">
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

export default VisitorList;