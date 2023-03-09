import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { observer } from 'mobx-react-lite'
import { useStore } from './store/index'

function App() {
  const { counterStore } = useStore()
  console.log(counterStore)
  return <div className="App"></div>
}

export default observer(App)
