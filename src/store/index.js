import { CounterStore } from './Counter.Store'
import { createContext, useContext } from 'react'
import { TimeStore } from './Time.Store'
import { CurrentFits } from './FitsFile.Store'

class RootStore {
  constructor() {
    this.counterStore = new CounterStore()
    this.timeStore = new TimeStore()
    this.currentFits = new CurrentFits()
  }
}

const rootStore = new RootStore()

const context = createContext(rootStore)

const useStore = () => useContext(context)


export { useStore }
