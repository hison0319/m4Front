import React, { useRef } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";
import AlertModal from 'components/common/alert/AlertModal';

const MailCertify = ({
  userId,
}) => {

  const alertRef = useRef();
  let alertComment = "인증 되었습니다.";

  return (
    <section className="middle_wrapper height_tight">
      <AlertModal
      ref={alertRef}
      comment={alertComment}
      closingModal={()=>{

      }}/>
      <Container className="my-5 py-5 px-5">
        <Row className="mb-5 pb-5">
          <Col>
            <h6 className="font-weight-light text-center">
              해당 계정은 메일 인증이 필요합니다.
            </h6>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="my-2">
            <div className="text-center btn-wrapper">
                <Button
                className="sub_button1 width_100 color_2 border_color_2"
                color="none"
                onClick={()=>{
                }}>
                <span className="btn-inner--text">
                  인증 코드 메일 발송
                </span>
                </Button>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="my-2">
            <Row>
                <Col>
                    <small>메일에 받은 코드를 입력해주세요.</small>
                </Col>
            </Row>
            <Row>
                <Col>
                  <Input
                  type="text"
                  name="varName"
                  id="varName"
                  placeholder=""
                  maxLength={10}
                  // value={varName||''}
                  onChange={(e)=>{
                    // onChangeText(e);
                  }}
                  />
                </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="my-2">
            <div className="text-center btn-wrapper">
                <Button
                className="sub_button1 width_100 color_4 border_color_4"
                color="none"
                onClick={()=>{
                  alertRef.current.showAlert();
                }}>
                <span className="btn-inner--text">
                  인증하기
                </span>
                </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default MailCertify;
