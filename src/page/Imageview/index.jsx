import './index.scss'
import { Card, Tabs } from 'antd'
import Toolssider from '@/components/Toolssider'
import Rasterview from '@/components/Rasterview'

const Imageview = () => {
  return (
    <div className='imageview'>
      <Toolssider></Toolssider>
      <Rasterview></Rasterview>
    </div>
  )
}

export default Imageview
