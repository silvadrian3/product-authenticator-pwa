import { RiLogoutCircleLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import "../../assets/styles/Navigation.css";

const Sidebar = ({ showSidebar, userInfo, clickLogout }) => {
  console.log(userInfo);
  return (
    <>
      <div className="sidebar">
        <div className="main-grid">
          <div className="logo-grid">
            {/* <img
              src="https://s3.ap-southeast-1.amazonaws.com/lookup.ph/assets/website/lookup-logo.png"
              alt="lookup"
              width="80px"
            /> */}
            <button>
              <HiOutlineMenu
                onClick={showSidebar}
                style={{ color: "var(--mysteryGrey)" }}
              />
            </button>
          </div>
          <ul className="nav-menus">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} onClick={showSidebar}>
                  <Link className="nav-item" to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bottom-grid">
          <div className="logout-btn" onClick={clickLogout}>
            <RiLogoutCircleLine style={{ color: "var(--darkgray)" }} />
            <span>Log out</span>
          </div>
          {/* <div className="avatar-grid">
            <div className="avatar text-center">
              {userInfo !== null && userInfo.attributes.name.charAt(0)}
            </div>
            <div className="details-grid">
              <span>{userInfo.attributes.name}</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="spacer-div"> </div>
    </>
  );
};

export default Sidebar;
