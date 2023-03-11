import { Card, Empty } from 'antd'
import './index.scss'

const OverView = () => {
  return (
    <Card title={'数据预览图'} className="qucikcard">
      <Empty imageStyle={{ height: 200 }} />
    </Card>
  )
}

export default OverView
