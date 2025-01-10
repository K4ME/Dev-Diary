import { createContext, useState } from "react";
import Cookies from "js-cookie";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const cookieUser = Cookies.get("user");
  const parsedCookieUser = cookieUser
    ? JSON.parse(cookieUser)
    : {
        id: null,
        name: null,
        avatar_url: null,
      };

  const [user, setUser] = useState(parsedCookieUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
