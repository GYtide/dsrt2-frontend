import FreList from '@/components/FreList'
import OverView from '@/components/OverView'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'
import { http } from '@/utils'

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Quicklook = () => {
  const [searchParams, setSearchParams] = useSearchParams() //获取路由的搜索参数
  const [image, setimage] = useState(null)
  const [isLoading, setisLoading] = useState(true)
  // 获取预览图
  useEffect(() => {
    const loadQuicklook = async () => {
      setisLoading(true)
      const res = await http.get(
        `/overview/quicklook/?date=${searchParams.get(
          'date'
        )}&start=${searchParams.get('start')}&end=${searchParams.get('end')}`
      )
      setimage(res[0].res)
      setisLoading(false)
    }

    loadQuicklook()
  }, [image, searchParams])

  return (
    <>
      {isLoading ? (
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      ) : (
        <>
          <FreList />
          <OverView data={image} />
        </>
      )}
    </>
  )
}

export default Quicklook