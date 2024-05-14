import { useDatesContext } from '@/context/dates-context'

import './style.css'
import {
  MAX_TRAVEL_LENGTH,
  MIN_TRAVEL_LENGTH
} from '@/context/dates-data'

export const NumDaysSelector = () => {
  const { travelLength, setTravelLength } = useDatesContext()

  function handleIncrement() {
    setTravelLength((currentLength: number) => {
      if (currentLength >= MAX_TRAVEL_LENGTH) return currentLength

      return currentLength + 1
    })
  }

  function handleDecrement() {
    setTravelLength((currentLength: number) => {
      if (currentLength <= MIN_TRAVEL_LENGTH) return currentLength

      return currentLength - 1
    })
  }

  return (
    <div className='num-days-selector par-1 fade-in'>
      <span onClick={handleDecrement} className='control'>
        –
      </span>
      <span className='output'>{travelLength}</span>
      <span onClick={handleIncrement} className='control'>
        +
      </span>
    </div>
  )
}
