import moment from 'moment';

// 현재날짜 반환
export function getSysdate() {
    return moment();
}

/* 이메일 유효성 검사 */
export const validateEmail = email => {
    const regex = /^[0-9?A-z0-9?]+(\.)?[0-9?A-z0-9?]+@[0-9?A-z]+\.[A-z]{2}.?[A-z]{0,3}$/;
    return regex.test(email);
};

/* URL 유효성 검사 */
export const validateURL = url => {
    // const regex = /(http|https):\/\/((\w+)[.])+(asia|biz|cc|cn|com|de|eu|in|info|jobs|jp|kr|mobi|mx|name|net|nz|org|travel|tv|tw|uk|us)(\/(\w*))*$/i;
    // return regex.toString().match(url);
    return true;
};

/*
문자열 최소 길이 체크
ex) 
*/
export const chkStrMinLength = (len, text) => {
    try{
        if(typeof(text) === "string") {
            return text.length > len;
        } else {
            text = String(text);
            return text.length > len;
        }
    } catch (error) {
        console.log("chkStrMinLength exception\n"+error);
        return null
    }
}

/* 공백 제거 */
export const removeWhitespace = text => {
    const regex = /\s/g;
    try{
        if(typeof(text) === "string") {
            return text.toString().replace(regex, '');
        } else {
            text = String(text);
            return text.toString().replace(regex, '');
        }
    } catch (error) {
        console.log("removeWhitespace exception\n"+error);
        return null
    }
};

/* 특수문자 제거 */
export const removeSpc = text => {
    const regex = /[~!@#$%^&*()_+|<>?:{}]/;
    try{
        if(typeof(text) === "string") {
            return text.toString().replace(regex, '');
        } else {
            text = String(text);
            return text.toString().replace(regex, '');
        }
    } catch (error) {
        console.log("removeSpc exception\n"+error);
        return null
    }
};

/* 숫자 이외 제거 */
export const removeNotNumber = text => {
    const regex = /[^0-9]/;
    try{
        if(typeof(text) === "string") {
            return text.toString().replace(regex, '');
        } else {
            text = String(text);
            return text.toString().replace(regex, '');
        }
    } catch (error) {
        console.log("removeNotNumber exception\n"+error);
        return null
    }
};

/* 번호양식 이외 제거 */
export const removeNotPhone = text => {
    const regex = /[^0-9-\s]/;
    try{
        if(typeof(text) === "string") {
            return text.toString().replace(regex, '');
        } else {
            text = String(text);
            return text.toString().replace(regex, '');
        }
    } catch (error) {
        console.log("removeNotPhone exception\n"+error);
        return null
    }
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
export const modifyArrayWithIdx = (arr, idx, value, nullValue) => {
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
        rtnArr.splice(idx,1,value);
        return rtnArr;
    } catch (error) {
        console.log("modifyArrayWithIdx exception\n"+error);
        return [];
    }
}

/*
배열, 키, 변경 요소
받은 배열의 해당 인덱스의 해당 키의 요소를 값으로 변경함,
*/
export const modifyArrayWithKey = (arr, idx, key, value) => {
    try {
        if(!Array.isArray(arr)) {
            arr = arr.values();
        }
        const rtnArr = arr.slice();
        rtnArr[idx][key] = value;
        return rtnArr;
    } catch (error) {
        console.log("modifyArrayWithKey exception\n"+error);
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
객체로 구성된 배열에서
해당 객체가 소유한 키값과
동일한 값을 가진 객체의 인덱스를 반환
ex) ([{key:1},{key:2}], "key", 1) => 0
*/
export const getIndexEqualKey = (arr, key, value) => {
    try {
        if(!Array.isArray(arr)) {
            arr = arr.values();
        }
        for(const [idx,obj] of arr.entries()) {
            if(obj[key] === value) return idx
        }
        return -1;
    } catch (error) {
        console.log("getIndexEqualKey exception\n"+error);
        return -1;
    }
}

/*
객체 배열에서
해당 키값으로 중복된 객체를 제거
ex) ([{key:1},{key:2},{key:2}], "key") => [{key:1},{key:2}]
*/
export const delArrDupObject = (arr, key) => {
    try {
        if(!Array.isArray(arr)) {
            arr = arr.values();
        }
        const rtnArr = [];
        let tempObj  = {};
        for(var i in arr) {
            tempObj[arr[i][key]] = arr[i];
        }
        for(i in tempObj) {
            rtnArr.push(tempObj[i]);
        }
         return rtnArr;
    } catch (error) {
        console.log("delArrDupObject exception\n"+error);
        return [];
    }
}

/*
국가 코드
*/
export const getNationCodeListAll = () => {
    const nationCodeList = [
        {text:'kor', value:"82"},
        {text:'jp', value:"00"},
        {text:'chi', value:"00"},
    ];
    return nationCodeList;
}

/*
영업 시간 단위 코드
*/
export const getOpeningHourCodeListAll = () => {
    const openingHourCodeList = [
        {text:'30분', code:"30"},
        {text:'1시간', code:"60"},
        {text:'2시간', code:"120"},
        {text:'3시간', code:"180"},
        {text:'4시간', code:"240"},
        {text:'5시간', code:"300"},
        {text:'6시간', code:"360"},
        {text:'7시간', code:"420"},
        {text:'8시간', code:"480"},
    ];
    return openingHourCodeList;
}

/*
문자열 특정 길이가 넘어가면 ...으로 표현
*/
export const getDotStrMax = (str, maxlength) => {
    try {
        let rtn = "";
        if(typeof(str) === 'string') {
            rtn = str;
        } else {
            rtn = String(str)
        }
        if(rtn.length > maxlength) {
            rtn = rtn.substring(0,maxlength);
            rtn = rtn + "...";
        }
        return rtn;
    } catch (error) {
        console.log("getDotStrMax exception\n"+error);
        return "";
    }
};

/*
query string object 가져오기
*/
export const getQueryStringObject = (search) => {
    var a = search.substr(1).split('&');
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

/*
cookie 저장
setCookie(변수이름, 변수값, 기간{1 => 하루})
*/
export const setCookie = (name, value, exp) => {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

/*
cookie 가져오기
getCookie(변수이름)
*/
export const getCookie = (name) => {
    const cookies = document.cookie.split(';');
    const value = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return value ? value[2] : null;
};

/*
cookie 삭제
deleteCookie(변수이름)
*/
export const deleteCookie = (name) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=localhost; path=/;';
}