import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { observer } from 'mobx-react-lite'
import { useStore } from './store/index'

import { Router, Route, Routes, BrowserRouter } from 'react-router-dom'

import GeekLayout from './page/Layout'
function App() {
  const { counterStore } = useStore()
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<GeekLayout />}>
            <Route index element={'asdasd'}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default observer(App)
