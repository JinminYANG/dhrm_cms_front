import Frame from "../components/layout/Frame";
import Breadcrumbs from "../components/content/Breadcrumbs";

const Main = () => {
  return (
      <Frame>
        <div className="main p-3">
          <div className={"content"}>
            <h1>메인 페이지</h1>
            <Breadcrumbs/>
          </div>
        </div>
      </Frame>
  );
};

export default Main;
