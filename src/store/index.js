import { CounterStore } from './Counter.Store'
import { createContext, useContext } from 'react'

class RootStore {
  constructor() {
    this.counterStore = new CounterStore()
  }
}

const rootStore = new RootStore()

const context = createContext(rootStore)

const useStore = () => useContext(context)


export { useStore }
