import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 py-20 lg:flex-row">

        {/* Left Content */}
        <div className="flex-1">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Empowering Communities Through Technology
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-6xl">
            Building a Better Future with{" "}
            <span className="text-blue-600">
              NayePankh
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Join our mission to support education, volunteering,
            internships, and social impact initiatives through a
            modern AI-powered NGO support platform.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/volunteer"
              className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-200"
            >
              Become a Volunteer
            </Link>

            <Link
              to="/ai-helpdesk"
              className="rounded-xl border border-gray-300 bg-white px-7 py-4 font-semibold text-gray-800 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
            >
              Talk to AI Help Desk
            </Link>

          </div>

        </div>

        {/* Right Content */}
        <div className="flex flex-1 justify-center">

          <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/70 p-8 shadow-2xl backdrop-blur-lg dark:border-gray-800 dark:bg-gray-900/80">

            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Impact Overview
              </h3>

              <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                Live Impact
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 space-y-6">

              <div className="rounded-2xl bg-blue-50 p-5 dark:bg-gray-800">
                <h4 className="text-4xl font-bold text-blue-600">
                  10K+
                </h4>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Students Supported
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-2xl bg-gray-100 p-5 dark:bg-gray-800">
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
                    500+
                  </h4>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Volunteers
                  </p>
                </div>

                <div className="rounded-2xl bg-gray-100 p-5 dark:bg-gray-800">
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white">
                    120+
                  </h4>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    Interns
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero