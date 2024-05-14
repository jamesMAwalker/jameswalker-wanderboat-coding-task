import { useLayoutContext } from '@/context/layout-context'
import { TRAVEL_VIEWS } from '@/context/layout-data'

import { ApplyButton } from '../apply-button'
import { CalendarList } from '../calendar-list'
import { CalendarTabs } from '../calendar-tabs'
import { TravelForToggle } from '../travel-for-toggle'
import { TravelModal } from '../travel-modal'

import './style.css'

export const CalendarContainer = () => {
  const { travelView, showTravelModal, setShowTravelModal } =
    useLayoutContext()

  return (
    <div className='container'>
      <div className='calendar-body'>
        {showTravelModal && <TravelModal />}
        <CalendarTabs />
        <div className='calendar-content'>
          <TravelForToggle />
          {travelView === TRAVEL_VIEWS.specific && <CalendarList />}
        </div>
        <ApplyButton action={() => setShowTravelModal(true)} />
      </div>
    </div>
  )
}
