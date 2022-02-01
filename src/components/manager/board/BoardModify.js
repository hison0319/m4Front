/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 수정(뷰)
*/
import React from 'react';
import ImgBoxUpload from 'components/common/imagebox/ImgBoxUpload';
import {
  Row,
  Col,
  Button,
  Input,
  CustomInput,
} from "reactstrap";
import PropTypes from "prop-types";

const BoardModify = ({
  varContext,
  onChangeText,
  handleFileOnChange,
  imageItemList,
}) => {

  return (
    <>
      <Row>
        <Col>
          <div className="text-center btn-wrapper my-2">
            <Button
            className="width_100 sub_button2 color_4 border_color_4"
            outline
            type="button"
            onClick={()=>{}}>
            <span className="btn-inner--text">
              저장하기
            </span>
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col className="my-2 py-2">
          <Row className="px-2">
            <Col className="my-3 pb-2">
              <ImgBoxUpload
              items={imageItemList}
              imageIdx={0}
              setImageIdx={()=>{}}
              />
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Row>
                  <Col>
                      <small>가게 이미지를 올려주세요.</small>
                  </Col>
              </Row>
              <Row className="my-2">
                <Col>
                  <CustomInput
                  type="file"
                  id="image"
                  name="image"
                  multiple
                  label="jpg, jpeg, png, ..."
                  accept='image/jpg,impge/png,image/jpeg,image/gif' 
                  onChange={handleFileOnChange}/>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Row>
                  <Col>
                      <small>가게 소개글을 작성해주세요.</small>
                  </Col>
              </Row>
              <Row>
                  <Col>
                    <Input
                    type="textarea"
                    name="varContext"
                    id="varContext"
                    placeholder=""
                    value={varContext}
                    maxLength={5000}
                    rows="10" 
                    onChange={onChangeText}/>
                  </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

BoardModify.propTypes = {
  varContext: PropTypes.string,
  onChangeText: PropTypes.func,
  handleFileOnChange: PropTypes.func,
  imageItemList: PropTypes.array,
};

export default BoardModify
