import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

const DropboxSelect = ({
  defaultOpen,
  defaultValue,
  dropItem,
  onClickDropItem,
}) => {

  const [isOpen, setIsOpen] = useState(defaultOpen?defaultOpen:false);
  const [selectValue, setSelectValue] = useState(defaultValue?defaultValue:"please default value");

  return (
    <>
      <>
        <Dropdown
        isOpen={isOpen}
        toggle={()=>{setIsOpen(!isOpen)}}
        style={{marginTop:"-1px"}}
        className="input_custom01">
          <DropdownToggle
          caret
          color="natural"
          >
            {selectValue}
          </DropdownToggle>
          <DropdownMenu container="body">
            {dropItem.map((item) =>
              <DropdownItem
              key={item.value}
              onClick={()=>{
                setSelectValue(item.text);
                onClickDropItem(item.value);
              }}>
                {item.text}
              </DropdownItem>
            )}
          </DropdownMenu>
        </Dropdown>
      </>
    </>
  );
}

DropboxSelect.propTypes = {
  defaultOpen: PropTypes.bool,
  defaultValue: PropTypes.string,
  dropItem: PropTypes.array,
  onClickDropItem: PropTypes.func,
};

export default DropboxSelect;
