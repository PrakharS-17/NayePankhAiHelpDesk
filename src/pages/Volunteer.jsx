import VolunteerForm from "../components/VolunteerForm"

const Volunteer = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">

      {/* Hero Section */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Become a Volunteer
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Join passionate individuals working together
              to empower communities through education,
              awareness campaigns, and social impact initiatives.
            </p>

          </div>

        </div>

      </section>

      {/* Content Section */}
      <section className="px-6 pb-20">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div className="space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-900">

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Why Volunteer With Us?
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                At NayePankh, volunteers play a key role in
                supporting educational drives, community outreach,
                digital literacy programs, and awareness campaigns.
              </p>

            </div>

            {/* Benefits */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div className="rounded-3xl bg-blue-600 p-6 text-white">
                <h3 className="text-2xl font-bold">
                  Real Impact
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  Help create positive change in communities.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Gain Experience
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  Build leadership and teamwork skills.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Networking
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  Connect with passionate changemakers.
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Flexible Roles
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  Participate online or offline based on availability.
                </p>
              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <VolunteerForm />

        </div>

      </section>

    </div>
  )
}

export default Volunteer