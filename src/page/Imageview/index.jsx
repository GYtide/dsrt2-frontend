import './index.scss'
import { Card, Tabs } from 'antd'
import Toolssider from '@/components/Toolssider'
import Rasterview from '@/components/Rasterview'
import Filelist from '@/components/Filelist'

const Imageview = () => {
  return (
    <div className="imageview">
      <Toolssider></Toolssider>
      <div className="rasterpanel">
        <Rasterview></Rasterview>
      </div>
      <Filelist></Filelist>
    </div>
  )
}

export default Imageview
