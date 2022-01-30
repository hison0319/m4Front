import React from "react";
import {
    ListGroupItem,
} from 'reactstrap';
import PropTypes from "prop-types";

const Alarm = ({
    type,
    userId,
    name,
    context,
    regDate,
    reviewId,
    bookingDate,
    onModal,
}) => {
    const titleComment = type === "B" ? "님이 예약을 했습니다." : "님이 댓글을 남겼습니다."

    return (
        <ListGroupItem
        onClick={(e)=>{
            e.preventDefault();
            onModal(type, type === "B" ? bookingDate : reviewId);
        }}
        tag="a"
        >
        <div className="text-dark font-weight-light">
            {name}{titleComment}
        </div>
        <div className="basic_color_6">
            <small>{context}</small>
        </div>
        <div className="text-secondary text-right">
            <small>알람 시간 : {regDate}</small>
        </div>
        </ListGroupItem>
    )
}

Alarm.propTypes = {
    type: PropTypes.string,
    userId: PropTypes.string,
    name: PropTypes.string,
    context: PropTypes.string,
    regDate: PropTypes.string,
    reviewId: PropTypes.string,
    bookingDate: PropTypes.string,
    onModal: PropTypes.func,
}

export default Alarm;