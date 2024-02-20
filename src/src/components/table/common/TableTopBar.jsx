import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import OpenArchiveList from "../../../pages/content/sub/OpenArchiveList";
import RegisterContent from "../../../pages/content/sub/RegisterContent";
import ManagerDetail from "../../../pages/manage/ManagerDetail";

const TableTopBar = ({
                       checkItems,
                       tableData,
                       setTableData,
                       modalOption,
                       setModalOption,
                       location,
                     }) => {

  const deleteCheckedItems = () => {
    // 체크된 아이템을 삭제하는 로직
    const newData = tableData.filter((el) => !checkItems.includes(el.id));
    setTableData(newData);
  };

  const openArchive = () => {
    console.log('오픈아카이브');

    // 모달 창 띄우기
    setModalOption(prev => {
      return {
        ...prev,
        show: true,
        title: '오픈아카이브 목록보기',
        content: <OpenArchiveList
            modalOption={modalOption}
            setModalOption={setModalOption}
        />,
      };
    });
  };

  const registerContent = () => {
    console.log('신규 등록');

    // 모달 창 띄우기
    setModalOption(prev => {
      return {
        ...prev,
        show: true,
        title: '신규 등록',
        content:
            <RegisterContent
                modalOption={modalOption}
            />,
      };
    });
  };

  const registerManager = () => {
    console.log('신규 등록');

    // 모달 창 띄우기
    setModalOption(prev => {
      return {
        ...prev,
        show: true,
        title: '관리자 등록하기',
        content: <ManagerDetail modalOption={modalOption}/>,
      };
    });
  }

  return (
      <Row>
        <Col md={1}>
          <Button className={"btn btn-secondary"}
                  onClick={() => deleteCheckedItems()}
          >
            선택 삭제
          </Button>
        </Col>
        {location === 'content' &&
            <>
              <Col md={{span: 1, offset: 9}} className={"text-end"}>
                <Button className={"btn btn-success"}
                        onClick={() => openArchive()}
                >
                  오픈아카이브
                </Button>
              </Col>
              <Col md={1} className={"text-end"}>
                <Button className={"btn btn-primary"}
                        onClick={() => registerContent()}
                >
                  신규 등록
                </Button>
              </Col>
            </>
        }
        {location === "manage" &&
            <>
              <Col md={{span: 1, offset: 10}} className={"text-end"}>
                <Button className={"btn btn-primary"}
                        onClick={() => registerManager()}
                >
                  신규 등록
                </Button>
              </Col>
            </>
        }
      </Row>
  );
};

export default TableTopBar;
