import React from 'react'
import { Outlet, Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import DetailPage from "./pages/DetailPage"
import SearchPage from "./pages/SearchPage"
import MainPage from "./pages/MainPage"

const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />

      <Footer />
    </div>
  )
}
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}></Route>
          <Route index element={<MainPage />} />
          <Route path=":moveId" element={<DetailPage />} />
          <Route path="search" element={<searchPage/>}  />
      </Routes>
    </div>
  );
}

export default App