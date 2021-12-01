/*
작성자 : 손한이
작성일 : 2021.11.28
내용 : shop manager의 Dashboard - 화이트 고객 (뷰)
*/
import React from 'react';
import { 
  Button
} from 'reactstrap';
import { getDotStrMax } from "utils/common"
import PropTypes from "prop-types";

const Whites = ({
  id,
  userId,
  name,
  visitDate,
  comment,
}) => {
  return (
    <>
      <tr>
        <td className="text-center">
          <Button
          className="btn-1"
          color="neutral"
          href={"/profile?userId="+userId}
          >
            <small>
              {getDotStrMax(name,5)}
            </small>
          </Button>
        </td>
        <td className="text-center pt-3">
          <small>
            {visitDate}
          </small>
        </td>
        <td className="text-center pt-3">
          <small>
            {comment}
          </small>
        </td>
      </tr>
    </>
  );
}

Whites.propTypes = {
  id: PropTypes.string,
  userId: PropTypes.string,
  name: PropTypes.string,
  visitDate: PropTypes.string,
  comment: PropTypes.string,
}

export default Whites;