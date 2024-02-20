import {useEffect, useState} from "react"
import {NavLink, useLocation} from "react-router-dom";

export default function SidebarItem({item, isActive}) {

  const [open, setOpen] = useState(false)
  const [userAuthLevel, setUserAuthLevel] = useState('');

  const pathName = useLocation().pathname;


  useEffect(() => {
    const userAuth = window.localStorage.getItem('auth');
    setUserAuthLevel(userAuth);
  }, []);

  useEffect(() => {
    // console.log(item);
    if (item.childrens) {
      item.childrens.map((child) => {
        if (child.path === pathName) {
          setOpen(true);
        }
      })
    }
  }, [item]);


  if (item.childrens) {
    // item.childrens 배열 안에서 auth_level과 userAuthLevel 데이터 비교 후 보여줄 데이터가
    // 없을 시 sidebar-item 클래스를 가진 div를 반환하지 않는 기능
    const filteredChildren = item.childrens.filter((child) => {
      return userAuthLevel >= child.auth_level;
    });

    if (filteredChildren.length === 0) return null;

    return (
        <div className={open ? "sidebar-item open my-3" : "sidebar-item my-3"}>
          <div className="sidebar-title">
            <span className={"text-white fw-bold"}>
              {item.icon && <i className={item.icon}></i>}
              {item.title}
            </span>
            <i className="bi-chevron-down toggle-btn text-white" onClick={() => setOpen(!open)}></i>
          </div>
          <div className="sidebar-content">
            {item.childrens.map((child, index) =>
                <SidebarItem key={index} item={child}
                             isActive={pathName === item.title}/>
            )}
          </div>
        </div>
    )
  } else {
    if (userAuthLevel >= item.auth_level) {
      return (
          <NavLink to={item.path || "#"} className={`sidebar-item mt-3 plain ${isActive ? "active" : ""}`}>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </NavLink>
      )
    }
  }
}