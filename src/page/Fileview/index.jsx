import FreList from '@/components/FreList'
import OverView from '@/components/OverView'

import { useSearchParams } from 'react-router-dom'
const Quicklook = () => {
  let [searchParams, setSearchParams] = useSearchParams() //获取路由的搜索参数
  console.log(searchParams)
  return (
    <>
      <FreList />
      <OverView />
    </>
  )
}

export default Quicklook
