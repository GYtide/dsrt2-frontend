import { Radio, Space, Card, Table, Tag } from 'antd'
const data = [
  {
    key: '1',
    name: '150 Mhz',
    tags: ['10:00', '12:30'],
  },
  {
    key: '2',
    name: '200.7 Mhz',
    tags: ['11:00', '12:30'],
  },
  {
    key: '3',
    name: '233.11 Mhz',
    tags: ['09:00', '12:30'],
  },
  {
    key: '4',
    name: '300.12 Mhz',
    tags: ['09:00', '12:30'],
  },
  {
    key: '5',
    name: '450 Mhz',
    tags: ['09:00', '12:30'],
  },
]
const columns = [
  {
    title: '频率',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '时间',
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

const Filelist = () => {
  return (
    <div className="filelist">
      <Card title="文件列表">
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  )
}

export default Filelist
