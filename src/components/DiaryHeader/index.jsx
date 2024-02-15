import { Dropdown, Layout, Avatar } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AvatarDevDiary from "../../components/Avatar";
import useUserStore from "../../store";

import logo from "../../assets/logo-devdiaryWhite.svg";

import "./index.css";

const { Header } = Layout;

export default function DiaryHeader() {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const signOut = useUserStore((state) => state.sign_out);

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

  return (
    <Header className={"headerSize"} style={{ backgroundColor: "#00b96b" }}>
      <div className="toolbar">
        <img src={logo} />

        <p className="userPosition" style={{ color: "white" }}>
          <Avatar icon={<AvatarDevDiary avatarUrl={user.avatar_url} />} />
          <Dropdown menu={{ items, onClick }}>
            <strong>{user ? `${user.name}` : ""}</strong>
          </Dropdown>
        </p>
      </div>
    </Header>
  );
}
