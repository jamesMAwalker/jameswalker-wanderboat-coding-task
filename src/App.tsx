import { CalendarContainer } from './components/calendar-container'
import { Providers } from './context/providers'

function App() {

  return (
    <Providers>
      <main className='LAYOUT layout'>
        <CalendarContainer />
      </main>
    </Providers>
  )
}

export default App
