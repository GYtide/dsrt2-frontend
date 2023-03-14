import { Card, Dropdown, Button } from 'antd'
import './index.scss'
import { useStore } from '@/store'
const items = [
  {
    key: '1',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
]
const Toolssider = () => {
  const { renderConfig } = useStore()
  console.log(renderConfig)
  return (
    <div className="toolssider">
      <Card title="渲染设置">
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomLeft">
          <Button></Button>
        </Dropdown>
      </Card>
    </div>
  )
}

export default Toolssider
