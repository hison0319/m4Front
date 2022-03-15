import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import AlertModal from 'components/common/alert/AlertModal';
import axios from 'axios';
import useAsync from "utils/useAsync";
import { ProgressContext } from "context/Progress"

async function postMemberConfirm(memberId) {
  const response = await axios.post(
      `${process.env.REACT_APP_API_URL}member/confirmation?memberId=${memberId}`,
  );
  return response.data;
}

const MailCertify = ({
  memberId,
}) => {
  const alertRef = useRef();
  const [comment, setComment] = useState();

  // 메일인증
  const {spinner} = useContext(ProgressContext);
  const [state, refetch] = useAsync(() => postMemberConfirm(1), [], true);
  
  const onRefetch = () => {
      refetch();
  }

  useEffect(()=>{
    const { loading, data: result, error } = state;
    if(result) {
      setComment("메일을 전송했습니다. 확인 해주세요.");
      console.log(result)
      alertRef.current.showAlert();
    } else if(error) {
      setComment("죄송합니다. 메일을 전송하지 못했습니다.\n개발자에게 문의해 주세요.");
      console.log(error.response);
      alertRef.current.showAlert();
    }
    if(loading) {
        spinner.start();
    } else {
        spinner.stop();
    }
  },[state]);

  return (
    <section className="middle_wrapper height_tight">
      <AlertModal
      ref={alertRef}
      comment={comment}
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
          <Col>
            <div className="text-center btn-wrapper">
                <Button
                className="sub_button1 width_100 color_2 border_color_2"
                color="none"
                onClick={()=>{
                  onRefetch();
                }}>
                <span className="btn-inner--text">
                  인증 메일 발송
                </span>
                </Button>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <div className="text-center btn-wrapper">
                <Button
                className="sub_button1 width_100 color_4 border_color_4"
                color="none"
                onClick={()=>{
                  alertRef.current.showAlert();
                }}>
                <span className="btn-inner--text">
                  메일에서 인증을 했습니다.
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
