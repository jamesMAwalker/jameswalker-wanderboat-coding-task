import { useLayoutContext } from '@/context/layout-context'
import { TRAVEL_VIEWS } from '@/context/layout-data'

import { NumDaysSelector } from '../num-days-selector'

import './style.css'

export const TravelForToggle = () => {
  const { travelView, setTravelView } = useLayoutContext()

  function handleToggleTravelView() {
    setTravelView((currentView) => {
      return currentView === TRAVEL_VIEWS.specific
        ? TRAVEL_VIEWS.numDays
        : TRAVEL_VIEWS.specific
    })
  }

  return (
    <nav
      className={`travel-toggle ${
        travelView === TRAVEL_VIEWS.numDays && 'displace-down'
      }`}
    >
      <h2 className='head-1'>Travel For</h2>
      {travelView === TRAVEL_VIEWS.numDays && <NumDaysSelector />}
      <div className='toggle-container'>
        <span className='par-1'>Specific Date</span>
        <div
          onClick={handleToggleTravelView}
          className={`toggle ${
            travelView === TRAVEL_VIEWS.numDays && 'off'
          }`}
        >
          <div className='toggle-switch' />
        </div>
      </div>
    </nav>
  )
}
