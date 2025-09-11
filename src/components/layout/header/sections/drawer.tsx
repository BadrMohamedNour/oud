import { useState, forwardRef } from "react";
import { Drawer, Avatar, Typography, Button, Space } from "antd";
import {
  ArrowLeftOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import { links, otherLinks, subLinks } from "./data";
import ROUTES from "@/utils/routes";

import style from "../styles/header.module.scss";
import ButtonS1 from "@/components/common/ui/buttons/buttonS1/buttonS1";

// Custom transition component (simplified for Ant Design Drawer)
const Transition = forwardRef(function Transition(props, ref) {
  return <div ref={ref} {...props} />;
});

const SideBarMobile = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [openSubLinks, setOpenSubLinks] = useState(false);
  // const { user, isAuthenticated } = useAuth();

  const handleClickOpen = () => setOpen((prevState) => !prevState);
  const handleClose = () => setOpen(false);
  const handleClickOpenSubLinks = () => setOpenSubLinks(true);
  const handleCloseSubLinks = () => setOpenSubLinks(false);

  const handleNavLink = (path) => {
    handleClose();
    handleCloseSubLinks();
    router.push(path);
  };

  return (
    <>
      <ButtonS1
        type="btn"
        text={<ArrowLeftOutlined style={{ fontSize: 24 }} />}
        onClick={handleClickOpen}
      />

      <Drawer
        open={open}
        closeIcon={null}
        placement="right"
        width="100%"
        bodyStyle={{ padding: 0 }}
        className={style.drawer}
      >
        {false && (
          <>
            <div className="user">
              <Avatar className="user-avatar" size={54}>
                {/* {user?.username?.slice(0, 1)?.toLocaleUpperCase()} */}
              </Avatar>
              <div className="user-details">
                <Typography.Text className="username">
                  {/* {user?.username} */}
                </Typography.Text>
                <Typography.Text className="email">
                  {/* {user?.email} */}
                </Typography.Text>
              </div>
            </div>
            <div className="divider" />
          </>
        )}
        <div className="nav-links">
          {links.map(({ label, path, icon }) => (
            <Button
              key={label}
              onClick={() => handleNavLink(path)}
              className="nav-button"
            >
              <div className="nav-button-content">
                {icon}
                <Typography.Text className="nav-label">{label}</Typography.Text>
              </div>
              <ArrowLeftOutlined />
            </Button>
          ))}
          <div className="other-links">
            {otherLinks.map(({ label, icon }) => (
              <Button
                key={label}
                onClick={handleClickOpenSubLinks}
                className="nav-button"
              >
                <div className="nav-button-content">
                  {icon}
                  <Typography.Text className="nav-label">
                    {label}
                  </Typography.Text>
                </div>
                <ArrowLeftOutlined />
              </Button>
            ))}
          </div>
          {true ? (
            <div className="auth-button">
              <div className="nav-button-content">
                <LogoutOutlined />
                <Typography.Text className="auth-label">logout</Typography.Text>
              </div>
              <ArrowLeftOutlined />
            </div>
          ) : (
            <Link href={ROUTES.LOGIN.path}>
              <div className="auth-button">
                <div className="nav-button-content">
                  <LoginOutlined />
                  <Typography.Text className="auth-label">
                    login
                  </Typography.Text>
                </div>
                <ArrowLeftOutlined />
              </div>
            </Link>
          )}
        </div>
      </Drawer>
      <Drawer
        open={openSubLinks}
        onClose={handleCloseSubLinks}
        placement="right"
        width="100%"
        bodyStyle={{ padding: 0 }}
        className="sidebar-mobile"
      >
        <div className="nav-links">
          {subLinks.map(({ label, path, icon }) => (
            <Button
              key={label}
              onClick={() => handleNavLink(path)}
              className="nav-button"
            >
              <div className="nav-button-content">
                {icon}
                <Typography.Text className="nav-label">{label}</Typography.Text>
              </div>
              <ArrowLeftOutlined />
            </Button>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default SideBarMobile;
