import { Route, Routes } from "react-router"
import { AppContextProvider } from "./context/contextProvider"
import "./App.scss"
import React from "react"
import { Burger, Footer, Header } from "./components"
import { Main, Resonators } from "./pages"

const HeaderMemo = React.memo(Header)
const FooterMemo = React.memo(Footer)
const MainMemo = React.memo(Main)
const ResonatorsMemo = React.memo(Resonators)

export default function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <>
          <HeaderMemo />
          <Burger />
          <Routes>
            <Route path="/" element={<MainMemo />} />
            <Route path="/resonators" element={<ResonatorsMemo />} />
          </Routes>
          <FooterMemo />
        </>
      </AppContextProvider>
    </div>
  )
}
