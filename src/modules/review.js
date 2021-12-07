//중복된 리뷰 제거
import { delArrDupObject } from "utils/common"

//Action type
const SET_REVIEW = 'review/SET_REVIEW';
const ADD_REVIEW = 'review/ADD_REVIEW';

export const setReview = reviewList => ({
    type:SET_REVIEW,
    reviewList
})

export const addReview = reviewList => ({
    type:ADD_REVIEW,
    reviewList
})

//State initial
const initialState = {
    reviewList : []
}

//Reducer
export default function review (state = initialState, action) {
    switch(action.type) {
        case SET_REVIEW :
            return {
                ...state,
                // 차후 변경 요
                // reviewList: delArrDupObject(action.reviewList)
                reviewList: action.reviewList
            }
        case ADD_REVIEW :
            return {
                ...state,
                // 차후 변경 요
                // reviewList: delArrDupObject(state.reviewList.concat(action.reviewList),"reviewId")
                reviewList: state.reviewList.concat(action.reviewList)
            }
        default :
            return state;
    }
}
