import { useState } from "react"
import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
  <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/90">

    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

      {/* Logo */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600"
      >
        NayePankh
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden items-center gap-8 md:flex">

        <Link
          to="/"
          className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200"
        >
          Home
        </Link>

        <Link
          to="/volunteer"
          className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200"
        >
          Volunteer
        </Link>

        <Link
          to="/internship"
          className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200"
        >
          Internship
        </Link>

        <Link
          to="/donate"
          className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200"
        >
          Donate
        </Link>

        <Link
          to="/contact"
          className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200"
        >
          Contact
        </Link>

        <Link
          to="/ai-helpdesk"
          className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          AI Help Desk
        </Link>

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

      </div>

      {/* Mobile Buttons */}
      <div className="flex items-center gap-3 md:hidden">

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="text-3xl text-gray-800 dark:text-white"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

    </nav>

    {/* Mobile Menu */}
    {menuOpen && (
      <div className="border-t border-gray-200 bg-white px-6 py-6 dark:border-gray-800 dark:bg-gray-900 md:hidden">

        <div className="flex flex-col gap-5">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200"
          >
            Home
          </Link>

          <Link
            to="/volunteer"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200"
          >
            Volunteer
          </Link>

          <Link
            to="/internship"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200"
          >
            Internship
          </Link>

          <Link
            to="/donate"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200"
          >
            Donate
          </Link>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 transition hover:text-blue-600 dark:text-gray-200"
          >
            Contact
          </Link>

          <Link
            to="/ai-helpdesk"
            onClick={() => setMenuOpen(false)}
            className="rounded-xl bg-blue-600 px-4 py-3 text-center font-medium text-white transition hover:bg-blue-700"
          >
            AI Help Desk
          </Link>

        </div>

      </div>
    )}

  </header>
)
}

export default Navbar