
import { makeAutoObservable } from 'mobx'

import dayjs from 'dayjs'
class TimeStore {

  date = dayjs()
  start = dayjs()
  end = dayjs()

  constructor() {
    makeAutoObservable(this)
  }

  setOriDate = (newdate) => {
    this.Date = newdate
  }

  setDate = (newdate) => {
    this.date = newdate
  }

  setStart = (newdate) => {
    this.start = newdate
  }

  setEnd = (newdate) => {
    this.end = newdate
  }

  getEnd = () => this.end.format("HH:mm")

  getStart = () => this.start.format("HH:mm")

  getDate = () => this.start.format("YYYY-MM-DD")

}

export { TimeStore }