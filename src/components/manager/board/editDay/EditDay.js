/*
작성자 : 손한이
작성일 : 2021.11.13
내용 :  shop manager의 수정 - Opening Hour 옵션 수정 (뷰)
       일반 Opening Hour는 요일을 기준으로 시간을 저장한다.
       특별한날 (Special Dat Opening Hour)는 날짜를를 기준으로 시간을 저장한다. -> 차후 사용.
       각 Collapse는 내용이 있으면 초기에 열림화면.
*/
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import InputDay from './index/InputDay';
// import SpecialDays from './index/SpecialDays';
import {
  ListDownIcon,
  ListUpIcon,
} from "components/common/icons/Index";
import {
  Row,
  Col,
  Collapse
} from "reactstrap";
import PropTypes from "prop-types";

const EditDay = React.memo(({
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
  const [monOpen, setMonOpen] = useState(Array.isArray(monTimeList) && monTimeList.length !== 0?true:false);
  const toggleMon = () => setMonOpen(!monOpen);
  const [tueOpen, setTueOpen] = useState(Array.isArray(tueTimeList) && tueTimeList.length !== 0?true:false);
  const toggleTue = () => setTueOpen(!tueOpen);
  const [wedOpen, setWedOpen] = useState(Array.isArray(wedTimeList) && wedTimeList.length !== 0?true:false);
  const toggleWed = () => setWedOpen(!wedOpen);
  const [thuOpen, setThuOpen] = useState(Array.isArray(thuTimeList) && thuTimeList.length !== 0?true:false);
  const toggleThu = () => setThuOpen(!thuOpen);
  const [friOpen, setFriOpen] = useState(Array.isArray(friTimeList) && friTimeList.length !== 0?true:false);
  const toggleFri = () => setFriOpen(!friOpen);
  const [satOpen, setSatOpen] = useState(Array.isArray(satTimeList) && satTimeList.length !== 0?true:false);
  const toggleSat = () => setSatOpen(!satOpen);
  const [sunOpen, setSunOpen] = useState(Array.isArray(sunTimeList) && sunTimeList.length !== 0?true:false);
  const toggleSun = () => setSunOpen(!sunOpen);
  // const [speOpen, setSpeOpen] = useState(true);
  // const toggleSpe = () => setSpeOpen(!speOpen);

  const downIcon = <span className="ml-2"><ListDownIcon/></span>;
  const upIcon = <span className="ml-2"><ListUpIcon/></span>;

  // const week = ["MON/","TUE/","WED/","THU/","FRI/","SAT/","SUN/"];

  return (
    <>
      <Row className="">
        <Col className="">
          <Row className="mt-4 py-1 main_background">
            <Col xs="12">
              <Link
              className="text-secondary default-link"
              onClick={(e) => {
                      e.preventDefault();
                      toggleMon();
                  }
              }
              to=""
              >
                <span className='white_color'>&nbsp;&nbsp;우리는 월요일에 문을 열어요.</span>
                {monOpen?upIcon:downIcon}
              </Link>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Collapse isOpen={monOpen}>
                <InputDay
                day={week[0]}
                timeList={monTimeList}
                setTimeList={setMonTimeList}/>
              </Collapse>
            </Col>
          </Row>
          <Row className="py-1 main_background" style={{backgroundColor:"#ddd"}}>
            <Col xs="12">
              <Link
              className="text-secondary default-link"
              onClick={(e) => {
                      e.preventDefault();
                      toggleTue();
                  }
              }
              to=""
              >
                <span className='white_color'>&nbsp;&nbsp;우리는 화요일 문을 열어요.</span>
                {tueOpen?upIcon:downIcon}
              </Link>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Collapse isOpen={tueOpen}>
                <InputDay day={week[1]}
                timeList={tueTimeList}
                setTimeList={setTueTimeList}/>
              </Collapse>
            </Col>
          </Row>
          <Row className="py-1 main_background" style={{backgroundColor:"#ddd"}}>
            <Col xs="12">
              <Link
              className="text-secondary default-link"
              onClick={(e) => {
                      e.preventDefault();
                      toggleWed();
                  }
              }
              to=""
              >
                <span className='white_color'>&nbsp;&nbsp;우리는 수요일에 문을 열어요.</span>
                {wedOpen?upIcon:downIcon}
              </Link>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Collapse isOpen={wedOpen}>
                <InputDay day={week[2]}
                timeList={wedTimeList}
                setTimeList={setWedTimeList}/>
              </Collapse>
            </Col>
          </Row>
          <Row className="py-1 main_background" style={{backgroundColor:"#ddd"}}>
            <Col xs="12">
              <Link
              className="text-secondary default-link"
              onClick={(e) => {
                      e.preventDefault();
                      toggleThu();
                  }
              }
              to=""
              >
                <span className='white_color'>&nbsp;&nbsp;우리는 목요일에 문을 열어요.</span>
                {thuOpen?upIcon:downIcon}
              </Link>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Collapse isOpen={thuOpen}>
                <InputDay day={week[3]}
                timeList={thuTimeList}
                setTimeList={setThuTimeList}/>
              </Collapse>
            </Col>
          </Row>
          <Row className="py-1 main_background" style={{backgroundColor:"#ddd"}}>
            <Col xs="12">
              <Link
              className="text-secondary default-link"
              onClick={(e) => {
                      e.preventDefault();
                      toggleFri();
                  }
              }
              to=""
              >
                <span className='white_color'>&nbsp;&nbsp;우리는 금요일에 문을 열어요.</span>
                {friOpen?upIcon:downIcon}
              </Link>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Collapse isOpen={friOpen}>
                <InputDay day={week[4]}
                timeList={friTimeList}
                setTimeList={setFriTimeList}/>
              </Collapse>
            </Col>
          </Row>
          <Row className="py-1 main_background" style={{backgroundColor:"#ddd"}}>
            <Col xs="12">
              <Link
              className="text-secondary default-link"
              onClick={(e) => {
                      e.preventDefault();
                      toggleSat();
                  }
              }
              to=""
              >
                <span className='white_color'>&nbsp;&nbsp;우리는 토요일에 문을 열어요.</span>
                {satOpen?upIcon:downIcon}
              </Link>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Collapse isOpen={satOpen}>
                <InputDay day={week[5]}
                timeList={satTimeList}
                setTimeList={setSatTimeList}/>
              </Collapse>
            </Col>
          </Row>
          <Row className="py-1 main_background" style={{backgroundColor:"#ddd"}}>
            <Col xs="12">
              <Link
              className="text-secondary default-link"
              onClick={(e) => {
                      e.preventDefault();
                      toggleSun();
                  }
              }
              to=""
              >
                <span className='white_color'>&nbsp;&nbsp;우리는 일요일에 문을 열어요.</span>
                {sunOpen?upIcon:downIcon}
              </Link>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Collapse isOpen={sunOpen}>
                <InputDay day={week[6]}
                timeList={sunTimeList}
                setTimeList={setSunTimeList}/>
              </Collapse>
            </Col>
          </Row>
          {/* <Row className="py-1 main_background" style={{backgroundColor:"#ddd"}}>
            <Col xs="12">
              <Link
              className="text-secondary default-link"
              onClick={(e) => {
                      e.preventDefault();
                      toggleSpe();
                  }
              }
              to=""
              >
                <span className='white_color'>&nbsp;&nbsp;우리는 특별한 영업일이 있어요.</span>
                {speOpen?upIcon:downIcon}
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Collapse isOpen={speOpen}>
                <SpecialDays/>
              </Collapse>
            </Col>
          </Row> */}
        </Col>
      </Row>
    </>
  );
});

EditDay.propTypes = {
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

export default EditDay
