import moment from 'moment';

//Action type
const SET_CALPICK2_DATE = 'calendarPick2ForManager/SET_CALPICK2_DATE';
const ADD_CALPICK2_DATE = 'calendarPick2ForManager/ADD_CALPICK2_DATE';
const SUB_CALPICK2_DATE = 'calendarPick2ForManager/SUB_CALPICK2_DATE';

//Action func
export const setCalpick2Date = date => ({
    type:SET_CALPICK2_DATE,
    date
})

export const addCalpick2Date = () => ({
    type:ADD_CALPICK2_DATE,
})

export const subCalpick2Date = () => ({
    type:SUB_CALPICK2_DATE,
})

//State initial
const initialState = {
    date : moment()
}

//Reducer
export default function calendarPick2ForManager (state = initialState, action) {
    switch(action.type) {
        case SET_CALPICK2_DATE :
            return {
                ...state,
                date: action.date
            }
        case ADD_CALPICK2_DATE :
            return {
                ...state,
                date: state.date.add(1,'days')
            }
        case SUB_CALPICK2_DATE :
            return {
                ...state,
                date: state.date.subtract(1,'days')
            }
        default :
            return state;
    }
}
