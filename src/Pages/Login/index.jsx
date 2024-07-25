import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { useSignInWithGithub } from "../../configs/authMethods";
import { UserContext } from "../../components/UserContext";
//import logo from "../../assets/logo-devdiary.svg";
import logo from "../../assets/logo.png";
import "./index.css";

export default function Login() {
  const navigate = useNavigate();
  const { signIn } = useSignInWithGithub();
  const { user, setUser } = useContext(UserContext);

  async function HandleSignIn() {
    await signIn().then((response) => {
      setUser(response);
      navigate("/");
    });
  }

  return (
    <div className="loginDiv">
      <img src={logo} />
      <p>Documente suas ideias!</p>

      <Button type="primary" onClick={HandleSignIn} size="large">
        <GithubOutlined /> Logar com Github
      </Button>
    </div>
  );
}
