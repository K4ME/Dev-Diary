import { useEffect } from 'react'
import { signInWithGithub } from './configs/authMethods'
import { ConfigProvider , Button, Row, Col } from 'antd'
import {GithubOutlined} from '@ant-design/icons'
import logo from './assets/logo-devdiary.svg'

function App() {
  return (
    <>
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
      },
    }}
  > 
      <body>
        <img src={logo}/>
        <p>Bem vindo ao Dev Diary!</p>

        <Button type='primary' onClick={signInWithGithub}> 
          <GithubOutlined /> Logar com Github
        </Button>
      </body>

     </ConfigProvider> 
    </>
  )
}

export default App
