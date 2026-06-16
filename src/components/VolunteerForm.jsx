import { useState } from "react"

const VolunteerForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  })

  const handleChange = (event) => {

    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    console.log(formData)

    alert("Volunteer registration submitted!")
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Volunteer Registration
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Fill out the form below to become part of our mission.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >

        {/* Full Name */}
        <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Phone Number
          </label>

          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Interest */}
        <div>
          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Area of Interest
          </label>

          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <option value="">
              Select an interest
            </option>

            <option value="Education">
              Education Support
            </option>

            <option value="Awareness">
              Community Awareness
            </option>

            <option value="Technology">
              Technology Assistance
            </option>

            <option value="Fundraising">
              Fundraising
            </option>

          </select>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Submit Registration
        </button>

      </form>

    </div>
  )
}

export default VolunteerForm