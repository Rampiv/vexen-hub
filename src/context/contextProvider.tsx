import { createContext, useState } from "react"

interface AppContextProps {
  isMenuOpen: boolean
  toggleMenu: (isMenuOpen: boolean) => void
}

type Props = {
  children?: React.ReactElement
}

export const AppContext = createContext<AppContextProps>({
  isMenuOpen: false,
  toggleMenu: () => {},
})

export const AppContextProvider = ({ children }: Props) => {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
