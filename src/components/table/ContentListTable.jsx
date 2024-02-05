import React, {useEffect, useState} from 'react';
import {Button, Col, Row, Table} from "react-bootstrap";
import TableTopBar from "./common/TableTopBar";
import Pagination from "./common/Pagination";
import {isInitialConsonantMatch} from "../../hooks/MatchInitialConsonant";

const ContentListTable = ({
                            searchParam,
                          }) => {

  const data = [
    {id: 1, title: '테스트 제목 1 (공지)', type: '공지', writer: '홍길동', date: '2021-10-01'},
    {id: 2, title: '테스트 제목 2 (Video)', type: '동영상', writer: '흥길동', date: '2021-10-01'},
    {id: 3, title: '테스트 제목 3 (Image)', type: '이미지', writer: '홍갈동', date: '2021-10-01'},
    {id: 4, title: '테스트 제목 4 (VR)', type: 'VR파노라마', writer: '홍길똥', date: '2021-10-01'},
    {id: 5, title: '테스트 제목 5 (공지)', type: '공지', writer: '홍길둥', date: '2021-10-01'},
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
  }

  useEffect(() => {
    console.log(checkItems);
  }, [checkItems]);

  useEffect(() => {
    console.log(searchParam);

    // data를 searchKeyword로 필터링하여 새로운 배열을 만들어서 반환
    const filteredData = data.filter((el) => {
      // return el.title.includes(searchParam.searchKeyword) || isInitialConsonantMatch(searchParam.searchKeyword, el.title);
      if (searchParam.searchType === '') {
        // return el.title.includes(searchParam.searchKeyword) || isInitialConsonantMatch(el.title, searchParam.searchKeyword);
        return el.title.includes(searchParam.searchKeyword) || isInitialConsonantMatch(searchParam.searchKeyword, el.title);
      } else if (searchParam.searchType === 'type') {
        return el.type.includes(searchParam.searchKeyword) || isInitialConsonantMatch(searchParam.searchKeyword, el.type);
      } else if (searchParam.searchType === 'writer') {
        return el.writer.includes(searchParam.searchKeyword) || isInitialConsonantMatch(searchParam.searchKeyword, el.writer);
      } else if (searchParam.searchType === 'title') {
        return el.title.includes(searchParam.searchKeyword) || isInitialConsonantMatch(searchParam.searchKeyword, el.title);
      }
    });

    setTableData(filteredData);
  }, [searchParam]);

  const handleSingleDelete = (id) => {
    console.log('삭제');

    // 테이블 안에 있는 삭제 버튼 클릭 시 해당 아이템 삭제
    setTableData(tableData.filter((el) => el.id !== id));
  }

  return (
      <Row>
        <Col md={12} className={"mb-3"}>
          <TableTopBar/>
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
              <th scope="col" className={"fw-bold bg-light"}>번호</th>
              <th scope="col" className={"fw-bold bg-light"}>제목</th>
              <th scope="col" className={"fw-bold bg-light"}>유형</th>
              <th scope="col" className={"fw-bold bg-light"}>작성자</th>
              <th scope="col" className={"fw-bold bg-light"}>작성일</th>
              <th scope="col" className={"fw-bold bg-light"}></th>
            </tr>
            </thead>
            <tbody>
            {tableData.map((item, index) => (
                <tr key={index} className={"text-center"}>
                  <td>
                    <input type='checkbox' name='select-item'
                           onChange={(e) => handleSingleCheck(e.target.checked, item.id)}
                           checked={checkItems.includes(item.id)}/>
                  </td>
                  <td>{item.id}</td>
                  <td className={"col-6 text-start"}>{item.title}</td>
                  <td>{item.type}</td>
                  <td>{item.writer}</td>
                  <td>{item.date}</td>
                  <td>
                    <Button variant="outline-secondary" size="sm" className={"px-4"}>수정</Button>
                    <Button
                        variant="outline-danger" size="sm" className={"px-4 ms-3"}
                        onClick={() => handleSingleDelete(item.id)}
                    >
                      삭제
                    </Button>
                  </td>
                </tr>
            ))}
            </tbody>
          </Table>
        </Col>
        <Col md={12}>
          <Pagination/>
        </Col>
      </Row>
  );
};

export default ContentListTable;
