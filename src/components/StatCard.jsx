const StatCard = ({ number, title, description }) => {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">

      <h3 className="text-4xl font-extrabold text-blue-600">
        {number}
      </h3>

      <h4 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h4>

      <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
        {description}
      </p>

    </div>
  )
}

export default StatCard