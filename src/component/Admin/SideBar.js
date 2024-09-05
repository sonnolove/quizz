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
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}>
            <DiReact size={"3em"} color={"00bfff"} className="icon-sidebar" />
            <span className="span-quizzy" onClick={() => navigate("/")}>
              PioQuizzy
            </span>
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

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}>
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer">
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}>
                &#169; Bien
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
