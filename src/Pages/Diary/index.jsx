import React from 'react'
import { Layout, Menu } from 'antd'

const { Header, Content, Footer } = Layout

export default function Diary() {
  return (
    <Header className="headerSize">
      <div className="toolbar"></div>
      {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={new Array(15).fill(null).map((_, index) => {
            const key = index + 1
            return {
              key,
              label: `nav ${key}`
            }
          })}  
        />*/}
    </Header>
  )
}
