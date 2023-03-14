import { useState } from 'react'
import { Slider, Switch } from 'antd'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
const Progressbar = () => {
  const { currentImageFits } = useStore()
  const [disabled, setDisabled] = useState(false)

  
  return (
    <Slider
      style={{ flex: 1 }}
      min={1}
      max={currentImageFits.NAXIS2}
      defaultValue={1}
      disabled={disabled}
      onChange={(value) => {
        currentImageFits.updataFrame(value)
      }}
    />
  )
}
export default observer(Progressbar)
