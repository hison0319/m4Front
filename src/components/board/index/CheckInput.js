import React, { useState, useCallback } from 'react';

import {
  CustomInput,
  InputGroup,
  InputGroupAddon,
  Input,
} from 'reactstrap';

function CheckOption(props) {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    if(true) { //가능한 자연수인지 체크
      // console.log(document.getElementById("SW"+e.target.id));
      document.getElementById("SW"+e.target.id).checked = true;
    }
    setValue(e.target.value);
  },[]);

  const onSwitchChange = (e) => {
    if(!e.target.checked) {
      document.getElementById(e.target.value).value = '';
    }
  }

  const option = props.option;

  return (
    <>
      <div className="my-2">
        <CustomInput
        type="switch"
        id={"SW"+option.key}
        value={option.key}
        name="customSwitch"
        onChange={(e)=>{
          onSwitchChange(e)}
        }
        label={option.name+": ¥ "+option.price}/>
        {option.ea !== 0 &&
          <InputGroup>
            <InputGroupAddon addonType="prepend">EA</InputGroupAddon>
            <Input
            id={option.key}
            value={value}
            onChange={onChange}
            className="text-right" 
            placeholder="개수" 
            min={1} 
            max={option.ea} 
            type="number"/>
          </InputGroup>
        }
      </div>
    </>
  );
}

export default CheckOption;