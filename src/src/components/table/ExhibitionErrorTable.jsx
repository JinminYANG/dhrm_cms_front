import React, {useState} from 'react';
import Modal from "../modal/Modal";
import {Col, Row, Table} from "react-bootstrap";
import Pagination from "./common/Pagination";
import ErrorDetail from "../../pages/exhibition/sub/ErrorDetail";

const ExhibitionErrorTable = () => {

  const data = [
    {
      id: "1",
      exhibition: '제 1전시관',
      zone: 'A01',
      title: "오류 테스트 (Error Test) 01",
      date: "2021-10-01",
      content: "이미지 없음",
      status: "처리중"
    },
    {
      id: "2",
      exhibition: '제 1전시관',
      zone: 'A01',
      title: "오류 테스트 (Error Test) 02",
      date: "2021-10-01",
      content: "이미지 없음",
      status: "처리중"
    },
    {
      id: "3",
      exhibition: '제 2전시관',
      zone: 'B01',
      title: "오류 테스트 (Error Test) 03",
      date: "2021-10-01",
      content: "경로 오류",
      status: "처리 완료"
    },
    {
      id: "4",
      exhibition: '제 2전시관',
      zone: 'B02',
      title: "오류 테스트 (Error Test) 04",
      date: "2021-10-01",
      content: "경로 오류",
      status: "처리 완료"
    },
    {
      id: "5",
      exhibition: '제 1전시관',
      zone: 'A14',
      title: "오류 테스트 (Error Test) 05",
      date: "2021-10-01",
      content: "이미지 없음",
      status: "처리 완료"
    },
  ];

  const [tableData, setTableData] = useState(data);

  const [modalOption, setModalOption] = useState({
    show: false,
    title: '',
    content: '팝업 테스트',
    confirm: () => {
      console.log('확인');
    },
    cancel: () => {
      console.log('취소');
      setModalOption({...modalOption, show: false});
    },
  });

  const detailError = (id) => {
    console.log('오류 상세 보기');

    setModalOption({
      ...modalOption,
      show: true,
      title: '오류 상세보기',
      content: <ErrorDetail id={id} modalOption={modalOption}/>,
    });
  };


  return (
      <>
        <Modal
            propTitle={modalOption.title}
            propShow={modalOption.show}
            modalOption={modalOption}
            setModalOption={setModalOption}
            confirm={modalOption.confirm}
            cancel={modalOption.cancel}
        >
          {modalOption.content}
        </Modal>
        <Row>
          <Col md={12}>
            <Table hover bordered>
              <thead>
              <tr className={"text-center"}>
                <th scope="col" className={"fw-bold bg-light p-4"}>번호</th>
                <th scope="col" className={"fw-bold bg-light"}>전시관</th>
                <th scope="col" className={"fw-bold bg-light"}>위치번호</th>
                <th scope="col" className={"fw-bold bg-light"}>제목</th>
                <th scope="col" className={"fw-bold bg-light"}>오류일시</th>
                <th scope="col" className={"fw-bold bg-light"}>오류내용</th>
                <th scope="col" className={"fw-bold bg-light"}>상태</th>
              </tr>
              </thead>
              <tbody>
              {tableData.map((item, index) => (
                  <tr key={index} className={"text-center"}>
                    <td className={"p-4"}>{item.id}</td>
                    <td>{item.exhibition}</td>
                    <td>{item.zone}</td>
                    <td className={"text-start"}
                        onClick={() => detailError(item.id)}
                    >
                      <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                         href="#">
                        {item.title}
                      </a>
                    </td>
                    <td>{item.date}</td>
                    <td>{item.content}</td>
                    <td>{item.status}</td>
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

export default ExhibitionErrorTable;
