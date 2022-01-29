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
import ImgCircle from 'components/common/imagebox/ImgCircle'
import PropTypes from "prop-types";

const ReadProfile = ({
  shopId,
  businessRegNumber,
  name,
  city,
  street,
  nationCode1,
  nationCode2,
  contactNumber1,
  contactNumber2,
  snsList,
  zipcode,
  openingHours,
  introduce,
  imageURL,
}) => {

  const link = "/detail";

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
                        <Link to={link} target="_blank" className="default-link">
                          <div className="text-center my-2 basic_color_3">
                            <h5 className="my-2 fix_color_3">안녕하세요. 우리는 {name}입니다.</h5>
                          </div>
                          <article className="my-3 px-3 basic_color_3" style={{ fontSize: '0.9rem', whiteSpace: 'pre-line' }}>
                          {introduce?introduce:"아직 자기소개가 없습니다."}</article>
                          <div className="text-center my-2 basic_color_3">
                            {city && <small>{street}, {city}</small>}{city && <br></br>}
                            {zipcode && <small>우편번호 : {zipcode}</small>}{zipcode && <br></br>}
                            {contactNumber1 && <small>+{nationCode1}&nbsp;&nbsp;{contactNumber1}</small>}{contactNumber1 && <br></br>}
                            {/* {contactNumber2 && <small>+{nationCode2}&nbsp;&nbsp;{contactNumber2}</small>}{contactNumber2 && <br></br>} */}
                            {businessRegNumber && <small>사업자 번호 : {businessRegNumber}</small>}
                          </div>
                        </Link>
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
                    </CardBody>
                </Card>
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
  nationCode1: PropTypes.number,
  nationCode2: PropTypes.number,
  contactNumber1: PropTypes.string,
  contactNumber2: PropTypes.string,
  snsList: PropTypes.array,
  zipcode: PropTypes.string,
  openingHours: PropTypes.string,
  introduce: PropTypes.string,
};

export default ReadProfile;
