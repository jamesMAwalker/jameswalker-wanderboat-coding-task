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

import { TRAVEL_VIEWS } from './layout-data'

const LayoutContext = createContext<{
  showTravelModal: boolean
  setShowTravelModal: Dispatch<SetStateAction<boolean>>
  travelView: TRAVEL_VIEWS.specific | TRAVEL_VIEWS.numDays
  setTravelView: Dispatch<
    SetStateAction<TRAVEL_VIEWS.specific | TRAVEL_VIEWS.numDays>
  >
} | null>(null)

export const useLayoutContext = () => {
  const context = useContext(LayoutContext)
  if (!context) {
    throw new Error(
      'useLayoutContext must be used within the LayoutContexProvider'
    )
  }

  return context
}

export const LayoutContextProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [showTravelModal, setShowTravelModal] = useState(false)
  const [travelView, setTravelView] = useState<
    TRAVEL_VIEWS.specific | TRAVEL_VIEWS.numDays
  >(TRAVEL_VIEWS.specific)

  const layoutContextValue = useMemo(
    () => ({
      travelView,
      setTravelView,
      showTravelModal,
      setShowTravelModal
    }),
    [travelView, setTravelView, showTravelModal, setShowTravelModal]
  )

  return (
    <LayoutContext.Provider value={{ ...layoutContextValue }}>
      {children}
    </LayoutContext.Provider>
  )
}
