import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className="px-6 py-20">

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-linear-to-r from-blue-600 to-blue-800 px-8 py-16 shadow-2xl md:px-16">

        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">

          {/* Left Content */}
          <div className="max-w-3xl">

            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Become Part of the NayePankh Mission
            </h2>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Help us empower communities through education,
              volunteering, internships, and technology-driven
              social initiatives.
            </p>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <Link
              to="/volunteer"
              className="rounded-xl bg-white px-7 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Join as Volunteer
            </Link>

            <Link
              to="/donate"
              className="rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Support Through Donation
            </Link>

          </div>

        </div>

      </div>

    </section>
  )
}

export default CTA