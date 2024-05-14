import { useLayoutContext } from '@/context/layout-context'

import './style.css'
import { useDatesContext } from '@/context/dates-context'

export const TravelModal = () => {
  const { setShowTravelModal } = useLayoutContext()
  const { dateRange } = useDatesContext()

  const showRange = dateRange.start !== null

  return (
    <div className='travel-modal fade-in-up'>
      <div
        className='close'
        onClick={() => setShowTravelModal(false)}
      >
        &times;
      </div>
      <h2 className='display-1'>Congrats!</h2>
      <div className='selected-dates'>
        {showRange ? <DateRangeDisplay /> : <NumDaysDisplay />}
      </div>
      <p>
        You've selected your travel dates! Next, we'll send you travel
        options based on your input.
      </p>
    </div>
  )
}

const DateRangeDisplay = () => {
  const {
    dateRange: { start, end }
  } = useDatesContext()

  const [startMonth, startDay] = [
    start?.toString()[0],
    start?.toString().slice(1)
  ]
  const [endMonth, endDay] = [
    end?.toString()[0],
    end?.toString().slice(1)
  ]

  return (
    <div className='range-display par-1'>
      <span>Your travel dates</span>
      <div className='range-info'>
        <div className='range-window'>
          <span>
            {startMonth} • {startDay} → {endMonth} • {endDay}
          </span>
        </div>
      </div>
    </div>
  )
}

const NumDaysDisplay = () => {
  const { travelLength } = useDatesContext()
  return (
    <div className='travel-days-display'>
      <span className='par-1'>You're traveling for</span>
      <div className='travel-window'>
        <span>{travelLength}</span>
      </div>
      <span className='par-1'>Days</span>
    </div>
  )
}
