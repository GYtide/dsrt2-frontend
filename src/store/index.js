import { CounterStore } from './Counter.Store'
import { createContext, useContext } from 'react'
import { TimeStore } from './Time.Store'
import { CurrentFits } from './FitsFile.Store'
import { ImageFileList } from './ImageFileList.Store'

class RootStore {
  constructor() {
    this.counterStore = new CounterStore()
    this.timeStore = new TimeStore()
    this.currentFits = new CurrentFits()
    this.imageFileList = new ImageFileList()
  }
}

const rootStore = new RootStore()

const context = createContext(rootStore)

const useStore = () => useContext(context)


export { useStore }
