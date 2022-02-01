/*
작성자 : 손한이
작성일 : 2021.11.30
내용 : common - page nation - 5 page 조회 (기능, 뷰)
*/
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationFive = ({
  curPage,
  totalPage,
  onSetCurPage,
}) => {
  const pageList = [];
  const firstPage = parseInt((curPage-1)/5)*5+1;
  const endPage = firstPage+4 > totalPage ? totalPage : firstPage+4;

  for(let i=firstPage; i<=endPage; i++) {
    pageList.push({num:i});
  }

  // page nation 기능
  const pickPage = (pickPage) => {
    onSetCurPage(pickPage);
  }
  const prePage = (e) => {
    e.preventDefault();
    const _chgPage = curPage===1?curPage:curPage - 1
    onSetCurPage(_chgPage);
  }
  const nextPage = (e) => {
    e.preventDefault();
    const _chgPage = curPage===totalPage?curPage:curPage + 1
    onSetCurPage(_chgPage);
  }
  const preShiftPage = (e) => {
    e.preventDefault();
    const _chgPage = curPage-5<1?1:curPage - 5
    onSetCurPage(_chgPage);
  }
  const nextShiftPage = (e) => {
    e.preventDefault();
    const _chgPage = curPage+5>totalPage?totalPage:curPage + 5
    onSetCurPage(_chgPage);
  }

  return (
    <>
      <div
      style={{
        textAlign:"center"
      }}>
        <span
        style={{
          display:"inline-block"
        }}
        >
          <Pagination
          aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink
              first
              onClick={preShiftPage}
              href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              previous
              onClick={prePage}
              href="#" />
            </PaginationItem>
            {pageList.map((item)=>
            <PaginationItem key={"p"+item.num}>
              <PaginationLink
              onClick={(e)=>{
                e.preventDefault();
                pickPage(item.num);
              }}
              href="#">
                <span
                className={item.num === curPage ? "font-weight-bold" : ""}>
                {item.num}</span>
              </PaginationLink>
            </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
              next
              onClick={nextPage}
              href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              last
              onClick={nextShiftPage}
              href="#" />
            </PaginationItem>
          </Pagination>
        </span>
      </div>
    </>
  );
}

export default PaginationFive;