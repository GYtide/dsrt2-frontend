
import { makeAutoObservable } from 'mobx'

class CounterStore {
  conut = 0
  list = [1, 2, 3, 4, 5 , 6]
  constructor() {
    makeAutoObservable(this)
  }


  get filterList () {
    return this.list.filter(item => item > 2)
  }

  addCountr = () => {
    this.conut++
  }
}

export { CounterStore }