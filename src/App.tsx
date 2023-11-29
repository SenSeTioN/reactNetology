import { ReactNode } from 'react'
import Calendar from './components/calendar/components/Calendar'

const App = (): ReactNode => {
  const now = new Date(2017, 2, 8)

  return <Calendar date={now} />
}

export default App
