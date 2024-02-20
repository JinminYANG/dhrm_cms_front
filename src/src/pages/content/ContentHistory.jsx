import Frame from "../../components/layout/Frame";
import {Col, Row} from "react-bootstrap";
import ContentSearchBox from "../../components/searchBox/ContentSearchBox";
import {useState} from "react";
import ContentHistoryTable from "../../components/table/ContentHistoryTable";

const ContentHistory = () => {

  // 검색기능 state
  const [searchParam, setSearchParam] = useState({
    searchType: '',
    searchKeyword: ''
  });

  return (
      <Frame>
        <div className={"content w-100"}>
          <div className={"p-4"}>
            <Row>
              <Col md={12}>
                <h1 className={"h4"}>콘텐츠 히스토리</h1>
              </Col>
              <Col md={12} className={"mb-3"}>
                <ContentSearchBox
                    searchParam={searchParam}
                    setSearchParam={setSearchParam}
                    // updateList={updateList}
                />
              </Col>
              <Col md={12}>
                <ContentHistoryTable
                    searchParam={searchParam}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Frame>
  );
};

export default ContentHistory;
