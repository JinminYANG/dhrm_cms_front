import Frame from "../../components/layout/Frame";
// import Breadcrumbs from "../../components/content/Breadcrumbs";
import {Col, Row} from "react-bootstrap";
import ContentSearchBox from "../../components/searchBox/ContentSearchBox";
import ContentListTable from "../../components/table/ContentListTable";
import {useEffect, useState} from "react";

const ContentList = () => {

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
      <Frame>
        <div className={"content w-100"}>
          <div className={"p-4"}>
            <Row>
              <Col md={12}>
                <h1 className={"h4"}>콘텐츠 목록 페이지</h1>
              </Col>
              <Col md={12} className={"mb-3"}>
                <ContentSearchBox
                    searchParam={searchParam}
                    setSearchParam={setSearchParam}
                    // updateList={updateList}
                />
              </Col>
              <Col md={12}>
                <ContentListTable
                    searchParam={searchParam}
                    // updateList={updateList}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Frame>
  );
};

export default ContentList;