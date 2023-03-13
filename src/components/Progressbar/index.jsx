import { useState } from 'react'
import { Slider, Switch } from 'antd'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
const Progressbar = () => {
  const { currentImageFits } = useStore()
  console.log(currentImageFits)
  const [disabled, setDisabled] = useState(false)
  const onChange = (checked) => {
    setDisabled(checked)
  }
  return (
    <>
      <Slider
        style={{ flex: 1 }}
        min={1}
        max={currentImageFits.NAXIS2}
        defaultValue={0}
        disabled={disabled}
      />
    </>
  )
}
export default observer(Progressbar)
