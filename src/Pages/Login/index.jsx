import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { useSignInWithGithub } from "../../configs/authMethods";
import logo from "../../assets/logo-devdiary.svg";

import "./index.css";
import useUserStore from "../../store";

export default function Login() {
  const navigate = useNavigate();
  const { signIn } = useSignInWithGithub();
  const { sign_in } = useUserStore();

  async function HandleSignIn() {
    const user = await signIn();

    sign_in(user);

    if (user) navigate("/");
  }

  return (
    <div className="loginDiv">
      <img src={logo} />
      <p>Bem-vindo ao Dev Diary!</p>

      <Button type="primary" onClick={HandleSignIn}>
        <GithubOutlined /> Logar com Github
      </Button>
    </div>
  );
}
