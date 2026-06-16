const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        
        <div>
          <h2 className="text-xl font-bold text-blue-700 dark:text-white">
            NayePankh
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Empowering communities through technology and support.
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 NayePankh. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer