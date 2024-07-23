import { ConfigProvider } from "antd";
import AppRoutes from "./AppRoutes";
import Internationalization from "./components/Internationalization";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <>
      <Internationalization>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00b96b",
            },
          }}
        >
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </ConfigProvider>
      </Internationalization>
    </>
  );
}

export default App;
