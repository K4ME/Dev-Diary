import { useContext } from "react";
import { Dropdown, Layout, Avatar, Row, Col } from "antd";
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
    <Header className={"headerSize"} style={{ backgroundColor: "#00b96b" }}>
      <div className="toolbar">
        <img src={logo} />

        <p className="userPosition">
          <Avatar icon={<AvatarDevDiary avatarUrl={user.avatar_url} />} />
          <Dropdown menu={{ items, onClick }}>
            <strong>{user ? `${user.name}` : ""}</strong>
          </Dropdown>
        </p>
      </div>
    </Header>
  );
}
