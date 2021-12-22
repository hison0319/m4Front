/*
작성자 : 손한이
작성일 : 2021.12.05
내용 :  Review 목록 (기능)
       API - get
*/
import React, { useState, useEffect, useRef, useContext } from 'react';
import ReviewList from './ReviewList';
import ModalNormalProfileView from "components/common/modalView/ModalNormalProfileView"
import ModalBusinessProfileView from "components/common/modalView/ModalBusinessProfileView"
import { useSelector, useDispatch } from "react-redux";
import { 
  setReview,
  addReview,
} from 'modules/review';
import { modifyArrayWithIdx } from "utils/common"
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress";

async function getReviewList(id,reviewId,idx,orderType) {
  const response = await axios.get(
    `/api/v1/reviewList/${id}`
  );
  return response.data;
}

const ReviewListContainer = ({
  userId,
  reviewId,
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
  const [state] = useAsync(() => getReviewList(_id,"",getReviewIdx,""), [_id], false);
  const { loading, data: reviewList, error } = state;
  
  useEffect(() => {
    if(reviewList) {
      // onAddReview(reviewList)
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

  // 프로필 클릭 시 모달 뷰 오픈
  const modalNormalProfileViewRef = useRef();
  const modalBusinessProfileViewRef = useRef();
  const modalNormalProfileView = 
  <ModalNormalProfileView
      ref={modalNormalProfileViewRef}
      closingModal={()=>{
      //nothing
      }}
  />;
  const modalBusinessProfileView = 
  <ModalBusinessProfileView
      ref={modalBusinessProfileViewRef}
      closingModal={()=>{
      //nothing
      }}
  />;
  const onModal = (userId) => {
    //type 또는 userId code에 따라 shop인지, user인지 구분하여 출력
    if(userId) {
        modalNormalProfileViewRef.current.onSetUserId(userId);
        modalNormalProfileViewRef.current.showAlert();
    } else {
        modalBusinessProfileViewRef.current.onSetUserId(userId);
        modalBusinessProfileViewRef.current.showAlert();
    }
  }

  const myReviewTest = {
    reviewId: "R001",
    userId: "a001",
    name: "손한이",
    rating: "4",
    comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
  };

  const reviewListTest = [
    {
      reviewId: "R001",
      userId: "a001",
      name: "손한이",
      rating: "4",
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R002",
      userId: "a001",
      name: "이관호1",
      rating: "3",
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R003",
      userId: "a001",
      name: "이관호2",
      rating: "5",
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R004",
      userId: "a001",
      name: "이관호3",
      rating: "2",
      comment: "리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다. 리뷰 내용입니다."
    },
    {
      reviewId: "R005",
      userId: "a001",
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
  },[])
  
  const [myReview, setMyReview] = useState(myReviewTest);
  // 내 리뷰 변경시 리뷰목록도 변경
  const onSetMyReview = (review) => {
    setMyReview(review);
    const newReviewList = modifyArrayWithIdx(_review.reviewList, 0, review);
    onSetReview(newReviewList);
  }

  const onGetReview = () => {
    getReviewIdx.current += 1;
    getReviewList(0,"",getReviewIdx.current,listMode);
    onAddReview(reviewListTest);
  }

  console.log('reviewList : ',_review.reviewList);

  return (
    <>
      <ReviewList
      myReview={myReview}
      reviewList={_review.reviewList}
      listMode={listMode}
      onSetMyReview={onSetMyReview}
      onSetListMode={onSetListMode}
      onGetReview={onGetReview}
      onModal={onModal}
      />
      {modalNormalProfileView}
      {modalBusinessProfileView}
    </>
  )
}

export default ReviewListContainer;