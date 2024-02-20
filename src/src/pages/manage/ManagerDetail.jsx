import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";

const ManagerDetail = ({
                         id = undefined,
                         modalOption,
                       }) => {

  const [managerInfo, setManagerInfo] = useState({
    id: id,   // 관리자 번호
    userId: "",  // 사용자 ID
    name: "",  // 관지라명
    department: "",   // 부서
    contact: "",    // 연락처
    authority: "",    // 접속 권한
  });

  const onChangeManagerInfo = (e) => {
    const {name, value} = e.target;
    setManagerInfo((prev) => {
      return {...prev, [name]: value};
    });
  };

  const getManagerInfo = () => {
    // API 호출
    setManagerInfo({});
  };

  useEffect(() => {
    getManagerInfo();
  }, []);


  return (
      <>
        <Form>
          <Row>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="managerId">
                <Form.Label>관리자 번호</Form.Label>
                <Form.Control type="text"
                              name={"id"}
                              value={managerInfo.id || ""}
                              onChange={onChangeManagerInfo}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="managerUserId">
                <Form.Label>사용자 ID</Form.Label>
                <Form.Control type="text"
                              name={"userId"}
                              value={managerInfo.userId || ""}
                              onChange={onChangeManagerInfo}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="managerName">
                <Form.Label>관리자명</Form.Label>
                <Form.Control type="text"
                              name={"name"}
                              value={managerInfo.name || ""}
                              onChange={onChangeManagerInfo}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="contentStatus">
                <Form.Label>부서</Form.Label>
                <Form.Select
                    name={"status"}
                    value={managerInfo.status || ""}
                    onChange={onChangeManagerInfo}
                >
                  <option value={"content"}>콘텐츠관리팀</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="errorContent">
                <Form.Label>연락처</Form.Label>
                <Form.Control type="text"
                              name={"contact"}
                              value={managerInfo.contact || ""}
                              onChange={onChangeManagerInfo}
                />
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="contentStatus">
                <Form.Label>접속권한</Form.Label>
                <Form.Select
                    name={"status"}
                    value={managerInfo.authority || ""}
                    onChange={onChangeManagerInfo}
                >
                  <option value={"content"}>콘텐츠관리자</option>
                  <option value={"system"}>시스템관리자</option>
                </Form.Select>
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

export default ManagerDetail;
