// Components
import Link from "next/link"
import { Drawer, Avatar } from "antd"
import ButtonS1 from "@/components/tools/buttons/buttonS1"

// Hooks
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

// Icons
import { LeftOutlined, LoginOutlined, LogoutOutlined } from "@ant-design/icons"
import { MdMenu } from "react-icons/md"

// Style
import style from "../styles/header.module.scss"

import { useAuth } from "@/context/auth-context"
import { links, otherLinks, subLinks } from "./data"
import ROUTES from "@/utils/routes"

const MainDrawer: React.FC = () => {
  const pathName = usePathname()
  const [open, setOpen] = useState(false)
  const [openSubLinks, setOpenSubLinks] = useState(false)
  // const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (open) {
      setOpen(false)
    }
  }, [pathName])

  return (
    <>
      <button
        type="button"
        className="menuBtn"
        onClick={() => (openSubLinks ? setOpenSubLinks(false) : setOpen((prevState) => !prevState))}
      >
        <MdMenu style={{ fontSize: 24 }} />
      </button>

      <Drawer open={open} closeIcon={null} mask={false} placement="right" width="100%" rootClassName={style.mainDrawer}>
        {false && (
          <>
            <div className="divider" />
            <div className="user">
              <Avatar className="avatar" size={54}>
                {/* {user?.username?.slice(0, 1)?.toLocaleUpperCase()} */}
              </Avatar>
              <div className="info">
                <span className="username">{/* {user?.username} */}</span>
                <span className="email">{/* {user?.email} */}</span>
              </div>
            </div>
          </>
        )}

        <ul className="links">
          {links.map(({ label, path, icon }) => (
            <li key={label}>
              <Link href={path}>
                <div className="content">
                  {icon}
                  <span>{label}</span>
                </div>
                <LeftOutlined />
              </Link>
            </li>
          ))}
        </ul>

        <ul className="links">
          {otherLinks.map(({ label, icon }) => (
            <li key={label}>
              <button onClick={() => setOpenSubLinks((prevState) => !prevState)}>
                <div className="content">
                  {icon}
                  <span>{label}</span>
                </div>
                <LeftOutlined />
              </button>
            </li>
          ))}
        </ul>

        <div className="auth">
          {false ? (
            <button className="logoutBtn">
              <div className="nav-button-content">
                <LogoutOutlined />
                <span className="auth-label">logout</span>
              </div>
              <LeftOutlined />
            </button>
          ) : (
            <Link href={ROUTES.LOGIN.path}>
              <div className="content">
                <LoginOutlined />
                <span>تسجيل الدخول</span>
              </div>
              <LeftOutlined />
            </Link>
          )}
        </div>

        <Drawer
          open={openSubLinks}
          closeIcon={null}
          mask={false}
          placement="right"
          width="100%"
          rootClassName={style.mainDrawer}
        >
          <ul className="links">
            {subLinks.map(({ label, path, icon }) => (
              <Link key={label} href={path}>
                <div className="content">
                  {icon}
                  <span>{label}</span>
                </div>
                <LeftOutlined />
              </Link>
            ))}
          </ul>
        </Drawer>
      </Drawer>
    </>
  )
}

export default MainDrawer
