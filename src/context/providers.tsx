import { ReactNode } from 'react'

import { DatesContextProvider } from './dates-context'
import { LayoutContextProvider } from './layout-context'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutContextProvider>
      <DatesContextProvider>{children}</DatesContextProvider>
    </LayoutContextProvider>
  )
}
