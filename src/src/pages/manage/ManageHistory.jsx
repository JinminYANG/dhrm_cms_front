import Frame from "../../components/layout/Frame";
import {Col, Row} from "react-bootstrap";
import ContentSearchBox from "../../components/searchBox/ContentSearchBox";
import ContentListTable from "../../components/table/ContentListTable";
import {useState} from "react";
import ManageHistoryTable from "../../components/table/ManageHistoryTable";

const ManageHistory = () => {

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
                <h1 className={"h4"}>관리업무 히스토리</h1>
              </Col>
              <Col md={12} className={"mb-3"}>
                <ContentSearchBox
                    searchParam={searchParam}
                    setSearchParam={setSearchParam}
                    // updateList={updateList}
                />
              </Col>
              <Col md={12}>
                <ManageHistoryTable
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

export default ManageHistory;
