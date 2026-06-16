import ContactForm from "../components/ContactForm"

const Contact = () => {

  return (
    <div className="bg-gray-50 dark:bg-gray-950">

      {/* Hero Section */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Contact Us
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Have questions about volunteering, internships,
              donations, or collaborations? Reach out to the
              NayePankh team anytime.
            </p>

          </div>

        </div>

      </section>

      {/* Main Content */}
      <section className="px-6 pb-20">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Contact Info */}
            <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-900">

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Get in Touch
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                We are always open to partnerships, collaborations,
                volunteering opportunities, and community initiatives.
              </p>

            </div>

            {/* Info Cards */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div className="rounded-3xl bg-blue-600 p-6 text-white">

                <h3 className="text-2xl font-bold">
                  Email
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  support@nayepankh.org
                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Phone
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  +91 9999999999
                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Location
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  Noida, India
                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Social Media
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  LinkedIn, Instagram, Twitter
                </p>

              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <ContactForm />

        </div>

      </section>

    </div>
  )
}

export default Contact

