import React from 'react';
import {Col, Form, Row} from "react-bootstrap";

const ContentSearchBox = ({
                            searchParam,
                            setSearchParam
                          }) => {

  return (
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col md={2}>
            <Form.Select
                aria-label="Default select example"
                value={searchParam.searchType}
                onChange={(e) => {
                  setSearchParam((prev) => {
                    return {...prev, searchType: e.target.value};
                  });
                }}
            >
              <option value={""}>검색조건</option>
              <option value={"title"}>제목</option>
              <option value={"type"}>유형</option>
              <option value={"writer"}>작성자</option>
            </Form.Select>
          </Col>
          <Col md={10}>
            <Form.Control
                type="text" placeholder="검색어를 입력하세요."
                value={searchParam.searchKeyword}
                onChange={(e) => {
                  setSearchParam((prev) => {
                    return {...prev, searchKeyword: e.target.value};
                  });
                }}
            />
          </Col>
        </Row>
      </Form>
  );
};

export default ContentSearchBox;