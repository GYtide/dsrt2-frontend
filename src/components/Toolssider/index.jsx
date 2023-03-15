import { Card, Dropdown, Button, Space } from 'antd'
import './index.scss'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
const items = [
  {
    key: '0',
    label: 'gray',
  },
  {
    key: '1',
    label: 'hot',
  },
  {
    key: '2',
    label: 'jet',
  },
]
const Toolssider = () => {
  const { currentImageFits } = useStore()
  const onClick = ({ key }) => {
    // currentImageFits.renderConfig.updateColorMap(key)
    currentImageFits.frame.updateColorMap(key)
  }
  return (
    <div className="toolssider">
      {}
      <Card title="渲染设置">
        <Space>
          {'色标：'}
          <Dropdown menu={{ items, onClick }} placement="bottomLeft">
            <Button>{currentImageFits.frame.colorMap}</Button>
          </Dropdown>
        </Space>
      </Card>
    </div>
  )
}

export default observer(Toolssider)
