import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import ContentSearchBox from "../../../components/searchBox/ContentSearchBox";
import OpenArchiveListTable from "../../../components/table/OpenArchiveListTable";

const OpenArchiveList = ({
                           modalOption,
                           setModalOption,
                         }) => {

  // 검색기능 state
  const [searchParam, setSearchParam] = useState({
    searchType: '',
    searchKeyword: ''
  });

  const updateList = () => {
    console.log(searchParam);
  };

  useEffect(() => {
    updateList();
  }, [searchParam]);

  return (
      <>
        <Row>
          <Col md={12} className={"mb-3"}>
            <ContentSearchBox
                searchParam={searchParam}
                setSearchParam={setSearchParam}
            />
          </Col>
          <Col md={12}>
            <OpenArchiveListTable
                searchParam={searchParam}
                modalOption={modalOption}
                setModalOption={setModalOption}
            />
          </Col>
        </Row>
      </>
  );
};

export default OpenArchiveList;
