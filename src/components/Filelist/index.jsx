import { Radio, Space, Card, Table, Tag } from 'antd'
import './index.scss'
// const data = [
// {
//   key: '1',
//   name: '150 Mhz',
//   tags: ['10:00', '12:30'],
// },
// {
//   key: '2',
//   name: '200.7 Mhz',
//   tags: ['11:00', '12:30'],
// }
// ]

const Filelist = ({ data, columns }) => {
  return (
    <div className="filelist">
      <Card title="文件列表">
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  )
}

export default Filelist
