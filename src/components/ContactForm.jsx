import { useState } from "react"
import toast from "react-hot-toast"

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [errors, setErrors] =
  useState({})

  const handleChange = (event) => {

    const { name, value } = event.target

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }
  const validateForm = () =>
  {
    const newErrors = {}

  if (!formData.name.trim()) {
    newErrors.name =
      "Name is required"
  }

  if (!formData.email.trim()) {

    newErrors.email =
      "Email is required"

  } else if (
    !/\S+@\S+\.\S+/.test(formData.email)
  ) {

    newErrors.email =
      "Invalid email address"

  }

  if (!formData.message.trim()) {
    newErrors.message =
      "Message is required"
  }

  setErrors(newErrors)

  return Object.keys(newErrors).length === 0
}


const handleSubmit = (event) => {

  event.preventDefault()

  const isValid =
    validateForm()

  if (!isValid) {
    return
  }

  toast.success(
    "Message sent successfully!"
  )

  setFormData({
    name: "",
    email: "",
    message: "",
  })

  setErrors({})
}

 

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">

      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Send Us a Message
      </h2>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        We’d love to hear from you. Reach out for volunteering,
        internships, donations, or collaboration opportunities.
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
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-red-500">
                {errors.name}
              </p>)}
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
          {errors.email && (
            <p className="mt-2 text-sm text-red-500">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message */}
        <div>

          <label className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>

          <textarea
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
          {errors.message && (
            <p className="mt-2 text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Send Message
        </button>

      </form>

    </div>
  )
}

export default ContactForm