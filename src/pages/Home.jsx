import Hero from "../components/Hero"
import StatCard from "../components/StatCard"
import ServiceCard from "../components/ServiceCard"
import CTA from "../components/CTA"

const Home = () => {
  return (
    <div>
      <Hero />
      {/* Stats Section */}
        <section className="bg-gray-50 px-6 py-20 dark:bg-gray-950">
          <div className="mx-auto max-w-7xl">
          {/* Heading */}
            <div className="max-w-3xl">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                Creating Real Social Impact
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
                NayePankh is dedicated to empowering communities
                through education, volunteer programs, internships,
                and accessible support systems.
              </p>
            </div>
          {/* Cards Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              number="10K+"
              title="Students Helped"
              description="Providing educational resources and mentorship to students across communities."
            />
            <StatCard
              number="500+"
              title="Active Volunteers"
              description="Dedicated volunteers supporting awareness drives and community initiatives."
            />
            <StatCard
              number="120+"
              title="Internships Completed"
              description="Helping young talent gain practical experience and real-world skills."
            />
            <StatCard
              number="50+"
              title="Communities Reached"
              description="Supporting rural and urban communities through impactful NGO programs."
            />
          </div>
        </div>
      </section>
      {/* Services Section */}
<section className="bg-white px-6 py-20 dark:bg-gray-900">

  <div className="mx-auto max-w-7xl">

    {/* Heading */}
    <div className="mx-auto max-w-3xl text-center">

      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        How NayePankh Creates Impact
      </h2>

      <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Our platform empowers individuals and communities
        through volunteering opportunities, internship
        programs, donation initiatives, and AI-powered
        assistance.
      </p>

    </div>

    {/* Cards */}
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <ServiceCard
        icon="🤝"
        title="Volunteer Programs"
        description="Join community initiatives and help create meaningful social impact through active participation."
      />

      <ServiceCard
        icon="🎓"
        title="Internship Opportunities"
        description="Gain real-world experience while contributing to impactful NGO projects and campaigns."
      />

      <ServiceCard
        icon="💙"
        title="Donation Support"
        description="Support education, awareness drives, and community welfare programs through donations."
      />

      <ServiceCard
        icon="🤖"
        title="AI Help Desk"
        description="Get instant answers about volunteering, internships, donations, and support services."
      />

    </div>

  </div>

    </section>
    <CTA />
    </div>
  )
}

export default Home