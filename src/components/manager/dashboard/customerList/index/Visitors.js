import React, { useState } from 'react';
import { 
  Button,
  Modal,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import {
  BasicUserIcon,
  WhiteUserIcon,
  BlackUserIcon
} from "components/common/icons/Index"

function Visitors() {
  const [toggleWhite, setToggleWhite] = useState(false);
  const [toggleBlack, setToggleBlack] = useState(false);

  const _BasicUserIcon = <BasicUserIcon/>;
  const _WhiteUserIcon = <WhiteUserIcon/>;
  const _BlackUserIcon = <BlackUserIcon/>;

  const [addToggle, setAddToggle] = useState(false);
  // var mode = ""; //W or B
  const toggleModal = _addToggle => {
    // alert(mode);
    setAddToggle(!_addToggle);
  };
  return (
    <>
      <tr>
        {/* <th scope="row">1</th> */}
        <td className="text-center">
          <Button
            className="btn-1"
            color="neutral"
            href="/profile"
          >
            <small>
              손한이
            </small>
          </Button>
        </td>
        <td className="text-center py-3">
          <small>
            2021-07-01
          </small>
        </td>
        <td className="text-center pt-2">
          <Button
            className="btn-icon-only rounded-circle mx-0 my-0 px-0 py-0"
            color="neutral"
            onClick={()=>{
              setToggleWhite(!toggleWhite);
              // mode = "W";
              toggleModal(addToggle);
            }}
          >
            <span className="btn-inner--icon">
            {toggleWhite?_WhiteUserIcon:_BasicUserIcon}
            </span>
          </Button>
        </td>
        <td className="text-center pt-2">
        <Button
            className="btn-icon-only rounded-circle mx-0 my-0 px-0 py-0"
            color="neutral"
            onClick={()=>{
              setToggleBlack(!toggleBlack);
              // mode = "B";
              toggleModal(addToggle);
            }}
          >
            <span className="btn-inner--icon">
              {toggleBlack?_BlackUserIcon:_BasicUserIcon}
            </span>
          </Button>
          <Modal
            className="modal-dialog-centered"
            isOpen={addToggle}
            toggle={() => toggleModal(addToggle)}
          >
            <div className="modal-header">
              <h6 className="modal-title" id="modal-title-default">
                Hani
              </h6>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => toggleModal(addToggle)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <FormGroup
            className="px-2">
              <Label for="exampleText">comment</Label>
              <Input
              type="textarea"
              name="text"
              id="exampleText" />
            </FormGroup>
            <div className="modal-footer">
              <Button
              color="primary"
              type="button"
              onClick={() => toggleModal(addToggle)}>
                Save
              </Button>
              <Button
                className="ml-auto"
                color="link"
                data-dismiss="modal"
                type="button"
                onClick={() => toggleModal(addToggle)}
              >
                Close
              </Button>
            </div>
          </Modal>
        </td>
      </tr>
    </>
  );
}

export default Visitors;