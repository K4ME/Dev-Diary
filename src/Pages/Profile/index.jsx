import { Image } from "antd";
import { useContext } from "react";
import { UserContext } from "../../components/UserContext";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Profile page</h1>
      <Image alt="Avatar do usário" src={user.avatar_url}></Image>
      <h1>{user.name}</h1>
    </>
  );
}
