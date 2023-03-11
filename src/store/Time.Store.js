
import { makeAutoObservable } from 'mobx'

import dayjs from 'dayjs'
class TimeStore {

  date = dayjs().format("YYYY-MM-DD")
  start = dayjs().format("HH:mm")
  end = dayjs().format("HH:mm")

  constructor() {
    makeAutoObservable(this)
  }

  setDate = (newdate) => {
    this.date = newdate.format("YYYY-MM-DD")
  }

  setStart = (newdate) => {
    this.start = newdate.format("HH:mm")
  }

  setEnd = (newdate) => {
    this.end = newdate.format("HH:mm")
  }

}

export { TimeStore }