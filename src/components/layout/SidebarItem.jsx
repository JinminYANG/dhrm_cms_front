import {useEffect, useState} from "react"
import {NavLink} from "react-router-dom";

export default function SidebarItem({item}) {
  const [open, setOpen] = useState(false)

  const [userAuthLevel, setUserAuthLevel] = useState('');

  useEffect(() => {
    console.log(item);
  }, [item]);


  useEffect(() => {
    const userAuth = window.localStorage.getItem('auth');
    setUserAuthLevel(userAuth);
  }, []);

  // 현재 url 정보 가져오기
  const currentUrl = window.location.pathname;

  if (item.childrens) {
    return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
          <div className="sidebar-title">
            <span className={"text-white fw-bold"}>
              {item.icon && <i className={item.icon}></i>}
              {item.title}
            </span>
            <i className="bi-chevron-down toggle-btn text-white" onClick={() => setOpen(!open)}></i>
          </div>
          <div className="sidebar-content">
            {item.childrens.map((child, index) => <SidebarItem key={index} item={child}/>)}
          </div>
        </div>
    )
  } else {
    if (userAuthLevel >= item.auth_level) {

      return (
          <NavLink to={item.path || "#"} className="sidebar-item plain">
            {item.icon && <i className={item.icon}></i>}
            {item.title}
          </NavLink>
      )
    }
  }
}