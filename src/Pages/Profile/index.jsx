import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import { useSignInWithGithub } from "../../configs/authMethods";
import logo from "../../assets/logo-devdiary.svg";

//import "./index.css";
import useUserStore from "../../store";

export default function Profile() {
  return <h1>Profile page</h1>;
}
