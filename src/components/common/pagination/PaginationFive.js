import React, { useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

function PaginationFive(props) {
  useEffect(() => {
    // console.log('PaginationFive is rendering!')
  })
  const curPage = props.curPage;
  const pickPage = props.pickPage;
  const prePage = props.prePage;
  const nextPage = props.nextPage;
  const preShiftPage = props.preShiftPage;
  const nextShiftPage = props.nextShiftPage;

  let pageList = [];
  const first = parseInt((curPage-1)/5)*5+1;
  let pageTemp = first;
  for(let i=0; i<5; i++) {
    if (pageTemp === curPage) {
      pageList.push(<span className="font-weight-bold">{pageTemp}</span>);
    } else {
      pageList.push(<span>{pageTemp}</span>);
    }
    pageTemp = pageTemp + 1;
  }

  const pickPageWraper = (e) => {
    e.preventDefault();
    const _pickPage = Number(e.target.innerText);
    pickPage(_pickPage);
  }
  const prePageWraper = (e) => {
    e.preventDefault();
    prePage();
  }
  const preShiftPageWraper = (e) => {
    e.preventDefault();
    preShiftPage();
  }
  const nextPageWraper = (e) => {
    e.preventDefault();
    nextPage();
  }
  const nextShiftPageWraper = (e) => {
    e.preventDefault();
    nextShiftPage();
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
              onClick={preShiftPageWraper}
              href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              previous
              onClick={prePageWraper}
              href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              onClick={pickPageWraper}
              href="#">
                {pageList[0]}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              onClick={pickPageWraper}
              href="#">
                {pageList[1]}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              onClick={pickPageWraper}
              href="#">
                {pageList[2]}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              onClick={pickPageWraper}
              href="#">
                {pageList[3]}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              onClick={pickPageWraper}
              href="#">
                {pageList[4]}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              next
              onClick={nextPageWraper}
              href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
              last
              onClick={nextShiftPageWraper}
              href="#" />
            </PaginationItem>
          </Pagination>
        </span>
      </div>
    </>
  );
}

export default PaginationFive;