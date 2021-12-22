/*
작성자 : 손한이
작성일 : 2021.10.25
내용 :  비지니스 계정의 프로필 보기 모드(화면)
*/

import React from 'react';
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
} from "reactstrap";
import ProfileImage2 from 'components/common/imagebox/ProfileImage2'
import PropTypes from "prop-types";

const ReadProfile = ({
  shopId,
  businessRegNumber,
  name,
  city,
  street,
  contactNumber1,
  contactNumber2,
  snsList,
  zipcode,
  openingHours,
  introduce,
}) => {

  const link = "/detail";

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
                            <span className="d-block h5 mb-3 border-gray text-center text-secondary">+82&nbsp;&nbsp;{contactNumber1}</span>
                            {/* <span className="d-block h5 mb-3 border-gray text-center text-secondary">+82 {contactNumber2}</span> */}
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
                            <Link to={link} target="_blank" className="default-link">
                              <article className="my-4 text-secondary text-justify" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                              {introduce}</article>
                            </Link>
                            <span className="d-block small my-3 text-dark border-gray text-center">사업자 번호 : {businessRegNumber}</span>
                            <span className="d-block small my-3 text-dark border-gray text-center">open : {openingHours}</span>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Col>
      </Row>
    </>
  );
}

ReadProfile.propTypes = {
  shopId: PropTypes.string,
  businessRegNumber: PropTypes.string,
  name: PropTypes.string,
  city: PropTypes.string,
  street: PropTypes.string,
  contactNumber: PropTypes.string,
  snsList: PropTypes.array,
  zipcode: PropTypes.string,
  openingHours: PropTypes.string,
  introduce: PropTypes.string,
};

export default ReadProfile;
