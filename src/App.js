import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import ContentList from "./pages/content/ContentList";
import ContentHistory from "./pages/content/ContentHistory";
import ExhibitionMonitor from "./pages/exhibition/ExhibitionMonitor";
import ExhibitionError from "./pages/exhibition/ExhibitionError";
import Templates from "./pages/templates/Templates";
import ManageAuthority from "./pages/manage/ManageAuthority";
import ManageList from "./pages/manage/ManageList";
import ManageHistory from "./pages/manage/ManageHistory";

const App = () => {
  return (
      <div className={"App"}>
        <BrowserRouter>
          <Routes>
            {/* 로그인 및 메인 페이지*/}
            <Route path="/" element={<Login/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/ui/login" element={<Login/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/ui/main" element={<Main/>}/>

            {/* 콘텐츠 관리 */}
            <Route path="/content/list" element={<ContentList/>}/>
            <Route path="/ui/content/list" element={<ContentList/>}/>
            <Route path="/content/history" element={<ContentHistory/>}/>
            <Route path="/ui/content/history" element={<ContentHistory/>}/>

            {/* 전시 상태 모니터링 */}
            <Route path="/exhibition/monitor" element={<ExhibitionMonitor/>}/>
            <Route path="/ui/exhibition/monitor" element={<ExhibitionMonitor/>}/>
            <Route path="/exhibition/error" element={<ExhibitionError/>}/>
            <Route path="/ui/exhibition/error" element={<ExhibitionError/>}/>

            {/* 템플릿 관리 */}
            <Route path="/templates" element={<Templates/>}/>

            {/* 관리자 관리 */}
            <Route path="/manage/authority" element={<ManageAuthority/>}/>
            <Route path="/ui/manage/authority" element={<ManageAuthority/>}/>
            <Route path="/manage/list" element={<ManageList/>}/>
            <Route path="/ui/manage/list" element={<ManageList/>}/>
            <Route path="/manage/history" element={<ManageHistory/>}/>
            <Route path="/ui/manage/history" element={<ManageHistory/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
};

export default App;
