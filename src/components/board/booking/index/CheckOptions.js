import React, { useRef } from 'react';
import CheckOption from './CheckOption';

const SelectOptions = (props) => {
  const optionMultiple = props.optionMultiple;
  const checkOptionList = [];
  const checkOptionId = useRef(0);

  for(const type of optionMultiple) {
    const optionType = type.type
    const options = type.option
    const key = type.key+checkOptionId
    checkOptionList.push(
        <CheckOption
        key={key}
        optionType={optionType}
        options={options}
        />
    );
    checkOptionId.current += 1;
  }
  
  return (
    <>
      {checkOptionList}
    </>
  );
};

export default SelectOptions;