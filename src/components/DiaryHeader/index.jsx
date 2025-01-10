import { useContext } from "react";
import { Dropdown, Layout, Avatar } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AvatarDevDiary from "../../components/Avatar";
import { UserContext } from "../UserContext";
import Cookies from "js-cookie";

import logo from "../../assets/logo.png";
import "./index.css";

const { Header } = Layout;

export default function DiaryHeader() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const items = [
    {
      key: "1",
      label: "Perfil",
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: "Sair",
      icon: <LogoutOutlined />,
    },
  ];

  function onClick(e) {
    if (e.key == 1) navigate("/profile");

    if (e.key == 2) signOut();
  }

  function signOut() {
    setUser({
      id: null,
      name: null,
      avatar_url: null,
    });

    Cookies.remove("authToken");
    Cookies.remove("user");

    navigate("/login");
  }

  const isMobile = window.matchMedia("(max-width: 768px)").matches; // Ajuste o breakpoint conforme necessário

  return (
    <Header className="headerSize">
      <div className="toolbar">
        <img
          src={logo}
          alt="Logo"
          style={{ width: isMobile ? "160px" : "auto", height: "auto" }}
        />
        <div className="userPosition">
          <Avatar
            size={48}
            icon={<AvatarDevDiary avatarUrl={user.avatar_url} />}
            style={{ marginRight: "8px" }}
          />
          <Dropdown menu={{ items, onClick }}>
            <strong>{user ? `${user.name}` : ""}</strong>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
}
