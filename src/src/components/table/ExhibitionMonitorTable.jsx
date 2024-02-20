import React, {useState} from 'react';
import Modal from "../modal/Modal";
import {Col, Row, Table} from "react-bootstrap";
import Pagination from "./common/Pagination";

const ExhibitionMonitorTable = () => {

  const data = [
    {id: "A00001", exhibition: '제 1전시관', zone: 'A01', status: '전시중'},
    {id: "A00123", exhibition: '제 1전시관', zone: 'A02', status: '전시중'},
    {id: "B00813", exhibition: '제 2전시관', zone: 'A03', status: '오류'},
    {id: "B00811", exhibition: '제 2전시관', zone: 'B01', status: '전시없음'},
    {id: "A00984", exhibition: '제 1전시관', zone: 'B02', status: '전시중'},
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

  const detailSchedule = (id) => {
    console.log('스케줄표 보기');

    setModalOption({
      ...modalOption,
      show: true,
      title: '스케줄표',
      content: <div>스케줄표 상세 내용</div>,
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
                <th scope="col" className={"fw-bold bg-light p-4"}>관리번호</th>
                <th scope="col" className={"fw-bold bg-light"}>전시관</th>
                <th scope="col" className={"fw-bold bg-light"}>위치번호</th>
                <th scope="col" className={"fw-bold bg-light"}>스케줄표 보기</th>
                <th scope="col" className={"fw-bold bg-light"}>상태</th>
              </tr>
              </thead>
              <tbody>
              {tableData.map((item, index) => (
                  <tr key={index} className={"text-center"}>
                    <td className={"p-4"}>{item.id}</td>
                    <td>{item.exhibition}</td>
                    <td>{item.zone}</td>
                    <td>
                      <button className={"btn btn-secondary btn-sm"}
                              onClick={() => detailSchedule(item.id)}>보기
                      </button>
                    </td>
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

export default ExhibitionMonitorTable;
