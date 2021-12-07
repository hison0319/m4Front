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
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

import {Button} from "reactstrap";

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
  const scrollingIdx = useRef(0);
  // 리뷰 목록 모드 설정
  const [listMode, setListMode] = useState("B");
  const onSetListMode = (mode) => {
    setListMode(mode);
    scrollingIdx.current = 0;
    getReviewList(0,"",scrollingIdx.current,mode);
  }

  //borad detail 내용 get API
  const {spinner} = useContext(ProgressContext);
  const _id = 1; //temporary
  const [state] = useAsync(() => getReviewList(_id,"",scrollingIdx), [_id], false);
  const { loading, data: reviewList, error } = state;
  
  useEffect(() => {
    if(reviewList) {
      onAddReview(reviewList)
    }
    if(loading) {
      spinner.start();
    } else {
      spinner.stop();
    }
    if(error) {
      // window.location.href = '/error/100';
    }
  },[reviewList, loading, error, spinner]);

  const myReviewTest = {
    reviewId: "R001",
    name: "손한이",
    rating: 4,
    comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
  };

  const reviewListTest = [
    {
      reviewId: "R001",
      name: "손한이",
      rating: 4,
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R002",
      name: "이관호1",
      rating: 3,
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R003",
      name: "이관호2",
      rating: 5,
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R004",
      name: "이관호3",
      rating: 2,
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R005",
      name: "이관호4",
      rating: 2,
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
  ];
  // 내 리뷰정보
  const [myReview, setMyReview] = useState(myReviewTest);

  // Redux CalenderPick2 operation
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
  useEffect(()=>{ // 최초 한번만 리뷰 목록 넣어줌, 차후 제거 요
    onAddReview(reviewListTest);
  },[])
  console.log('_review.reviewList',_review.reviewList,"reviewId");

  const onScrolling = () => {
    scrollingIdx.current += 1;
    getReviewList(0,"",scrollingIdx.current,listMode);
  }

  return (
    <>
      <ReviewList
      myReview={myReview}
      reviewList={_review.reviewList}
      listMode={listMode}
      setMyReview={setMyReview}
      onSetReview={onSetReview}
      onScrolling={onScrolling}
      onSetListMode={onSetListMode}
      />
      <Button
        className="ml-auto"
        color="link"
        type="button"
        onClick={() => {
          onAddReview(reviewListTest);
        }}
      >
        test
      </Button>
    </>
  )
}

export default ReviewListContainer;