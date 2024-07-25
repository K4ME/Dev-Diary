import { ConfigProvider, theme } from "antd";
import AppRoutes from "./AppRoutes";
import Internationalization from "./components/Internationalization";
import { UserProvider } from "./components/UserContext";
import draculaTheme from "./theme";

function App() {
  return (
    <>
      <Internationalization>
        <ConfigProvider theme={draculaTheme}>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </ConfigProvider>
      </Internationalization>
    </>
  );
}

export default App;
