import FreList from '@/components/FreList'
import OverView from '@/components/OverView'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { http } from '@/utils'
const Quicklook = () => {
  const [searchParams, setSearchParams] = useSearchParams() //获取路由的搜索参数
  // 获取预览图
  useEffect(() => {
    const loadQuicklook = async () => {
      const res = await http.get(
        `/overview/quicklook/?date=${searchParams.get(
          'date'
        )}&start=${searchParams.get('start')}&end=${searchParams.get('end')}`
      )
    }
    loadQuicklook()
  }, [])

  return (
    <>
      <FreList />
      <OverView />
    </>
  )
}

export default Quicklook
