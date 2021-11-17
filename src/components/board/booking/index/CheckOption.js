import React, { useRef } from 'react';
import CheckInput from './CheckInput';

import {
  FormGroup,
} from 'reactstrap';

function CheckOption(props) {
  const optionType= props.optionType;
  const options = props.options;
  const optionList = [];
  const optionId = useRef(0);

  for(const option of options) {
    optionList.push(
      <CheckInput
      key={optionId.current}
      option={option}/>
    );
    optionId.current += 1;
  }

  return (
    <div className="my-3">
      <h5>{optionType}</h5>
      <FormGroup>
        {optionList}
      </FormGroup>
    </div>
  );
}

export default CheckOption;