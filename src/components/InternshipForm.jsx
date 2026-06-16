import { useState } from "react"

const InternshipForm = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    college: "",
    role: "",
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

    alert("Internship application submitted!")
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Internship Application
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Apply for internship opportunities at NayePankh.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >

        {/* Name */}
        <div>

          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Full Name
          </label>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
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

        {/* College */}
        <div>

          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            College / University
          </label>

          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
            placeholder="Enter your college name"
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

        </div>

        {/* Role */}
        <div>

          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Preferred Role
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >

            <option value="">
              Select a role
            </option>

            <option value="Frontend">
              Frontend Developer
            </option>

            <option value="Social Media">
              Social Media Manager
            </option>

            <option value="Content Writer">
              Content Writer
            </option>

            <option value="Community Manager">
              Community Manager
            </option>

          </select>

        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Apply for Internship
        </button>

      </form>

    </div>
  )
}

export default InternshipForm