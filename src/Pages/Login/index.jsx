import React from 'react'
import { Button } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { signInWithGithub } from '../../configs/authMethods'
import logo from '../../assets/logo-devdiary.svg'

import './index.css'

export default function Login() {
  return (
    <body>
      <img src={logo} />
      <p>Bem-vindo ao Dev Diary!</p>

      <Button type="primary" onClick={signInWithGithub}>
        <GithubOutlined /> Logar com Github
      </Button>
    </body>
  )
}
