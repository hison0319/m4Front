/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 수정(뷰)
*/
import React, { useEffect } from 'react';
import ImgBoxUpload from 'components/common/imagebox/ImgBoxUpload';
import {
  Row,
  Col,
  Input,
  InputGroup,
  CustomInput,
} from "reactstrap";
import PropTypes from "prop-types";

const BoardModify = ({
  varContext,
  onChangeText,
  handleFileOnChange,
  imageItemList,
}) => {
  useEffect(() => {
    // console.log('!!!Editor is rendering!')
  })

  return (
    <>
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
            <Col xs="12" >
              <div>
                가게 사진을 올려주세요.(최대15개)
              </div>
            </Col>
          </Row>
          <Row className="my-2">
            <Col xs="12" >
              <InputGroup>
                <CustomInput
                type="file"
                id="image"
                name="image"
                multiple
                label="jpg, jpeg, png, ..."
                accept='image/jpg,impge/png,image/jpeg,image/gif' 
                onChange={handleFileOnChange}/>
              </InputGroup>
            </Col>
          </Row>
          <Row className="my-2">
            <Col xs="12" >
              <InputGroup>
                <Input
                type="textarea"
                name="varContext"
                id="varContext"
                placeholder="가게 소개글을 작성해주세요."
                value={varContext}
                maxLength={5000}
                rows="13" 
                onChange={onChangeText}/>
              </InputGroup>
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
