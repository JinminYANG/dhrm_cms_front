import Frame from "../../components/layout/Frame";
import {Col, Row} from "react-bootstrap";
import ExhibitionMonitorTable from "../../components/table/ExhibitionMonitorTable";

const ExhibitionMonitor = () => {
  return (
      <Frame>
        <div className={"content w-100"}>
          <div className={"p-4"}>
            <Row>
              <Col md={12}>
                <h1 className={"h4"}>전시관 모니터링</h1>
              </Col>
              <Col md={12}>
                <ExhibitionMonitorTable/>
              </Col>
            </Row>
          </div>
        </div>
      </Frame>
  );
};

export default ExhibitionMonitor;
