import './index.scss'
import { Card, Tabs, Tag } from 'antd'
import Toolssider from '@/components/Toolssider'
import Rasterview from '@/components/Rasterview'
import Filelist from '@/components/Filelist'
import Progressbar from '@/components/Progressbar'
import ColorBar from '@/components/ColorBar'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'

const Spectrumview = () => {
  const { imageFileList } = useStore()
  const { currentImageFits } = useStore()

  const columns = [
    {
      title: '文件名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <a
          onClick={() => {
            currentImageFits.filename = text
            currentImageFits.openFile()
          }}
          style={{ whiteSpace: 'pre-wrap' }}>
          {text}
        </a>
      ),
    },
    {
      title: '时间范围',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <span>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </span>
      ),
    },
  ]
  return (
    <div className="specview">
      <Toolssider></Toolssider>
      <div className="rasterpanel">
        <div className="raster-spec-view">
          <Rasterview></Rasterview>
          <ColorBar></ColorBar>
        </div>
        <Progressbar></Progressbar>
      </div>
    </div>
  )
}

export default observer(Spectrumview)
