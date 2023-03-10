import { Layout, Menu, Popconfirm, Card, Button, Form } from 'antd'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet } from 'react-router-dom'

// 解构 antd Layout
const { Header, Sider } = Layout

const GeekLayout = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">user.name</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider theme="light" width={'auto'} className="site-layout-background">
          <Form style={{ height: '100%', borderRight: 0 }}>
            <Card
              title="日期选择"
              bordered={false}
              style={{ width: 200, height: 'auto' }}>
              <DatePicker
                value={new dayjs()}
                style={{ padding: 10, margin: 10 }}></DatePicker>
            </Card>
            <Card
              title="时间选择"
              bordered={false}
              style={{ width: 200, height: 'auto' }}>
              <DatePicker
                value={new dayjs()}
                style={{ padding: 10, margin: 10 }}></DatePicker>
              <DatePicker
                value={new dayjs()}
                style={{ padding: 10, margin: 10 }}></DatePicker>
            </Card>
            <Card
              title="数据检索"
              bordered={false}
              style={{ width: 200, height: 'auto' }}>
              <Button style={{ padding: 10, margin: 10 }}>数据预览</Button>
              <Button style={{ padding: 10, margin: 10 }}>文件预览</Button>
            </Card>
          </Form>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default GeekLayout
