import './index.scss'
import { Card, Tabs } from 'antd'

const items = [
  {
    key: '1',
    label: `射电成像`,
    children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `射电频谱`,
    children: `Content of Tab Pane 2`,
  },
]

const Fileview = () => {
  return <Tabs defaultActiveKey="1" items={items} />
}

export default Fileview
