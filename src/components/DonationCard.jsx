const DonationCard = ({
  amount,
  title,
  description,
}) => {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-gray-800 dark:bg-gray-900">

      {/* Amount */}
      <div className="inline-block rounded-full bg-blue-100 px-5 py-2 text-lg font-bold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
        {amount}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
        {description}
      </p>

      {/* CTA */}
      <button className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
        Donate Now
      </button>

    </div>
  )
}

export default DonationCard