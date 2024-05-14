import { DatePicker } from '../date-picker'
import { MONTHS, WEEKDAY_INITIALS } from './data'

import './style.css'

export const CalendarList = () => {
  return (
    <nav className='calendar-list fade-in'>
      <DayLabels />
      <div className='months-container'>
        {MONTHS.map((month) => (
          <DatePicker key={month.monthName} month={month} />
        ))}
      </div>
    </nav>
  )
}

const DayLabels = () => {
  return (
    <div className='day-labels'>
      {WEEKDAY_INITIALS.map((item, idx) => (
        <div key={idx} className='day-label'>
          {item}
        </div>
      ))}
    </div>
  )
}
