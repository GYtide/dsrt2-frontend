import { Radio, Space, Table, Tag } from 'antd'
const data = [
  {
    key: '1',
    name: '150',
    tags: ['10:00', '12:30'],
  },
  {
    key: '2',
    name: '300',
    tags: ['11:00', '12:30'],
  },
  {
    key: '3',
    name: '450',
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
    title: '可用时间',
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

const FreList = () => {
  return <Table columns={columns} dataSource={data} />
}

export default FreList
