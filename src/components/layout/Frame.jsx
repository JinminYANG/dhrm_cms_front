import Container from "react-bootstrap/Container";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Frame = ({
                 propIsActiveHeader = true,
                 propIsActiveSidebar = true,
                 children
               }) => {
  return (
      <Container fluid className={'p-0 wrapper'}>
        {propIsActiveHeader && <Header/>}
        <div className={"main"}>
          {propIsActiveSidebar && <Sidebar/>}
          {children}
        </div>
      </Container>
  );
};

export default Frame;
