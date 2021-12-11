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
  onSetListMode
}) => {
  return (
    <Container>
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
            <span>총점 <HeartIcon/> : </span>
            <span>4.5</span>
          </div>
        </Col>
      </Row>
      {reviewList.map((item, idx)=>
        <Review
        key={item.reviewId+idx}
        name={item.name}
        rating={item.rating}
        comment={item.comment}
        />
      )}
    </Container>
  )
}

ReviewList.propTypes = {
  myReview: PropTypes.object,
  reviewList: PropTypes.array,
  listMode: PropTypes.string,
  onSetMyReview: PropTypes.func,
  onSetListMode: PropTypes.func,
}

export default ReviewList;