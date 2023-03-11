import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { observer } from 'mobx-react-lite'
import { useStore } from './store/index'

import { Router, Route, Routes, BrowserRouter } from 'react-router-dom'

import GeekLayout from './page/Layout'
import Home from './page/Home'
import Quicklook from './page/Quicklook'
function App() {
  const { counterStore } = useStore()
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<GeekLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/quicklook" element={<Quicklook></Quicklook>}></Route>
            <Route path="/fileview" element={'文件查看'}></Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default observer(App)
