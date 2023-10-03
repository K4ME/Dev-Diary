import { Dropdown, Layout, Menu, Avatar } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import AvatarDevDiary from "../../components/Avatar";
import useUserStore from "../../store";

import logo from "../../assets/logo-devdiaryWhite.svg";

import "./index.css";

const { Header /* Content, Footer */ } = Layout;

export default function Diary() {
  const user = useUserStore((state) => state.user);
  const signOut = useUserStore((state) => state.sign_out);
  const menu = (
    <Menu>
      <Menu.Item icon={<UserOutlined />}>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item onClick={() => signOut()} icon={<LogoutOutlined />}>
        Sair
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={"headerSize"} style={{ backgroundColor: "#00b96b" }}>
      <div className="toolbar">
        <img src={logo} />
        <Dropdown menu={menu} placement="bottom" trigger={["click"]}>
          <p className="userPosition" style={{ color: "white" }}>
            <strong>
              <Avatar icon={<AvatarDevDiary avatarUrl={user.avatar_url} />} />
              {user ? `${user.name}` : ""}
            </strong>
          </p>
        </Dropdown>
      </div>
    </Header>
  );
}
