/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 수정(뷰)
*/
import React, { useEffect } from 'react';
import EditDay from "./editDay/EditDay";
import EditOption from "./editOption/EditOption";
// import EditSummer from './editSummer/EditSummer';
import {
  Button,
  Row,
  Col,
  Input,
  InputGroup,
  CustomInput,
} from "reactstrap";
import {
  SubmitIcon
} from "components/common/icons/Index"
import PropTypes from "prop-types";

const BoardModify = ({
  varContext,
  onChangeText,
  handleFileOnChange,
  imagePreview,

  week,
  monTimeList,
  setMonTimeList,
  tueTimeList,
  setTueTimeList,
  wedTimeList,
  setWedTimeList,
  thuTimeList,
  setThuTimeList,
  friTimeList,
  setFriTimeList,
  satTimeList,
  setSatTimeList,
  sunTimeList,
  setSunTimeList,
}) => {
  useEffect(() => {
    // console.log('!!!Editor is rendering!')
  })

  // 시간단위가 필요한가..?
  // const [selectTime, setSelectTime] = useState("05M");
  // const timeArr = [];
  // const time = ["30분","1시간","2시간","3시간","4시간","5시간","6시간","7시간","8시간"];
  // const key = ["30","60","120","180","240","300","360","420","480"];
  // for(let i=0; i<time.length; i++) {
  //   timeArr.push({key:key[i], value:key[i], time:time[i]});
  // }
  return (
    <>
      <Row className="my-2 py-2">
        <Col className="my-2 py-2">
          {/* <Row>
            <Col xs="12">
              <InputGroup>
                <InputGroupAddon addonType="prepend">시간단위</InputGroupAddon>
                <Input
                type="select"
                name="selectTime"
                value={selectTime}
                onChange={(e)=>{
                  setSelectTime(e.target.value);
                }}>
                    {timeArr.map((item) => 
                        <option key={item.key} value={item.value}>{item.time}</option>
                    )}
                </Input>
              </InputGroup>
            </Col>
          </Row> */}
          <EditDay
          week={week}
          monTimeList={monTimeList}
          setMonTimeList={setMonTimeList}
          tueTimeList={tueTimeList}
          setTueTimeList={setTueTimeList}
          wedTimeList={wedTimeList}
          setWedTimeList={setWedTimeList}
          thuTimeList={thuTimeList}
          setThuTimeList={setThuTimeList}
          friTimeList={friTimeList}
          setFriTimeList={setFriTimeList}
          satTimeList={satTimeList}
          setSatTimeList={setSatTimeList}
          sunTimeList={sunTimeList}
          setSunTimeList={setSunTimeList}
          />
          <hr></hr>
          <EditOption/>
          <hr></hr>
          {/* <EditSummer/> */}
          <Row className="px-2">
            <Col className="my-3 pb-2">
              {imagePreview}
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
                rows="20" 
                onChange={onChangeText}/>
              </InputGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="text-center btn-wrapper mt-2">
          <Button
          style={{width:"90%"}}
          color="success"
          outline
          type="button"
          onClick={()=>{
            // setMode("R");
          }}>
          <span className="btn-inner--text">
            <SubmitIcon/>&nbsp;&nbsp;제출하기
          </span>
          </Button>
      </div>
    </>
  );
};

BoardModify.propTypes = {
  varContext: PropTypes.string,
  onChangeText: PropTypes.func,
  handleFileOnChange: PropTypes.func,
  imagePreview: PropTypes.object,

  week: PropTypes.array,
  monTimeList: PropTypes.array,
  setMonTimeList: PropTypes.func,
  tueTimeList: PropTypes.array,
  setTueTimeList: PropTypes.func,
  wedTimeList: PropTypes.array,
  setWedTimeList: PropTypes.func,
  thuTimeList: PropTypes.array,
  setThuTimeList: PropTypes.func,
  friTimeList: PropTypes.array,
  setFriTimeList: PropTypes.func,
  satTimeList: PropTypes.array,
  setSatTimeList: PropTypes.func,
  sunTimeList: PropTypes.array,
  setSunTimeList: PropTypes.func,
};

export default BoardModify
