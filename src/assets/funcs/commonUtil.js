import moment from 'moment';

const sysdate = moment();

// 현재날짜 반환
export function getSysdate() {
    return sysdate;
}