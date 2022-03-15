/*
작성자 : 손한이
작성일 : 2022.03.09
내용 :  shop 등록(뷰)
*/
import React from 'react';
import {
  Row,
  Col,
  Button,
  Container,
} from "reactstrap";
import DropboxSelect from 'components/common/dropbox/DropboxSelect';
import PropTypes from "prop-types";

const ShopRegister = ({
  shopType,
  setShopType,
  shopTypeList,
  onRefetch,
}) => {

  return (
    <>
      <Container className="my-5">
        <Row className="my-4">
            <Col>
              <Row>
                <Col>
                    <small>귀하의 매장과 비슷한 영업군을 골라주세요.</small>
                </Col>
              </Row>
              <Row className="my-4">
                <Col className="text-align-center">
                  <DropboxSelect
                    defaultValue={shopType}
                    dropItem={shopTypeList}
                    onClickDropItem={(item)=>{setShopType(item)}}
                  />
                </Col>
              </Row>
            </Col>
        </Row>
        <Row className="pt-3 my-3">
            <Col className="mt-4">
                <div className="text-center btn-wrapper">
                    <Button
                    className="sub_button1 width_100 color_4 border_color_4"
                    color="none"
                    onClick={()=>{
                        onRefetch();
                    }}>
                    <span>
                        제출하기
                    </span>
                    </Button>
                </div>
            </Col>
        </Row>
      </Container>
    </>
  );
};

ShopRegister.propTypes = {
  shopType: PropTypes.string,
  setShopType: PropTypes.func,
  shopTypeList: PropTypes.array,
  onRefetch: PropTypes.func,
};

export default ShopRegister;
