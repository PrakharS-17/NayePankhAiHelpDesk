const ThemeToggle = ({
  darkMode,
  setDarkMode,
}) => {

  const toggleTheme = () => {

    setDarkMode(!darkMode)

  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
    >
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}

export default ThemeToggle

