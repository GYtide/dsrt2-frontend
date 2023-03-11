import FreList from '@/components/FreList'
import OverView from '@/components/OverView'
import './index.scss'
import { Card, Tabs } from 'antd'
import Quicklook from '../Quicklook'
const items = [
  {
    key: '1',
    label: `射电成像`,
    children: <Quicklook></Quicklook>,
  },
  {
    key: '2',
    label: `射电频谱`,
    children: `Content of Tab Pane 2`,
  },
]

const Home = () => {
  return <Tabs style={{ width: '100%' }} defaultActiveKey="1" items={items} />
}

export default Home
