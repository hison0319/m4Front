import React from 'react';

import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import ReactSummernoteBS4 from '@easylogic/react-summernote/dist/summernote-bs4'
import '@easylogic/react-summernote/dist/summernote-bs4.css'


import {
  Row,
  Col,
} from "reactstrap";

function EditSummer() {

  return (
    <>
      <Row className="">
        <Col className="">
          <Row className="my-2">
            <Col>
              <ReactSummernoteBS4
              id="lite"
              height={600}/>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default EditSummer
