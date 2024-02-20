import React, {useState} from 'react';
import Modal from "../modal/Modal";
import {Col, Row, Table} from "react-bootstrap";
import TableTopBar from "./common/TableTopBar";
import Pagination from "./common/Pagination";
import ManagerDetail from "../../pages/manage/ManagerDetail";

const ManageListTable = ({
                                searchParam,
                              }) => {

  const data = [
    {
      id: 1,
      userId: 'test1',
      contact: "010-1234-5678",
      department: "콘텐츠관리팀",
      name: "홍길동",
      authority: "system",
    },
    {
      id: 2,
      userId: 'test2',
      contact: "010-1234-5678",
      department: "콘텐츠관리팀",
      name: "홍길동",
      authority: "content",
    },
    {
      id: 3,
      userId: 'test3',
      contact: "010-1234-5678",
      department: "콘텐츠관리팀",
      name: "홍길동",
      authority: "content",
    },
    {
      id: 4,
      userId: 'test4',
      contact: "010-1234-5678",
      department: "콘텐츠관리팀",
      name: "홍길동",
      authority: "content",
    },
    {
      id: 5,
      userId: 'test5',
      contact: "010-1234-5678",
      department: "콘텐츠관리팀",
      name: "홍길동",
      authority: "system",
    }
  ];

  const [tableData, setTableData] = useState(data);

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
    } else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  };

  const handleSingleDelete = (id) => {
    console.log('삭제');

    // 테이블 안에 있는 삭제 버튼 클릭 시 해당 아이템 삭제
    setTableData(tableData.filter((el) => el.id !== id));
  };

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
      title: '관리자 상세보기',
      content: <ManagerDetail id={id} modalOption={modalOption}/>,
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
          <Col md={12} className={"mb-3"}>
            <TableTopBar
                checkItems={checkItems}
                tableData={tableData}
                setTableData={setTableData}
                modalOption={modalOption}
                setModalOption={setModalOption}
                location={"manage"}
            />
          </Col>
          <Col md={12}>
            <Table hover bordered>
              <thead>
              <tr className={"text-center"}>
                <th scope="col" className={"fw-bold bg-light"}>
                  <input type='checkbox' name='select-all'
                         onChange={(e) => handleAllCheck(e.target.checked)}
                      // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                         checked={checkItems.length === data.length}/>
                </th>
                <th scope="col" className={"fw-bold bg-light p-4"}>번호</th>
                <th scope="col" className={"fw-bold bg-light"}>사용자 ID</th>
                <th scope="col" className={"fw-bold bg-light"}>연락처</th>
                <th scope="col" className={"fw-bold bg-light"}>부서명</th>
                <th scope="col" className={"fw-bold bg-light"}>사용자이름</th>
                <th scope="col" className={"fw-bold bg-light"}>접속권한</th>
              </tr>
              </thead>
              <tbody>
              {tableData.map((item, index) => (
                  <tr key={index} className={"text-center"}>
                    <td className={"align-middle"}>
                      <input type='checkbox' name='select-item'
                             onChange={(e) => handleSingleCheck(e.target.checked, item.id)}
                             checked={checkItems.includes(item.id)}/>
                    </td>
                    <td className={"align-middle"}>{item.id}</td>
                    <td className={"align-middle p-4"}>{item.userId}</td>
                    <td className={"align-middle"}>{item.contact}</td>
                    <td className={"align-middle"}>{item.department}</td>
                    <td className={"align-middle"}
                        onClick={() => detailContent(item.id)}
                    >
                      <a className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                         href="#">
                        {item.name}
                      </a>
                    </td>
                    <td className={"align-middle"}>{item.authority}</td>
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

export default ManageListTable;
