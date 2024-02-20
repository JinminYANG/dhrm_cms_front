import Frame from "../../components/layout/Frame";
import {Col, Row} from "react-bootstrap";

const Templates = () => {
  return (
      <Frame>
        <div className={"content w-100"}>
          <div className={"p-4"}>
            <Row>
              <Col md={12}>
                <h1 className={"h4"}>화면 템플릿</h1>
              </Col>
              <Col md={12}>
                {/* 화면 템플릿 내용 */}

              </Col>
            </Row>
          </div>
        </div>
      </Frame>
  );
};

export default Templates;
