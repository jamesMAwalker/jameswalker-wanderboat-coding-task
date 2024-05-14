import { useDatesContext } from '@/context/dates-context'
import { MAX_DATE_RANGE } from '@/context/dates-data'

import { ICalendarMonth, MONTHS } from '../calendar-list/data'
import {
  dateBuilder,
  getRemainingRangeForFollowingMonth,
  getRemainingRangeForPreviousMonth
} from './helpers'

import './style.css'

export const DatePicker = ({ month }: { month: ICalendarMonth }) => {
  const { dateRange, setDateRange } = useDatesContext()

  function handleSetDateRange(monthDay: number) {
    const { start, end } = dateRange

    // if start has not been set, set it.
    if (start === null) {
      setDateRange((currentRange) => ({ ...currentRange, start: monthDay }))
    }

    // if start has been set
    if (start) {
      // check if monthDay is greater or less than start
      if (monthDay >= start) {
        // if greater, set monthDay to end
        setDateRange((currentRange) => ({ ...currentRange, end: monthDay }))
      } else {
        // if less, set start to end and monthDay to start.
        setDateRange((currentRange) => ({
          start: monthDay,
          end: currentRange.start
        }))
      }
    }
    if (start && end) {
      setDateRange({ start: null, end: null })
    }
  }

  return (
    <div className='date-picker'>
      <h3 className='month'>{month.monthName}</h3>
      {month.weeks.map((week) => {
        return (
          <div className='week' key={week[0]}>
            {week.map((day, idx) => {
              // > Null Calendar Button State < //

              if (day === null) {
                return (
                  <div className='empty-day' key={`${month.monthName}${idx}`} />
                )
              }

              const isSunday = idx === 0

              const date = dateBuilder(month.monthNumber, day)

              const { start, end } = dateRange

              // > Standard Calendar Button State < //

              if (start === null) {
                return (
                  <button
                    className='day par-1'
                    key={day}
                    onClick={() => handleSetDateRange(date)}
                  >
                    {day}
                  </button>
                )
              }

              // > Altered Calendar Button States < //

              let isInRange = false
              let isOutOfRange = false

              if (end) isInRange = date > start && date < end

              // * if month is the same as dateRange.start *
              const isSameMonth =
                month.monthNumber === Number(start.toString()[0])

              if (isSameMonth) {
                const previousDatesRange = start - MAX_DATE_RANGE
                const subsequentDatesRange = start + MAX_DATE_RANGE

                isOutOfRange =
                  date < previousDatesRange || date > subsequentDatesRange
              }

              // * if month is different from dateRange.start *

              const dateRangeStartMonth = MONTHS.find(
                (m: ICalendarMonth) =>
                  m.monthNumber === Number(start.toString()[0])
              )!
              const isFollowingMonth =
                dateRangeStartMonth?.monthNumber === month.monthNumber - 1

              const isPreviousMonth =
                dateRangeStartMonth?.monthNumber === month.monthNumber + 1

              // if month is previous to dateRange.start
              if (!isSameMonth && isFollowingMonth) {
                const remainingRange = getRemainingRangeForFollowingMonth(
                  start,
                  dateRangeStartMonth
                )

                isOutOfRange = !(day <= remainingRange + 1)
              }

              // if month is subsequent to dateRange.start
              if (!isSameMonth && isPreviousMonth) {
                const remainingRange =
                  getRemainingRangeForPreviousMonth(
                    start,
                    dateRangeStartMonth
                  )

                const finalDay = month.weeks[4].findLast(
                  (day: number | null) => day !== null
                )!

                isOutOfRange = !(day > (finalDay - remainingRange))
              }

              const isSelected = date === start || date === end

              return (
                <button
                  className={`day par-1 
                  ${isSunday && 'emphasized'}
                  ${isSelected && 'selected'}
                  ${isInRange && 'in-range'}
                  `}
                  disabled={isOutOfRange}
                  key={day}
                  onClick={() => handleSetDateRange(date)}
                >
                  {day}
                </button>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}
