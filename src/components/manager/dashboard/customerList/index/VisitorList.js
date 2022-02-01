/*
작성자 : 손한이
작성일 : 2021.11.28
내용 : shop manager의 Dashboard - 방문 고객 명단 (뷰)
*/
import React from 'react';
import { 
  Table,
} from 'reactstrap';
import PaginationFive from 'components/common/pagination/PaginationFive';
import Visitors from './Visitors';
import PropTypes from "prop-types";

const VisitorList = ({
  curPage,
  totalPage,
  onSetCurPage,
  visitorList,
  onSetVisitorList,
  onModal,
}) => {
  return (
    <Table size="sm" style={{fontSize:"0.8em"}}>
      <thead>
        <tr className="text-center">
          <th>이름</th>
          <th>방문일</th>
          <th>매너등급</th>
        </tr>
      </thead>
      <tbody>
        {visitorList && visitorList.length > 0 &&
        visitorList.map((item)=>
        <Visitors
        key={item.id}
        id={item.id}
        userId={item.userId}
        name={item.name}
        visitDate={item.visitDate}
        type={item.type}
        comment={item.comment}
        onSetVisitorList={onSetVisitorList}
        onModal={onModal}
        />)}
      </tbody>
      <tfoot>
        <tr>
          <td
          className="pt-4 side_tight"
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

VisitorList.propTypes = {
  curPage: PropTypes.number,
  totalPage: PropTypes.number,
  onSetCurPage: PropTypes.func,
  visitorList: PropTypes.array,
  onSetVisitorList: PropTypes.func,
  onModal: PropTypes.func,
}

export default VisitorList;