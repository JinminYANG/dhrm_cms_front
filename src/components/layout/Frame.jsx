import Header from "./Header";
import Container from "react-bootstrap/Container";

const Frame = ({
                 children
               }) => {
  return (
      <Container fluid className={'p-0 wrapper'}>
        <Header/>
        <div className={"main"}>
          {/*<Sidebar/>*/}
          {children}
        </div>
      </Container>
  );
};

export default Frame;
