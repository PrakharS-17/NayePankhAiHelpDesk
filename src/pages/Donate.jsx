import DonationCard from "../components/DonationCard"

const Donate = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-950">

      {/* Hero Section */}
      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <h1 className="text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Support Our Mission
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Your contribution helps us provide education,
              community support, awareness campaigns, and
              technology-driven solutions for underserved communities.
            </p>

          </div>

        </div>

      </section>

      {/* Donation Cards */}
      <section className="px-6 pb-20">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="max-w-3xl">

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Make a Meaningful Contribution
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Every donation directly contributes toward impactful
              community programs and educational initiatives.
            </p>

          </div>

          {/* Cards Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <DonationCard
              amount="₹500"
              title="Educational Support"
              description="Provide notebooks, study materials, and digital learning resources to students."
            />

            <DonationCard
              amount="₹1500"
              title="Community Awareness"
              description="Support awareness campaigns focused on education, hygiene, and digital literacy."
            />

            <DonationCard
              amount="₹3000"
              title="Technology Access"
              description="Help build access to digital tools and technology training for communities."
            />

          </div>

        </div>

      </section>

      {/* Impact Section */}
      <section className="bg-white px-6 py-20 dark:bg-gray-900">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          {/* Left */}
          <div>

            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Transparency & Impact
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              We believe in maintaining complete transparency
              regarding how contributions are used. Every donation
              supports real community initiatives and measurable impact.
            </p>

            <div className="mt-10 space-y-6">

              <div className="rounded-2xl bg-gray-100 p-6 dark:bg-gray-800">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  10,000+
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Students Supported Through Educational Programs
                </p>

              </div>

              <div className="rounded-2xl bg-gray-100 p-6 dark:bg-gray-800">

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  50+
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Community Outreach Campaigns Organized
                </p>

              </div>

            </div>

          </div>

          {/* Right */}
          <div className="rounded-3xl bg-blue-600 p-10 text-white">

            <h2 className="text-4xl font-bold">
              Your Support Matters
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Together we can empower communities through
              education, technology, awareness, and opportunities.
            </p>

            <button className="mt-10 rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:bg-blue-50">
              Contribute Today
            </button>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Donate