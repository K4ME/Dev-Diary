import { ConfigProvider } from 'antd'
import AppRoutes from './AppRoutes'

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b'
          }
        }}
      >
        <AppRoutes />
      </ConfigProvider>
    </>
  )
}

export default App
