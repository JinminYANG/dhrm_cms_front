import Frame from "../../components/layout/Frame";
import {Button, Col, Form, Row, Table} from "react-bootstrap";
import {useEffect, useState} from "react";

const ManageAuthority = () => {

  // const [authority, setAuthority] = useState("system");

  // 현재 계정에 대한 authority를 가져오는 API가 필요함
  // const getAuthority = () => {
  //   // API 호출
  //   // setAuthority(결과값);
  // }

  const data = [
    {
      menu1: "관리자 관리",
      menu2: "관리자 계정",
      function: {
        "조회": true,
        "등록/수정": true,
        "삭제": false,
      }
    },
    {
      menu1: "관리자 관리",
      menu2: "관리자 권한",
      function: {
        "조회": true,
        "등록/수정": true,
        "삭제": false,
      }
    },
    {
      menu1: "콘텐츠 관리",
      menu2: "콘텐츠",
      function: {
        "조회": true,
        "등록/수정": true,
        "삭제": false,
      },
    },
    {
      menu1: "콘텐츠 관리",
      menu2: "콘텐츠 전시상태",
      function: {
        "조회": true,
        "등록/수정": true,
        "삭제": false,
      }
    }
  ];

  const [authorityInfo, setAuthorityInfo] = useState({
    "authority": "system",
    "info": {
      "관리자 관리": {
        "관리자 계정": {
          "조회": true,
          "등록/수정": true,
          "삭제": false,
        },
        "관리자 권한": {
          "조회": true,
          "등록/수정": true,
          "삭제": false,
        }
      },
      "콘텐츠 관리": {
        "콘텐츠": {
          "조회": true,
          "등록/수정": true,
          "삭제": false,
        },
        "콘텐츠 전시상태": {
          "조회": true,
          "등록/수정": true,
          "삭제": false,
        }
      }
    }
  });

  useEffect(() => {
    console.log(authorityInfo);
  }, [authorityInfo]);


  return (
      <Frame>
        <div className={"content w-100"}>
          <div className={"p-4"}>
            <Row>
              <Col md={12}>
                <h1 className={"h4"}>관리자 권한 관리</h1>
              </Col>
              <Col md={12} className={"mb-3"}>
                <Form>
                  <Row className={"justify-content-between"}>
                    <Col md={1}>
                      <Form.Group className="mb-3" controlId="authority">
                        <Form.Select aria-label="Default select example"
                                     value={authorityInfo.authority}
                                     onChange={(e) => {
                                       setAuthorityInfo({
                                         ...authorityInfo,
                                         authority: e.target.value
                                       });
                                     }}
                        >
                          <option value="system">시스템관리자</option>
                          <option value="content">콘텐츠관리자</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={1} className={"text-end"}>
                      <Button type={"button"} className={`btn tab-btn save-btn w-100`}>수정</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className={"table-responsive text-nowrap"}>
                        <Table hover bordered>
                          <thead className={"table-head text-secondary"}>
                          <tr className={"text-center"}>
                            <th className={"col fw-bold bg-light"}>메뉴 (1dapth)</th>
                            <th className={"col fw-bold bg-light"}>메뉴 (2dapth)</th>
                            <th className={"col fw-bold bg-light"}>기능</th>
                            <th className={"col-1 fw-bold bg-light"}>적용여부</th>
                          </tr>
                          </thead>
                          <tbody className={"table-body text-white text-start"} id="tbodyAuthList">
                          {data && data.map((item, index) => {
                            return (
                                Object.keys(item.function).map((key, index) => {
                                  return (
                                      <tr key={index} className={"text-center"}>
                                        <td className={"p-0 pt-1"}>
                                          {index === 0 ? item.menu1 : ""}
                                        </td>
                                        <td className={"p-0"}>
                                          {item.menu2}
                                        </td>
                                        <td className={"p-4"}>
                                          {key}
                                        </td>
                                        <td className={"p-0"}>
                                          <Form.Check // prettier-ignore
                                              type="switch"
                                              id="custom-switch"
                                              // checked={item.function[key]}
                                              checked={authorityInfo.info[item.menu1][item.menu2][key]}
                                              onChange={(e) => {
                                                let temp = authorityInfo;
                                                temp.info[item.menu1][item.menu2][key] = e.target.checked;
                                                console.log(temp);
                                                // setAuthorityInfo(temp);
                                                setAuthorityInfo({...temp});
                                              }}
                                          />
                                        </td>
                                      </tr>
                                  );
                                })
                            );
                          })}
                          </tbody>
                          {/*<table className={"table text-center"}>
                          <thead className={"table-head text-secondary"}>
                          <tr className={"text-start"}>
                            <th className={"col"}>메뉴 (1dapth)</th>
                            <th className={"col"}>메뉴 (2dapth)</th>
                            <th className={"col"}>기능</th>
                            <th className={"col-2"}>적용여부</th>
                          </tr>
                          </thead>
                          <tbody className={"table-body text-white text-start"} id="tbodyAuthList">
                          <tr className={""}>
                            <td className={"p-0 pt-1"}>
                              관리자 관리
                            </td>
                            <td className={"p-0"}>
                              관리자 계정
                            </td>
                            <td className={"p-0"}>
                              조회
                            </td>
                            <td className={"p-0"}>
                              <Form.Check // prettier-ignore
                                  type="switch"
                                  id="custom-switch"
                              />
                            </td>
                          </tr>
                          </tbody>
                        </table>*/}
                        </Table>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </Frame>
  );
};

export default ManageAuthority;
