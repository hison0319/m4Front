import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Options from './index/Options';

import {
  ListDownIcon,
  ListUpIcon,
} from "components/common/icons/Index"

import {
  Row,
  Col,
  Collapse
} from "reactstrap";

const Editor = React.memo(() => {
  const [editOpen, setEditOpen] = useState(true);
  const toggleEdit = () => setEditOpen(!editOpen);

  const downIcon = <span className="ml-2"><ListDownIcon/></span>;
  const upIcon = <span className="ml-2"><ListUpIcon/></span>;

  return (
    <>
      <Row>
        <Col>
          <Row className="mt-3 py-1" style={{backgroundColor:"#ddd"}}>
            <Col xs="12">
              <Link
              className="text-secondary default-link"
              onClick={(e) => {
                      e.preventDefault();
                      toggleEdit();
                  }
              }
              to=""
              >
                &nbsp;&nbsp;우리는 옵션이 있어요.
                {editOpen?upIcon:downIcon}
              </Link>
            </Col>
          </Row>
          <Row className="my-2">
            <Col>
              <Collapse isOpen={editOpen}>
                <Options/>
              </Collapse>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
});

export default Editor
