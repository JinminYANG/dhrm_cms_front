import React, {useState} from 'react';
import {Button, Col, Row, Table} from "react-bootstrap";
import TableTopBar from "./common/TableTopBar";
import Pagination from "./common/Pagination";
import Modal from "../modal/Modal";

const ContentHistoryTable = ({
                               searchParam,
                             }) => {

  const data = [
    {
      id: 1,
      title: '테스트 제목 1 (공지)',
      type: '공지',
      writer: '홍길동',
      date: '2021-10-01',
      exhibitionDate: '2021-10-01 ~ 2021-10-31'
    },
    {
      id: 2, title: '테스트 제목 2 (Video)', type: '동영상', writer: '흥길동', date: '2021-10-01',
      exhibitionDate: '2021-10-01 ~ 2021-10-31'
    },
    {
      id: 3, title: '테스트 제목 3 (Image)', type: '이미지', writer: '홍갈동', date: '2021-10-01',
      exhibitionDate: '2021-10-01 ~ 2021-10-31'
    },
    {
      id: 4, title: '테스트 제목 4 (VR)', type: 'VR파노라마', writer: '홍길똥', date: '2021-10-01',
      exhibitionDate: '2021-10-01 ~ 2021-10-31'
    },
    {
      id: 5, title: '테스트 제목 5 (공지)', type: '공지', writer: '홍길둥', date: '2021-10-01',
      exhibitionDate: '2021-10-01 ~ 2021-10-31'
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

  const detailContent = (id) => {
    console.log('상세');

    setModalOption({
      ...modalOption,
      show: true,
      title: '상세',
      content: <div>상세 내용</div>,
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
                <th scope="col" className={"fw-bold bg-light"}>제목</th>
                <th scope="col" className={"fw-bold bg-light"}>유형</th>
                <th scope="col" className={"fw-bold bg-light"}>작성자</th>
                <th scope="col" className={"fw-bold bg-light"}>작성일</th>
                <th scope="col" className={"fw-bold bg-light"}>전시일자</th>
              </tr>
              </thead>
              <tbody>
              {tableData.map((item, index) => (
                  <tr key={index} className={"text-center"}>
                    <td className={"p-4"}>{item.id}</td>
                    <td className={"text-start"}
                        onClick={() => detailContent(item.id)}
                    >
                      <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                         href="#">
                        {item.title}
                      </a>
                    </td>
                    <td>{item.type}</td>
                    <td>{item.writer}</td>
                    <td>{item.date}</td>
                    <td>{item.exhibitionDate}</td>
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

export default ContentHistoryTable;
