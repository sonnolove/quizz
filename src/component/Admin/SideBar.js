import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaUsersCog, FaHome, FaPenSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { DiReact } from "react-icons/di";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { SiManageiq } from "react-icons/si";
// import sidebarBg from "../../assets/bg2.jpg";
import "./SideBar.scss";


const SideBar = (props) => {
  const { collapsed, toggled, handleToggleSidebar } = props;
  const navigate = useNavigate();
  return (
    <>
      <ProSidebar
        // image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}>
       <SidebarHeader>
  <div className="sidebar-header" onClick={() => navigate("/")}>
    <div className="logo"></div>
    <span className="span-quizzy">PioQuizzy</span>
  </div>
</SidebarHeader>



        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaHome />}>
              Dashboard
              <Link to="/admin" />
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu title="Manage" icon={<SiManageiq />}>
              <MenuItem icon={<FaUsersCog />}>
                {" "}
                Manage users
                <Link to="/admin/manage-users" />
              </MenuItem>
              <MenuItem icon={<FaPenSquare />}>
                {" "}
                Manage quizzes
                <Link to="/admin/manage-quizzes" />
              </MenuItem>
              <MenuItem icon={<IoIosCheckmarkCircle />}>
                {" "}
                Manage questions
                <Link to="/admin/manage-questions" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

     
      </ProSidebar>
    </>
  );
};

export default SideBar;
