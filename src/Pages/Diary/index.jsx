import { Dropdown, Layout, Menu, Avatar } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import AvatarDevDiary from "../../components/Avatar";
import { Link } from "react-router-dom";
import useUserStore from "../../store";

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
    <Header className={"headerSize"}>
      <div className="toolbar">
        {/* <div className="notificationMenuPosition">
          <LevyTimer />
        </div>
        <div className="notificationMenuPosition">
          <LevyReloadPage />
        </div>
        <div className="notificationMenuPosition">
          <NotificacaoMenu />
        </div>
        <div className="notificationMenuPosition">
          <LevyAlterTheme />
        </div> */}
        <div>
          <Dropdown menu={menu} placement="bottom" trigger={["click"]}>
            <p className="userPosition" style={{ color: "white" }}>
              <strong>
                <Avatar icon={<AvatarDevDiary avatarUrl={user.avatar_url} />} />
                {user ? `${user.name}` : ""}
              </strong>
            </p>
          </Dropdown>
        </div>
      </div>
    </Header>
  );
}
