import { ConfigProvider } from "antd";
import AppRoutes from "./AppRoutes";
import Internationalization from "./components/Internationalization";

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
          <AppRoutes />
        </ConfigProvider>
      </Internationalization>
    </>
  );
}

export default App;
