import { ConfigProvider } from "antd";
import AppRoutes from "./AppRoutes";
import useUserStore from "./store";

function App() {
  const user = useUserStore((state) => state.user);
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
        }}
      >
        <AppRoutes User={user} />
      </ConfigProvider>
    </>
  );
}

export default App;
