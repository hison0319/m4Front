/*
작성자 : 손한이
작성일 : 2021.10.31
내용 :  일반 계정의 프로필 보기 모드(화면)
*/
import React from 'react';
import {
  Row,
  Col,
  Button,
  Card,
  CardBody
} from "reactstrap";
import ImgCircle from 'components/common/imagebox/ImgCircle'
import {
  //NoshowAngryIcon,
  NoshowGhostIcon,
} from "components/common/icons/Index";
import PropTypes from "prop-types";

const ReadProfile = ({
  userId,
  name,
  zipcode,
  city,
  street,
  nationCode,
  contactNumber,
  snsList,
  birth,
  introduce,
  imageURL,
}) => {

  return (
    <>
      <Row>
        <Col className="mt-5 mb-2">
                <div className="mt-3">
                    <Card>
                        <CardBody>
                          <br></br>
                          <ImgCircle
                          imageURL={imageURL}/>
                          <br></br>
                          <div className="text-center my-2 basic_color_3">
                            <h5 className="my-2 fix_color_3 font-weight-light">안녕하세요. 저는 {name}입니다.</h5>
                          </div>
                          <article className="my-3 px-3 basic_color_3" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                          {introduce?introduce:"아직 자기소개가 없습니다."}</article>
                          <div className="text-center my-2 basic_color_6">
                            {city && <small>{street}, {city}</small>}{city && <br></br>}
                            {zipcode && <small>우편번호 : {zipcode}</small>}{zipcode && <br></br>}
                            {contactNumber && <small>+{nationCode}&nbsp;&nbsp;{contactNumber}</small>}
                          </div>
                          {snsList && snsList.map((sns, idx) => 
                            <Button
                              key={"sns"+idx}
                              className="text-center width_100"
                              color="neutral"
                              href={sns}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <small className="text-secondary">{sns}</small>
                            </Button>
                          )}
                          <Row className="align-items-center">
                            <Col>
                              <Row className="my-2 pb-2">
                                <Col className="text-right">
                                  <div className="pt-1">
                                    <small className="mr-2 basic_color_6">
                                        예약 횟수
                                    </small>
                                    <small className="mr-2 basic_color_6">
                                        98
                                    </small>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col className="text-center">
                                  <NoshowGhostIcon/>&nbsp;
                                  <Button
                                  className="width_90 sub_button2 color_4 border_color_4"
                                  outline
                                  size="sm"
                                  // disabled={true}
                                  >
                                  <span className="btn-inner--icon mr-1">
                                      노쇼
                                  </span>
                                  <span>
                                      2
                                  </span>
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </CardBody>
                    </Card>
                </div>
        </Col>
      </Row>
    </>
  );
}

ReadProfile.propTypes = {
  userId: PropTypes.string,
  name: PropTypes.string,
  zipcode: PropTypes.string,
  city: PropTypes.string,
  street: PropTypes.string,
  nationCode: PropTypes.number,
  contactNumber: PropTypes.string,
  snsList: PropTypes.array,
  birth: PropTypes.string,
  introduce: PropTypes.string,
  imageURL: PropTypes.string,
};

export default ReadProfile;
