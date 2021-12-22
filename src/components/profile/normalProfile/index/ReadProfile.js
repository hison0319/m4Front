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
import ProfileImage2 from 'components/common/imagebox/ProfileImage2'
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
}) => {

  return (
    <>
      <Row noGutters className="pt-2 pt-md-2 w-100 px-2 px-xl-0 position-relative">
        <Col className="py-2 mb-2 py-md-0 mb-md-5">
            <div className="position-relative">
                <span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
                    PROFILE
                </span>
                <span className="d-block pb-4 h2 mb-3 text-dark border-bottom border-gray">{name}</span>
                <div className="mt-3">
                    <Card className="shadow">
                        <CardBody>
                            <br></br><br></br>
                            <ProfileImage2/>
                            <span className="d-block pt-5 h4 text-dark border-gray text-center">{street}, {city}</span>
                            <span className="d-block h7 mb-3 text-dark border-gray text-center">우편번호 : {zipcode}</span>
                            <span className="d-block h5 mb-3 border-gray text-center text-secondary">+{nationCode}&nbsp;&nbsp;{contactNumber}</span>
                            {snsList && snsList.map((sns, idx) => 
                              <Button
                                key={"sns"+idx}
                                className="my-1 text-center width_100"
                                color="neutral"
                                href={sns}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <small className="text-secondary">{sns}</small>
                              </Button>
                            )}
                            <article className="mt-4 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                            {introduce}</article>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Col>
      </Row>
      <Row noGutters className="align-items-center">
        <Col>
          <Row className="my-2">
            <Col xs="6" className="text-center">
              <div className="pt-1">
                <span className="mr-2">
                    예약
                </span>
                <span className="text-success">
                    98
                </span>
              </div>
            </Col>
            <Col xs="6" className="text-left btn-wrapper">
              <NoshowGhostIcon/>&nbsp;
              <Button
              className="width_70"
              outline
              size="sm"
              color="danger"
              // disabled={true}
              >
              <span className="btn-inner--icon mr-1">
                  {/* <InstagramIcon/> */}
                  도타캰
              </span>
              <span>
                  2
              </span>
              </Button>
            </Col>
          </Row>
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
};

export default ReadProfile;
