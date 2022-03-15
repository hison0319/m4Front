import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";
import { getIndexEqualKey } from "utils/common"

const DropboxSelect = ({
  defaultOpen,
  defaultValue,
  dropItem,
  onClickDropItem,
}) => {

  const [isOpen, setIsOpen] = useState(defaultOpen?defaultOpen:false);
  const [selectText, setSelectText] = useState(
    defaultValue?dropItem[getIndexEqualKey(dropItem,"value",defaultValue)].text:"please default value");

  return (
    <>
      <>
        <Dropdown
        isOpen={isOpen}
        toggle={()=>{setIsOpen(!isOpen)}}
        style={{marginTop:"-1px", textAlign:"right"}}
        className="input_custom">
          <DropdownToggle
          caret
          color="natural"
          >
            {selectText}
          </DropdownToggle>
          <DropdownMenu container="body">
            {dropItem.map((item) =>
              <DropdownItem
              key={item.value}
              onClick={()=>{
                setSelectText(item.text);
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
