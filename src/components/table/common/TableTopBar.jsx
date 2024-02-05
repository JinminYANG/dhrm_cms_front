import React from 'react';
import {Button, Col, Row} from "react-bootstrap";

const TableTopBar = () => {
  return (
      <Row>
        <Col md={1}>
          <Button className={"btn btn-secondary"}>선택 삭제</Button>
        </Col>
        <Col md={{span:1, offset:9}} className={"text-end"}>
          <Button className={"btn btn-success"}>오픈아카이브</Button>
        </Col>
        <Col md={1} className={"text-end"}>
          <Button className={"btn btn-primary"}>신규 등록</Button>
        </Col>
      </Row>
  );
};

export default TableTopBar;
