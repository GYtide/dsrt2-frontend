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
import { Outlet, Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '@/store'

// 解构 antd Layout
const { Header, Sider } = Layout

const GeekLayout = () => {
  const { timeStore, imageFileList } = useStore()

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
                value={timeStore.date}
                onChange={(date, dateString) => {
                  timeStore.setDate(date)
                }}
                style={{ padding: 10, margin: 10 }}></DatePicker>
            </Card>
            <Card
              title="时间选择"
              bordered={false}
              style={{ width: 200, height: 'auto' }}>
              <TimePicker
                style={{ padding: 10, margin: 10 }}
                value={timeStore.start}
                onChange={(date, dateString) => {
                  timeStore.setStart(date)
                }}
              />
              <TimePicker
                style={{ padding: 10, margin: 10 }}
                value={timeStore.end}
                onChange={(date, dateString) => {
                  timeStore.setEnd(date)
                }}
              />
            </Card>

            <Button
              onClick={imageFileList.setChannelList}
              type="primary"
              icon={<DiffOutlined />}
              style={{
                padding: 10,
                marginLeft: 30,
                marginBottom: 20,
                alignItems: 'center',
              }}
              size="large">
              开始检索
            </Button>
          </Form>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default observer(GeekLayout)
