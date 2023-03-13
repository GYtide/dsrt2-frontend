import './index.scss'
import { Card, Tabs } from 'antd'
import Toolssider from '@/components/Toolssider'
import Rasterview from '@/components/Rasterview'
import Filelist from '@/components/Filelist'
import Progressbar from '@/components/Progressbar'
import ColorBar from '@/components/ColorBar'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'

const Imageview = () => {
  const { imageFileList } = useStore()
  return (
    <div className="imageview">
      <Toolssider></Toolssider>
      <div className="rasterpanel">
        <div className="raster-view">
          <Rasterview></Rasterview>
          <ColorBar></ColorBar>
        </div>

        <Progressbar></Progressbar>
      </div>
      <Filelist data={imageFileList.fileListdata}></Filelist>
    </div>
  )
}

export default observer(Imageview)
