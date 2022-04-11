import {  ReactNode } from "react"
import { useMediaQuery } from "react-responsive"

interface Props{
    children:  ReactNode | null
}


export const useTabletAndBelowMediaQuery  = () =>
  useMediaQuery({ query: "(max-width: 705px)" })

export const useDesktopMediaQuery= () =>
  useMediaQuery({ query: "(min-width: 706px)" })

export const Desktop = ({children}:Props ) => {
  const isDesktop = useDesktopMediaQuery()

  return isDesktop ? children : null
}

export const TabletAndBelow = ({children}:Props) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery()

  return isTabletAndBelow ? children : null
}

