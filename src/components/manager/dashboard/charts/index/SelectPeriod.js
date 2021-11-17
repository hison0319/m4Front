import React, { useEffect } from 'react';
import {
  Row,
  Col,
  FormGroup,
  Input,
} from 'reactstrap';

const SelectPeriod = (props) => {
  useEffect(() => {
    // console.log('SelectPeriod is rendering!')
  })

  const selectP = props.selectP;
  const selectC = props.selectC;
  const sPOnChange = props.sPOnChange;
  const sCOnChange = props.sCOnChange;
  const greenDate1 = props.greenDate1;
  const greenDate2 = props.greenDate2;
  const redDate1 = props.redDate1;
  const redDate2 = props.redDate2;

  return (
    <div>
      <Row>
        <Col>
          <small>
            기간
          </small>
        </Col>
        <Col>
          <small>
            조건
          </small>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Input
            type="select"
            name="select"
            value={selectP}
            onChange={(e)=>{
              sPOnChange(e.target.value);
            }}>
              <option value="PA">주</option>
              <option value="PB">월</option>
              <option value="PC">90 일</option>
            </Input>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Input
            type="select"
            name="select"
            value={selectC}
            onChange={(e)=>{
              sCOnChange(e.target.value);
            }}>
              <option value="CA">전-후</option>
              <option value="CB">시즌별</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col className="text-right">
          <small className="green_color">
            {greenDate1} ~ {greenDate2}
          </small>
        </Col>
      </Row>
      <Row>
        <Col className="text-right">
          <small className="red_color">
            {redDate1} ~ {redDate2}
          </small>
        </Col>
      </Row>
    </div>
  );
};

export default SelectPeriod;