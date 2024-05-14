import { MAX_DATE_RANGE } from "@/context/dates-data";
import { ICalendarMonth } from "../calendar-list/data";

export const dateBuilder = (month: number, day: number) => {

  return Number(
    `${month}${day.toString().length === 1 ? 0 : ''
    }${day}`
  )
}

export function getRemainingRangeForFollowingMonth(startDayNumber: number, dateRangeStartMonth: ICalendarMonth) {
  const finalWeek: number[] = dateRangeStartMonth.weeks[4].filter(day => day !== null).map(day => Number(day))

  const finalDay = Number(`${dateRangeStartMonth.monthNumber}${Math.max(...finalWeek)}`)
  const rangeConsumed = finalDay - startDayNumber + 1

  return MAX_DATE_RANGE - rangeConsumed
}

export function getRemainingRangeForPreviousMonth(startDayNumber: number, dateRangeStartMonth: ICalendarMonth) {
  const firstWeek: number[] = dateRangeStartMonth.weeks[0].filter(day => day !== null).map(day => Number(day))

  const firstDay = Number(`${dateRangeStartMonth.monthNumber}0${Math.min(...firstWeek)}`)

  console.log("🚀 ~ getRemainingRangeForPreviousMonth ~ firstDay:", firstDay)
  return MAX_DATE_RANGE - (startDayNumber - firstDay)
}
