import React, { useEffect } from "react";
import {
  Row,
  Col
} from "reactstrap";

import SelectPeriod from "./index/SelectPeriod";
import LineChart from "./index/LineChart";

const Charts = React.memo((props) => {
  useEffect(() => {
    // console.log('Charts is rendering!')
  })

  const rsvSelectP = props.rsvSelectP;
  const rsvSelectC = props.rsvSelectC;
  const rsvSPOnChange = props.rsvSPOnChange;
  const rsvSCOnChange = props.rsvSCOnChange;
  const nsSelectP = props.nsSelectP;
  const nsSelectC = props.nsSelectC;
  const nsSPOnChange = props.nsSPOnChange;
  const nsSCOnChange = props.nsSCOnChange;

  const rsvGreenDate2 = props.rsvGreenDate2;
  const rsvGreenDate1 = props.rsvGreenDate1;
  const rsvRedDate2 = props.rsvRedDate2;
  const rsvRedDate1 = props.rsvRedDate1;
  const nsGreenDate2 = props.nsGreenDate2;
  const nsGreenDate1 = props.nsGreenDate1;
  const nsRedDate2 = props.nsRedDate2;
  const nsRedDate1 = props.nsRedDate1;

  return (
    <>
      <Row>
          <Col>
              <div className="h5 mt-5 mb-2">
              예약 내역
              </div>
              <div className="my-3">
              <LineChart/>
              </div>
              <div className="my-2">
              <SelectPeriod
              selectP = {rsvSelectP}
              selectC = {rsvSelectC}
              sPOnChange = {rsvSPOnChange}
              sCOnChange = {rsvSCOnChange}
              greenDate1 = {rsvGreenDate1}
              greenDate2 = {rsvGreenDate2}
              redDate1 = {rsvRedDate1}
              redDate2 = {rsvRedDate2}
              />
              </div>
          </Col>
      </Row>

      <Row>
          <Col>
              <div className="h5 mt-5 mb-2">
              도타캰 내역
              </div>
              <div className="my-3">
              <LineChart/>
              </div>
              <div className="my-1">
              <SelectPeriod
              selectP = {nsSelectP}
              selectC = {nsSelectC}
              sPOnChange = {nsSPOnChange}
              sCOnChange = {nsSCOnChange}
              greenDate1 = {nsGreenDate1}
              greenDate2 = {nsGreenDate2}
              redDate1 = {nsRedDate1}
              redDate2 = {nsRedDate2}
              />
              </div>
          </Col>
      </Row>
    </>
  );
});

export default Charts;
