import React from 'react';
import {Breadcrumb} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";

const Breadcrumbs = () => {

  const location = useLocation();
  const {pathname} = location;
  console.log(pathname);
  const segments = pathname.split('/').filter((i) => i);
  console.log(segments);

  let url = '';
  const breadcrumbItems = segments.map((segment, i) => {
    url += `/${segment}`;
    /*return (
        <Breadcrumb.Item key={i} linkAs={Link} linkProps={{to: url}}>{segment}</Breadcrumb.Item>
    );*/
    return (
        <Link key={i} to={`/${segment}`}>
          {segment}
        </Link>
    )
  });

  return (
      <Breadcrumb>
        {breadcrumbItems.map((breadcrumbItem, i) => (
            <div key={i}>
              {breadcrumbItem}
            </div>
        ))}
        {/*
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
        */}
      </Breadcrumb>
  );
};

export default Breadcrumbs;
