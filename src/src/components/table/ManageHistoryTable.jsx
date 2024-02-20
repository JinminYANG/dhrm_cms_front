import React, {useState} from 'react';
import {Col, Row, Table} from "react-bootstrap";
import Pagination from "./common/Pagination";

const ManageHistoryTable = ({
                              ser
                            }) => {

  const data = [
    {
      id: 1,
      userId: "admin1234",
      name: "홍길동",
      menu: "콘텐츠 관리",
      action: "콘텐츠 등록",
      date: "2021-10-01"
    },
    {
      id: 2,
      userId: "admin1234",
      name: "홍길동",
      menu: "콘텐츠 관리",
      action: "콘텐츠 수정",
      date: "2021-10-01"
    },
    {
      id: 3,
      userId: "admin1234",
      name: "홍길동",
      menu: "콘텐츠 관리",
      action: "콘텐츠 삭제",
      date: "2021-10-01"
    },
    {
      id: 4,
      userId: "admin1234",
      name: "홍길동",
      menu: "콘텐츠 관리",
      action: "콘텐츠 등록",
      date: "2021-10-01"
    },
    {
      id: 5,
      userId: "admin1234",
      name: "홍길동",
      menu: "콘텐츠 관리",
      action: "콘텐츠 수정",
      date: "2021-10-01"
    }
  ];

  const [tableData, setTableData] = useState(data);


  return (
      <>
        <Row>
          <Col md={12}>
            <Table hover bordered responsive>
              <thead>
              <tr className={"text-center"}>
                <th scope="col" className={"fw-bold bg-light p-4"}>번호</th>
                <th scope="col" className={"fw-bold bg-light"}>사용자 ID</th>
                <th scope="col" className={"fw-bold bg-light"}>관리자명</th>
                <th scope="col" className={"fw-bold bg-light"}>메뉴</th>
                <th scope="col" className={"fw-bold bg-light"}>관리내역</th>
                <th scope="col" className={"fw-bold bg-light"}>관리일시</th>
              </tr>
              </thead>
              <tbody>
              {tableData.map((item, index) => (
                  <tr key={index} className={"text-center"}>
                    <td className={"p-4"}>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.name}</td>
                    <td>{item.menu}</td>
                    <td>{item.action}</td>
                    <td>{item.date}</td>
                  </tr>
              ))}
              </tbody>
            </Table>
          </Col>
          <Col md={12}>
            <Pagination/>
          </Col>
        </Row>
      </>
  );
};

export default ManageHistoryTable;
