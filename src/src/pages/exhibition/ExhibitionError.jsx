import Frame from "../../components/layout/Frame";
import {Col, Row} from "react-bootstrap";
import ExhibitionErrorTable from "../../components/table/ExhibitionErrorTable";

const ExhibitionError = () => {
  return (
      <Frame>
        <div className={"content w-100"}>
          <div className={"p-4"}>
            <Row>
              <Col md={12}>
                <h1 className={"h4"}>오류 목록</h1>
              </Col>
              <Col md={12}>
                <ExhibitionErrorTable/>
              </Col>
            </Row>
          </div>
        </div>
      </Frame>
  );
};

export default ExhibitionError;
