import Frame from "../../components/layout/Frame";
import Breadcrumbs from "../../components/content/Breadcrumbs";

const ContentList = () => {
  return (
      <Frame>
        <div className="main p-3">
          <div className={"content"}>
            <h1>콘텐츠 목록</h1>
            <Breadcrumbs/>
          </div>
        </div>
      </Frame>
  );
};

export default ContentList;
