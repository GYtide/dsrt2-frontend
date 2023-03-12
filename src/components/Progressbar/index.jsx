import { useState } from 'react'
import { Slider, Switch } from 'antd'
const Progressbar = () => {
  const [disabled, setDisabled] = useState(false)
  const onChange = (checked) => {
    setDisabled(checked)
  }
  return (
    <>
      <Slider style={{ flex: 1 }} defaultValue={30} disabled={disabled} />
    </>
  )
}
export default Progressbar
