import {
  Layout,
  Menu,
  Popconfirm,
  TimePicker,
  Col,
  InputNumber,
  Row,
  Slider,
  Space,
  Card,
  Button,
  Form,
} from 'antd'
import { DatePicker } from 'antd'
import dayjs from 'dayjs'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, Link } from 'react-router-dom'
import { useState } from 'react'

// 解构 antd Layout
const { Header, Sider } = Layout

const GeekLayout = () => {
  const [date, setDate] = useState(dayjs())
  const [starttime, setStarttime] = useState(dayjs())
  const [endtime, setEndtime] = useState(dayjs())

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
        <Sider width={200} theme="light" className="site-layout-background">
          <Form style={{ height: '100%', borderRight: 0 }}>
            <Card
              title="日期选择"
              bordered={false}
              style={{ width: 200, height: 'auto' }}>
              <DatePicker
                value={date}
                onChange={(date, dateString) => {
                  setDate(date)
                }}
                style={{ padding: 10, margin: 10 }}></DatePicker>
            </Card>
            <Card
              title="时间选择"
              bordered={false}
              style={{ width: 200, height: 'auto' }}>
              <TimePicker
                style={{ padding: 10, margin: 10 }}
                value={starttime}
                onChange={(date, dateString) => {
                  setStarttime(date)
                }}
              />
              <TimePicker
                style={{ padding: 10, margin: 10 }}
                value={endtime}
                onChange={(date, dateString) => {
                  setEndtime(date)
                }}
              />
            </Card>
            <Menu
              mode="inline"
              theme="light"
              // defaultSelectedKeys={['1']}
              style={{ height: 'auto', borderRight: 0, padding: 10 }}>
              <Menu.Item
                style={{ padding: 10, marginBottom: 20 }}
                icon={<HomeOutlined />}
                key="1">
                <Link
                  to={`/quicklook/?date=${date.format(
                    'YYYY-MM-DD'
                  )}&start=${starttime.format('HH:mm')}&end=${endtime.format(
                    'HH:mm'
                  )}`}>
                  数据概览
                </Link>
              </Menu.Item>
              <Menu.Item
                style={{ padding: 10, marginBottom: 20 }}
                icon={<DiffOutlined />}
                key="2">
                <Link
                  to={`/fileview/?date=${date.format(
                    'YYYY-MM-DD'
                  )}&start=${starttime.format('HH:mm')}&end=${endtime.format(
                    'HH:mm'
                  )}`}>
                  文件预览
                </Link>
              </Menu.Item>
            </Menu>
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
