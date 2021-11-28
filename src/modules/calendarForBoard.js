import moment from 'moment';

//Action type
const SET_CAL_DATE     = 'calendarForBoard/SET_CAL_DATE';

//Action func
export const setCalDate = date => ({
    type:SET_CAL_DATE,
    date
})

//State initial
const initialState = {
    date         : moment(),
    dateform     : moment().format('YYYY-MM-DD'),
    year         : moment().year(),
    month        : moment().month() + 1,
    day          : moment().date(),
    week         : moment().day(),
    days         : moment().daysInMonth()
}

//Reducer
export default function calendarForBoard (state = initialState, action) {
    switch(action.type) {
        case SET_CAL_DATE :
            return {
                ...state,
                date: action.date,
                dateform: action.date.format('YYYY-MM-DD'),
                year: action.date.year(),
                month: action.date.month() + 1,
                day: action.date.date(),
                week: action.date.day(),
                days: action.date.daysInMonth(),
            }
        default :
            return state;
    }
}
