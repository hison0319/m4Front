/*
작성자 : 손한이
작성일 : 2021.12.10
내용 :  Review 작성하기 (기능, 뷰)
*/
import React, { useState } from "react";
import {
  Button,
  Modal,
  Row,
  Col,
  FormGroup,
  InputGroup,
  Label,
  Input
} from "reactstrap";
import {
  HeartIcon,
} from "components/common/icons/Index";
import PropTypes from "prop-types";

const WriteReview = ({
  myReview,
  onSetMyReview,
}) => {
  const [writeToggle, setWriteToggle] = useState(false);
  const toggleModal = _writeToggle => {
    setWriteToggle(!_writeToggle);
  };
  const [rating, setRating] = useState(myReview.rating);
  const [comment, setComment] = useState(myReview.comment);

  const onSaveMyReview = () => {
    onSetMyReview(
      {
        reviewId: "",
        name: myReview.name,
        rating: rating,
        comment: comment
      },
    )
  }

  return (
    <>
      <Row>
        <Col>
          <div className="text-center btn-wrapper mb-2">
              <Button
              className="width_100 sub_button2 color_3 border_color_3"
              outline
              type="button"
              onClick={() => toggleModal(writeToggle)}>
              <span className="btn-inner--text">
                리뷰 작성하기
              </span>
              </Button>
          </div>
          <Modal
            className="modal-dialog-centered"
            isOpen={writeToggle}
            toggle={() => toggleModal(writeToggle)}
          >
            <div className="modal-header">
              {/* <h6 className="modal-title" id="modal-title-default">
                {myReview.name}
              </h6> */}
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => toggleModal(writeToggle)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <FormGroup
            className="px-2 mt-3">
              <InputGroup>
                <Label className="width_70">
                  <small>&nbsp;&nbsp;&nbsp;아래에 리뷰를 작성해주세요!</small>
                </Label>
                <div className="width_10 text-right pr-2">
                  <HeartIcon/>
                </div>
                <div className="width_20 pr-3">
                  <Input
                  bsSize="sm"
                  type="select"
                  name="select"
                  id="exampleSelect"
                  value={rating}
                  onChange={(e)=>{
                    console.dir(e.target.value)
                    setRating(e.target.value);
                  }}>
                      <option value="5">5.0</option>
                      <option value="4">4.0</option>
                      <option value="3">3.0</option>
                      <option value="2">2.0</option>
                      <option value="1">1.0</option>
                  </Input>
                </div>
              </InputGroup>
              <Input
              className="mt-2"
              type="textarea"
              name="comment"
              id="comment"
              value={comment}
              rows="5"
              onChange={(e) =>{setComment(e.target.value)}} />
            </FormGroup>
            <div className="modal-footer">
              <div className="text-center btn-wrapper my-2">
                  <Button
                  className="width_100 sub_button3 color_3 border_color_1"
                  outline
                  type="button"
                  onClick={() => {
                    toggleModal(writeToggle);
                    onSaveMyReview();
                  }}>
                  <small className="btn-inner--text">
                    저장하기
                  </small>
                  </Button>
              </div>
            </div>
          </Modal>
        </Col>
      </Row>
    </>
  );
};

WriteReview.propTypes = {
  myReview: PropTypes.object,
  onSetMyReview: PropTypes.func,
}

export default WriteReview;
