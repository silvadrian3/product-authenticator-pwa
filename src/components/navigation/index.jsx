import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { Auth } from "aws-amplify";
import { IconContext } from 'react-icons';
import Sidebar from '../sidebar';
import { SidebarData } from '../sidebar/SidebarData';
import { RiLogoutCircleLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

function Navigation() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [location, setlocation] = useState(window.location.pathname);
  const [userInfo, setuserInfo] = useState(null);


  let history = useHistory();

  const clickLogout = async (e) => {
    e.preventDefault();
    if (window.confirm("Are you sure you want to logout?")) {
      setSidebar(false);
      try {
        await Auth.signOut();
        console.log('Sign out completed.');
        history.push("/");

      } catch (error) {
        console.log('Error signing out: ', error);
      }
    } else {
      return false;
    }
  }

  useEffect(() => {
    // setSidebar(false); -- identify if the user changed the location/path
  }, []);

  history.listen((location) => {
    setlocation(location.pathname);
  })

  useEffect(() => {
    let getUser = async () => {
      try {
        let user = await Auth.currentAuthenticatedUser();
        
        await setuserInfo(user);
      } catch (error) {
        console.log(error)
      }
    }
    getUser();
  }, []);


  return (
    <>
      {location !== '/' &&
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className="sidebar-collapsed sidebar">
            <div className="main-grid">
              <div className="logo-grid-collapsed">
                <HiOutlineMenu onClick={showSidebar} style={{ color: 'var(--mysteryGrey)' }} />
              </div>
              <ul className="nav-menus">
                {SidebarData.map((item, index) => {
                  return (
                    // <li key={index} onClick={showSidebar}>
                    <li key={index}>
                      <Link className="nav-item-collapsed nav-item" to={item.path}>
                        {item.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="bottom-grid">
              <div className="logout-btn-collapsed logout-btn" onClick={clickLogout}>
              <RiLogoutCircleLine style={{ color: "var(--darkgray)" }} />
              </div>
              {/* <div className="avatar-grid-collapsed">
                <div className="avatar text-center">
                  { userInfo !== null && userInfo.attributes.name.charAt(0) }
                </div>
              </div> */}
            </div>
          </div>
          {sidebar && <Sidebar showSidebar={showSidebar} userInfo={userInfo} clickLogout={clickLogout} />}

        </IconContext.Provider>
      }
    </>
  );
}



export default Navigation;
