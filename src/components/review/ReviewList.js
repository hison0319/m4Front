import React, { useState } from 'react';

import {
  Row,
  Col,
  FormGroup,
  Input
} from "reactstrap";

import Review from "./index/Review";
import Review2 from "./index/Review2";
import WriteReview from "./index/WriteReview";

import {HeartIcon} from 'components/common/icons/Index';

function ReviewList() {
  const [selectList, setSelectList] = useState("B");
  return (
    <>
      <main className="my-1 py-1">
        <WriteReview/>
        <Row className="my-2">
          <Col xs="6">
            <div className="pl-3">
              <FormGroup>
                <Input
                bsSize="sm"
                type="select"
                name="select"
                id="exampleSelect"
                value={selectList}
                onChange={(e)=>{
                  setSelectList(e.target.value);
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
        <Review/>
        <Review2/>
      </main>
    </>
  )
}
export default ReviewList;