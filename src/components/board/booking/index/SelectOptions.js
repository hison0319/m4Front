import React, { useRef } from 'react';
import SelectOption from './SelectOption';

const SelectOptions = (props) => {
  const optionSingle    = props.optionSingle;
  const selectOptionList = [];
  const selectOptionId = useRef(0);

  for(const type of optionSingle) {
    const optionType = type.type
    const options = type.option
    const key = type.key+selectOptionId
    selectOptionList.push(
        <SelectOption
        key={key}
        optionType={optionType}
        options={options}
        />
    );
    selectOptionId.current += 1;
  }
  
  return (
    <>
      {selectOptionList}
    </>
  );
};

export default SelectOptions;