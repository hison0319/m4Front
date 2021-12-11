/*
작성자 : 손한이
작성일 : 2021.12.05
내용 :  Review 목록 (기능)
       API - get
*/
import React, { useState, useEffect, useRef, useContext } from 'react';
import ReviewList from './ReviewList';
import { useSelector, useDispatch } from "react-redux";
import { 
  setReview,
  addReview,
} from 'modules/review';
import { modifyArrayWithIdx } from "utils/common"
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress";
import { Button } from "reactstrap";
import { GoUpIcon } from "components/common/icons/Index";

async function getReviewList(id,target,idx,mode) {
  const response = await axios.get(
    `/api/v1/reviewList/${id}`
  );
  return response.data;
}

const ReviewListContainer = ({
  userId,
  target
}) => {
  // 리뷰 목록 번호
  const getReviewIdx = useRef(0);
  // 리뷰 목록 모드 설정
  const [listMode, setListMode] = useState("B");
  const onSetListMode = (mode) => {
    setListMode(mode);
    getReviewIdx.current = 0;
    getReviewList(0,"",getReviewIdx.current,mode);
  }

  // 리뷰 목록 get API
  const {spinner} = useContext(ProgressContext);
  const _id = 1; //temporary
  const [state] = useAsync(() => getReviewList(_id,"",getReviewIdx), [_id], false);
  const { loading, data: reviewList, error } = state;
  
  let getReviewToggle = true;
  useEffect(() => {
    if(reviewList) {
      // onAddReview(reviewList)
    }
    if(loading) {
      spinner.start();
    } else {
      getReviewToggle = true;
      spinner.stop();
    }
    if(error) {
      // window.location.href = '/error/100';
    }
  },[reviewList, loading, error, spinner]);

  const myReviewTest = {
    reviewId: "R001",
    name: "손한이",
    rating: "4",
    comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
  };

  const reviewListTest = [
    {
      reviewId: "R001",
      name: "손한이",
      rating: "4",
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R002",
      name: "이관호1",
      rating: "3",
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R003",
      name: "이관호2",
      rating: "5",
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R004",
      name: "이관호3",
      rating: "2",
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R005",
      name: "이관호4",
      rating: "2",
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
  ];
  // 리뷰 목록 생성
  const _review = useSelector(state => ({
    reviewList : state.review.reviewList
  }));
  const dispatch = useDispatch();
  const onSetReview = (reviewList) => {
    dispatch(setReview(reviewList));
  }
  const onAddReview = (reviewList) => {
    dispatch(addReview(reviewList));
  }
  useEffect(()=>{ 
    onSetReview(reviewListTest); // 최초 한번 리뷰 목록 넣어줌
    document.getElementById("topBtn").style.display = "none";
    //top버튼 사라지기
    setInterval(function () {
      document.getElementById("topBtn").style.display = "none"
    }, 5000)
  },[])
  
  
  //스크롤 최하단 내릴 시 리뷰 불러오기, top버튼 보이게하기
  window.addEventListener("scroll", function() {
    if(window.pageYOffset + window.innerHeight > document.documentElement.scrollHeight-30) {
      if (getReviewToggle) {
        getReviewToggle = false;
        getReviewIdx.current += 1;
        getReviewList(0,"",getReviewIdx.current,listMode);
        onAddReview(reviewListTest);
      }
    }
    if(window.scrollY > 300) {
      document.getElementById("topBtn").style.display = ""
    }
  });
  //top버튼 누를 시 최상단 이동
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  // 내 리뷰정보
  const [myReview, setMyReview] = useState(myReviewTest);
  // 내 리뷰 변경시 리뷰목록도 변경
  const onSetMyReview = (review) => {
    setMyReview(review);
    const newReviewList = modifyArrayWithIdx(_review.reviewList, 0, review);
    onSetReview(newReviewList);
  }

  console.log('reviewList : ',_review.reviewList);

  return (
    <>
      <Button
      id="topBtn"
      className="topBtn"
      color="neutral"
      onClick={goTop}>
        <GoUpIcon/>
      </Button>
      <ReviewList
      myReview={myReview}
      reviewList={_review.reviewList}
      listMode={listMode}
      onSetMyReview={onSetMyReview}
      onSetListMode={onSetListMode}
      />
    </>
  )
}

export default ReviewListContainer;