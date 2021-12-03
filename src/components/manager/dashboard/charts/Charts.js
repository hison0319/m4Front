import React, { useEffect } from "react";
import {
  Row,
  Col
} from "reactstrap";
import SelectPeriod from "./index/SelectPeriod";
import LineChart from "./index/LineChart";
import PropTypes from "prop-types";

const Charts = ({
  rsvSelectP,
  rsvSPOnChange,
  rsvDate2,
  rsvDate1,
  rsvTotal,

  nsSelectP,
  nsSPOnChange,
  nsDate2,
  nsDate1,
  nsTotal,

  bookingChart,
  noshowChart,
}) => {
  useEffect(() => {
    // console.log('Charts is rendering!')
  })

  return (
    <>
      <Row>
          <Col>
              <div className="h5 mt-5 mb-2">
              예약 내역
              </div>
              <div className="my-3">
              <LineChart
              chartData={bookingChart}
              />
              </div>
              <div className="my-2">
              <SelectPeriod
              selectP = {rsvSelectP}
              sPOnChange = {rsvSPOnChange}
              date1 = {rsvDate1}
              date2 = {rsvDate2}
              total = {rsvTotal}
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
              <LineChart
              chartData={noshowChart}
              />
              </div>
              <div className="my-1">
              <SelectPeriod
              selectP = {nsSelectP}
              sPOnChange = {nsSPOnChange}
              date1 = {nsDate1}
              date2 = {nsDate2}
              total = {nsTotal}
              />
              </div>
          </Col>
      </Row>
    </>
  );
};

Charts.propTypes = {
  rsvSelectP: PropTypes.string,
  rsvSPOnChange: PropTypes.func,
  rsvDate2: PropTypes.string,
  rsvDate1: PropTypes.string,
  rsvTotal: PropTypes.number,

  nsSelectP: PropTypes.string,
  nsSPOnChange: PropTypes.func,
  nsDate2: PropTypes.string,
  nsDate1: PropTypes.string,
  nsTotal: PropTypes.number,

  bookingChart: PropTypes.object,
  noshowChart: PropTypes.object,
};

export default Charts;
