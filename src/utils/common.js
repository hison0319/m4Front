/* 이메일 유효성 검사 */
export const validateEmail = email => {
    const regex = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
    return regex.toString().match(email);
};

/* URL 유효성 검사 */
export const validateURL = url => {
    // const regex = /(http|https):\/\/((\w+)[.])+(asia|biz|cc|cn|com|de|eu|in|info|jobs|jp|kr|mobi|mx|name|net|nz|org|travel|tv|tw|uk|us)(\/(\w*))*$/i;
    // return regex.toString().match(url);
    return true;
};

/* 공백 제거 */
export const removeWhitespace = text => {
    const regex = /\s/g;
    return text.toString().replace(regex, '');
};

/* 특수문자 제거 */
export const removeSpc = text => {
    const regex = /[~!@#$%^&*()_+|<>?:{}]/;
    return text.toString().replace(regex, '');
};

/* 숫자 이외 제거 */
export const removeNotNumber = text => {
    const regex = /[^0-9]/;
    return text.toString().replace(regex, '');
};

/* 번호양식 이외 제거 */
export const removeNotPhone = text => {
    const regex = /[^0-9-\s]/;
    return text.toString().replace(regex, '');
};

/* 돈 타입 만들기(소수점 허용 안함) */
export const makeMoneyType = text => {
    const newText = Number(removeNotNumber(text));
    if(Number.isFinite(newText)) {
        return newText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return "0";
    }
};

/*
null, undefined 이면 true
0, '', [], {} 등은 false
*/
export const chkNullAndUndefined = (val) => {
    try {
        if(typeof(val) === 'undefined' || val === null) {
            return true;
        }
        return false;
    } catch (error) {
        console.log("chkNullAndUndefined exception\n"+error);
        return error;
    }
}

/*
배열 깊은 복사
*/
export const deepCopyArray = (arr) => {
    try {
        if(!Array.isArray(arr)) {
            arr = arr.values();
        }
        const rtnArr = arr.slice();
        return rtnArr;
    } catch (error) {
        console.log("deepCopyArray exception\n"+error);
        return [];
    }
}

/*
객체를 담은 배열과 객체가 가진 키를 받아
해당 키에 대비되는 값을 배열로 만들어 반환
ex) ([{a:1,b:2},{a:3,b,5}], 'a') => {return [1,3]}
*/
export const getValueArray = (objectArr,key) => {
    try {
        if(objectArr) {
            const rtnArr = [];
            if(Array.isArray(objectArr)) {
                for(const object of objectArr) {
                    rtnArr.push(object[key]);
                }
            }
            return rtnArr;
        }
    } catch (error) {
        console.log("getValueArray exception\n"+error);
        return [];
    }
}

/*
배열, 인덱스, 변경 요소, 빈값에 넣을 요소
받은 배열의 해당 인덱스의 요소를 변경함,
배열 길이보다 더 큰 인덱스 전달 시 중간 공백을 빈값 요소로 채움.
*/
export const modifyArray = (arr, idx, element, nullValue) => {
    try {
        if(!Array.isArray(arr)) {
            arr = arr.values();
        }
        const rtnArr = arr.slice();
        if(arr.length < idx) {
            for(let i=0;i<(idx-arr.length);i++) {
                rtnArr.push(nullValue);
            }
        }
        rtnArr.splice(idx,1,element);
        return rtnArr;
    } catch (error) {
        console.log("modifyArray exception\n"+error);
        return [];
    }
}

/*
문자열로 이루어진 배열에서 공백 문자열을 삭제한다.
ex) ["str","","str",""] => ["str","str"]
*/
export const delNullStrArray = (arr) => {
    try {
        if(!Array.isArray(arr)) {
            arr = arr.values();
        }
        const rtnArr = [];
        for(const str of arr) {
            console.log('str',str);
            if(str) {
                console.log('insert!!!',str);
                rtnArr.push(str);
            }
        }
        return rtnArr;
    } catch (error) {
        console.log("delNullStrArray exception\n"+error);
        return [];
    }
}

/*
국가 코드
*/
export const getNationCodeListAll = () => {
    const nationCodeList = [
        {nation:'kor', code:82},
        {nation:'jp', code:69},
        {nation:'chi', code:58},
    ];
    return nationCodeList;
}

/*
영업 시간 단위 코드
*/
export const getOpeningHourCodeListAll = () => {
    const openingHourCodeList = [
        {text:'30분', code:0.5},
        {text:'1시간', code:1},
        {text:'2시간', code:2},
        {text:'3시간', code:3},
        {text:'4시간', code:4},
        {text:'5시간', code:5},
        {text:'6시간', code:6},
        {text:'7시간', code:7},
        {text:'8시간', code:8},
        {text:'하루종일', code:24},
    ];
    return openingHourCodeList;
}