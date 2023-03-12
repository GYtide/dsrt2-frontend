import './index.scss'
import { Card, Tabs } from 'antd'
import Toolssider from '@/components/Toolssider'
import Rasterview from '@/components/Rasterview'
import Filelist from '@/components/Filelist'
import Progressbar from '@/components/Progressbar'

const Imageview = () => {
  return (
    <div className="imageview">
      <Toolssider></Toolssider>
      <div className="rasterpanel">
        <div className="raster-view">
          <Rasterview></Rasterview>
        </div>

        <Progressbar></Progressbar>
      </div>
      <Filelist></Filelist>
    </div>
  )
}

export default Imageview
