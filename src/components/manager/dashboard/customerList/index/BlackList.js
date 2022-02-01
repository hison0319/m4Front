/*
작성자 : 손한이
작성일 : 2021.12.01
내용 : shop manager의 Dashboard - 블랙 고객 명단 (뷰)
*/
import React from 'react';
import { 
  Table,
} from 'reactstrap';

import PaginationFive from 'components/common/pagination/PaginationFive';
import Blacks from './Blacks';
import PropTypes from "prop-types";

const BlackList = ({
  curPage,
  totalPage,
  onSetCurPage,
  blackList,
  onModal,
}) => {
  return (
    <Table size="sm" style={{fontSize:"0.8em"}}>
      <thead>
        <tr className="text-center">
          <th>이름</th>
          <th>방문일</th>
          <th>정보</th>
        </tr>
      </thead>
      <tbody>
        {blackList && blackList.length > 0 &&
        blackList.map((item)=>
        <Blacks
        key={item.id}
        userId={item.userId}
        name={item.name}
        visitDate={item.visitDate}
        comment={item.comment}
        onModal={onModal}
        />)}
      </tbody>
      <tfoot>
        <tr>
          <td
          className="pt-4"
          colSpan="3">
            <PaginationFive
            curPage = {curPage}
            totalPage = {totalPage}
            onSetCurPage = {onSetCurPage}
            />
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}

BlackList.propTypes = {
  curPage: PropTypes.number,
  totalPage: PropTypes.number,
  onSetCurPage: PropTypes.func,
  blackList: PropTypes.array,
  onModal: PropTypes.func,
}

export default BlackList;