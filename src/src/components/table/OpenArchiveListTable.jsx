import React, {useEffect, useState} from 'react';
import {Button, Col, Row, Table} from "react-bootstrap";
import Pagination from "./common/Pagination";
import {isInitialConsonantMatch} from "../../hooks/MatchInitialConsonant";
import RegisterContent from "../../pages/content/sub/RegisterContent";

const OpenArchiveListTable = ({
                                searchParam,
                                modalOption,
                                setModalOption,
                              }) => {

  const data = [
    {id: 123456789, title: '오픈아카이브 목록 테스트 제목 1 (이미지)', type: '이미지', producer: '경향신문사', donor: '경향신문사'},
    {id: 123456788, title: '오픈아카이브 목록 테스트 제목 2 (이미지)', type: '이미지', producer: '3.15의거기념사업회', donor: '3.15의거기념사업회'},
    {id: 123456787, title: '오픈아카이브 목록 테스트 제목 3 (이미지)', type: '이미지', producer: '경향신문사', donor: '경향신문사'},
    {id: 123456786, title: '오픈아카이브 목록 테스트 제목 4 (이미지)', type: '이미지', producer: '경향신문사', donor: '경향신문사'},
    {id: 123456785, title: '오픈아카이브 목록 테스트 제목 5 (이미지)', type: '이미지', producer: '경향신문사', donor: '경향신문사'},
  ];

  const [tableData, setTableData] = useState(data);

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

  const register = (id) => {
    console.log(id);
    /*setModalOption({
      show: true,
      title: '등록',
      content: <RegisterContent id={id} setModalOption={setModalOption}/>,
    });*/

    setModalOption(prev => {
      return {
        ...prev,
        show: true,
        title: '등록',
        content: <RegisterContent id={id} modalOption={modalOption} setModalOption={setModalOption}/>,
      }
    })

  }

  return (
      <>
        <Row>
          <Col md={12}>
            <Table hover bordered>
              <thead>
              <tr className={"text-center"}>
                <th scope="col" className={"fw-bold bg-light p-4"}>등록번호</th>
                <th scope="col" className={"fw-bold bg-light"}>제목</th>
                <th scope="col" className={"fw-bold bg-light"}>유형</th>
                <th scope="col" className={"fw-bold bg-light"}>생산자</th>
                <th scope="col" className={"fw-bold bg-light"}>기증자</th>
                <th scope="col" className={"fw-bold bg-light"}></th>
              </tr>
              </thead>
              <tbody>
              {tableData.map((item, index) => (
                  <tr key={index} className={"text-center"}>
                    <td>{item.id}</td>
                    <td className={"col-6 text-start"}>{item.title}</td>
                    <td>{item.type}</td>
                    <td>{item.producer}</td>
                    <td>{item.donor}</td>
                    <td>
                      <Button className={"btn btn-secondary"}
                              onClick={() => register(item.id)}
                      >등록</Button>
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
      </>
  );
};

export default OpenArchiveListTable;
