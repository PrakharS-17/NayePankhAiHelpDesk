import InternshipForm from "../components/InternshipForm"

const Internship = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">

      {/* Hero */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Internship Opportunities
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Gain hands-on experience while contributing to
              impactful NGO initiatives and technology-driven
              community solutions.
            </p>

          </div>

        </div>

      </section>

      {/* Main Content */}
      <section className="px-6 pb-20">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Intro Card */}
            <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-900">

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Why Join Our Internship Program?
              </h2>

              <p className="mt-5 leading-8 text-gray-600 dark:text-gray-300">
                Our internship program is designed to help students
                and young professionals build practical experience
                while contributing to meaningful social initiatives.
              </p>

            </div>

            {/* Opportunity Cards */}
            <div className="grid gap-6 sm:grid-cols-2">

              <div className="rounded-3xl bg-blue-600 p-6 text-white">

                <h3 className="text-2xl font-bold">
                  Real Projects
                </h3>

                <p className="mt-3 leading-7 text-blue-100">
                  Work on impactful NGO and technology initiatives.
                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Skill Development
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  Improve communication, leadership, and technical skills.
                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Mentorship
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  Learn from experienced mentors and professionals.
                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm dark:bg-gray-900">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Flexible Learning
                </h3>

                <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
                  Remote and hybrid opportunities for students.
                </p>

              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <InternshipForm />

        </div>

      </section>

    </div>
  )
}

export default Internship