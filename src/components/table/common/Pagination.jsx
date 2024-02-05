import React from 'react';
import {Col, Row} from "react-bootstrap";
import ReactPaginate from "react-js-pagination";
import {faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Pagination = () => {
  return (
      <Row>
        <Col>
          <ReactPaginate
              // activePage={propCurPage}
              // itemsCountPerPage={propPageSize}
              totalItemsCount={5}
              pageRangeDisplayed={5}
              prevPageText={
                <div className={"previous fs-6 ms-1"}>
                  <FontAwesomeIcon icon={faAngleLeft} className={"pe-2"}/>
                </div>
              }
              firstPageText={
                <div className={"previous fs-6 ms-1"}>
                  <FontAwesomeIcon icon={faAnglesLeft} className={"pe-2"}/>
                </div>
              }
              nextPageText={
                <div className={"next fs-6 me-1"}>
                  <FontAwesomeIcon icon={faAngleRight} className={"ps-2"}/>
                </div>
              }
              lastPageText={
                <div className={"previous fs-6 ms-1"}>
                  <FontAwesomeIcon icon={faAnglesRight} className={"pe-2"}/>
                </div>
              }
              onChange={() => {}} // handlePageChange
              activeClass={"active"}
              innerClass={"pagination justify-content-center"}
              itemClass={"page-item"}
              linkClass={"page-link"}
              itemClassPrev={"prev"}
              itemClassNext={"next"}
              itemClassFirst={"first"}
              itemClassLast={"last"}
          />
        </Col>
      </Row>
  );
};

export default Pagination;