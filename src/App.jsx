import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ThemeToggle from "./components/ThemeToggle"
import Home from "./pages/Home"
import Volunteer from "./pages/Volunteer"
import Internship from "./pages/Internship"
import Donate from "./pages/Donate"
import Contact from "./pages/Contact"
import AIHelpDesk from "./pages/AIHelpDesk"

function App() {
  const [darkMode, setDarkMode] =
  useState(false)
  useEffect(() => {

  const savedTheme =
    localStorage.getItem("theme")

  if (savedTheme === "dark") {

    setDarkMode(true)

    document.documentElement.classList.add(
      "dark"
    )

  }

}, [])
useEffect(() => {

  if (darkMode) {

    document.documentElement.classList.add(
      "dark"
    )

    localStorage.setItem(
      "theme",
      "dark"
    )

  } else {

    document.documentElement.classList.remove(
      "dark"
    )

    localStorage.setItem(
      "theme",
      "light"
    )

  }

}, [darkMode])
  return (
    <BrowserRouter>

      <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
        
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        />

        <main className="grow">
          <Routes>

            <Route path="/" element={<Home />} />

            <Route
              path="/volunteer"
              element={<Volunteer />}
            />

            <Route
              path="/internship"
              element={<Internship />}
            />

            <Route
              path="/donate"
              element={<Donate />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/ai-helpdesk"
              element={<AIHelpDesk />}
            />

          </Routes>
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App