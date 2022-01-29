/*
작성자 : 손한이
작성일 : 2021.12.05
내용 :  Review 목록 (뷰)
*/
import React from 'react';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import Review from "./index/Review";
import WriteReview from "./index/WriteReview";
import {HeartIcon} from 'components/common/icons/Index';
import PropTypes from "prop-types";

const ReviewList = ({
  myReview,
  reviewList,
  listMode,
  onSetMyReview,
  onSetListMode,
  onGetReview,
  onModal,
}) => {
  return (
    <>
      <WriteReview
      myReview={myReview}
      onSetMyReview={onSetMyReview}
      />
      <Row className="my-2">
        <Col xs="6">
          <div className="pl-3">
            <FormGroup>
              <Input
              bsSize="sm"
              type="select"
              name="select"
              id="exampleSelect"
              value={listMode}
              onChange={(e)=>{
                onSetListMode(e.target.value);
              }}
              >
                <option value="A">최근순</option>
                <option value="B">높은점수</option>
                <option value="C">낮은점수</option>
              </Input>
            </FormGroup>
          </div>
        </Col>
        <Col xs="6">
          <div
          style={{lineHeight:"1.8em"}}
          className="text-secondary text-right pr-4"
          >
            <small>총점 <HeartIcon/> : </small>
            <small>4.5</small>
          </div>
        </Col>
      </Row>
      {reviewList.map((item, idx)=>
        <Review
        key={item.reviewId+idx}
        userId={item.userId}
        name={item.name}
        rating={item.rating}
        comment={item.comment}
        onModal={onModal}
        />
      )}
      <Row>
        <Col className="text-center py-3">
          <div className="text-center btn-wrapper mb-2">
            <Button
            className="width_100"
            outline
            type="button"
            color="neutral"
            onClick={onGetReview}>
            <small className="btn-inner--text">
            리뷰 더 불러오기
            </small>
            </Button>
          </div>
        </Col>
      </Row>
    </>
  )
}

ReviewList.propTypes = {
  myReview: PropTypes.object,
  reviewList: PropTypes.array,
  listMode: PropTypes.string,
  onSetMyReview: PropTypes.func,
  onSetListMode: PropTypes.func,
  onGetReview: PropTypes.func,
  onModal: PropTypes.func,
}

export default ReviewList;