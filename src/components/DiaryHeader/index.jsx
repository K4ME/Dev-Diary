import { useContext } from "react";
import { Dropdown, Layout, Avatar } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AvatarDevDiary from "../../components/Avatar";
import { UserContext } from "../UserContext";

import logo from "../../assets/logo-devdiaryWhite.svg";
import "./index.css";

const { Header } = Layout;

export default function DiaryHeader() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

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

    //if (e.key == 2) signOut(); criar função de signOut (setar userstate para null e direcionar para a tela de login)
  }

  return (
    <Header className="headerSize">
      <div className="toolbar">
        <img src={logo} alt="Logo" style={{ width: "98px", height: "98px" }} />
        <div className="userPosition">
          <Avatar
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
