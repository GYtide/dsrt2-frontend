import FreList from '@/components/FreList'
import OverView from '@/components/OverView'
import './index.scss'
import { Card, Tabs } from 'antd'
import Quicklook from '../Quicklook'
import Imageview from '../Imageview'
import Spectrumview from '../Spectrumview'
const items = [
  {
    key: '1',
    label: `数据预览`,
    children: <Quicklook></Quicklook>,
  },
  {
    key: '2',
    label: `射电成像`,
    children: <Imageview></Imageview>,
  },
  {
    key: '3',
    label: `射电频谱`,
    children: <Spectrumview></Spectrumview>,
  },
  {
    key: '4',
    label: `爆发事件`,
    children: `Content of Tab Pane 2`,
  },
]

const Home = () => {
  return <Tabs style={{ width: '100%' }} defaultActiveKey="1" items={items} />
}

export default Home
