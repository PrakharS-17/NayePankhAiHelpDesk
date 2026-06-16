const ServiceCard = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">

      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition group-hover:scale-110 dark:bg-blue-900/30">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
        {description}
      </p>

    </div>
  )
}

export default ServiceCard