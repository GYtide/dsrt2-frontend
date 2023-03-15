import { useState } from 'react'
import { Slider, Switch } from 'antd'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'
const Progressbar = ({ currentFits }) => {
  const [disabled, setDisabled] = useState(false)

  return (
    <Slider
      style={{ flex: 1 }}
      min={1}
      max={currentFits.NAXIS2}
      defaultValue={1}
      disabled={disabled}
      onChange={(value) => {
        currentFits.updateFrame(value)
      }}
    />
  )
}
export default observer(Progressbar)
