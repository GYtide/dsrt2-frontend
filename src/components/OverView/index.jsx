import { Card, Empty } from 'antd'
import './index.scss'

const OverView = ({ data }) => {
  return (
    <Card title={'数据预览图'} className="qucikcard">
      {data ? (
        <img src={`data:image/png;base64,${data}`}></img>
      ) : (
        <Empty imageStyle={{ height: 200 }} />
      )}
    </Card>
  )
}

export default OverView
