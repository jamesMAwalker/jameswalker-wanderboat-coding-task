'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useMemo,
  useState
} from 'react'

const DatesContext = createContext<{
  travelLength: number
  setTravelLength: Dispatch<SetStateAction<number>>
  dateRange: Record<string, number | null>
  setDateRange: Dispatch<
    SetStateAction<Record<string, number | null>>
  >
} | null>(null)

export const useDatesContext = () => {
  const context = useContext(DatesContext)
  if (!context) {
    throw new Error(
      'useDatesContext must be used within the DatesContexProvider'
    )
  }

  return context
}

export const DatesContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [travelLength, setTravelLength] = useState(3)
  const [dateRange, setDateRange] = useState<
    Record<string, number | null>
  >({
    start: null,
    end: null
  })

  const datesContextValue = useMemo(
    () => ({
      dateRange,
      setDateRange,
      travelLength,
      setTravelLength
    }),
    [dateRange, setDateRange, travelLength, setTravelLength]
  )

  return (
    <DatesContext.Provider value={{ ...datesContextValue }}>
      {children}
    </DatesContext.Provider>
  )
}
