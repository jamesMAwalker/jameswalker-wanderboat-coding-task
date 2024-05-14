import './style.css'

export const CalendarTabs = () => {
  return (
    <nav className='tab-selector'>
      <button className='button-1 tab-selector-item'>Preferences</button>
      <button className='button-1 tab-selector-item'>People</button>
      <button className='button-1 tab-selector-item active'>Days</button>
    </nav>
  )
}
