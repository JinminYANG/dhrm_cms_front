import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const ErrorDetail = ({
                       id = undefined,
                       modalOption,
                     }) => {

  const [errorInfo, setErrorInfo] = useState({
    id: id,   // 전시번호
    title: "",  // 전시명
    errorContent: "",   // 오류내용
    status: "",   // 조치 상태
    statusContent: "",    // 조치 내용
  });

  const onChangeErrorInfo = (e) => {
    const {name, value} = e.target;
    setErrorInfo((prev) => {
      return {...prev, [name]: value};
    });
  };

  const getErrorInfo = () => {
    // API 호출
    setErrorInfo({

    });
  };

  useEffect(() => {
    getErrorInfo();
  }, []);



  return (
      <>
        <Form>
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="errorId">
                <Form.Label>전시번호</Form.Label>
                <Form.Control type="text"
                              name={"id"}
                              value={errorInfo.id || ""}
                              onChange={onChangeErrorInfo}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="errorTitle">
                <Form.Label>전시명</Form.Label>
                <Form.Control type="text"
                              name={"title"}
                              value={errorInfo.title || ""}
                              onChange={onChangeErrorInfo}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="errorContent">
                <Form.Label>오류내용</Form.Label>
                <Form.Control type="text"
                              name={"errorContent"}
                              value={errorInfo.errorContent || ""}
                              onChange={onChangeErrorInfo}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="contentStatus">
                <Form.Label>조치상태</Form.Label>
                <Form.Select
                    name={"status"}
                    value={errorInfo.status || ""}
                    onChange={onChangeErrorInfo}
                >
                  <option value={"on"}>처리중</option>
                  <option value={"off"}>처리완료</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="errorContent">
                <Form.Label>조치내용</Form.Label>
                <Form.Control type="text"
                              name={"errorContent"}
                              value={errorInfo.statusContent || ""}
                              onChange={onChangeErrorInfo}
                />
              </Form.Group>
            </Col>
          </Row>

          <hr/>
          <Row>
            <Col md={12} className={"text-center my-2"}>
              <Button
                  variant="secondary"
                  onClick={() => {
                    modalOption.cancel();
                  }}
              >
                취소
              </Button>
              <Button variant="primary"
                      onClick={() => {
                      }}
                      className={"ms-3"}
              >
                저장
              </Button>
            </Col>
          </Row>
        </Form>
      </>
  );
};

export default ErrorDetail;
