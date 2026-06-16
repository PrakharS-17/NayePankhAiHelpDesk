import Chatbot from "../components/Chatbot"

const AIHelpDesk = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-20 dark:bg-gray-950">

      <div className="mx-auto max-w-5xl">

        {/* Page Heading */}
        <div className="mb-12 text-center">

          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
            AI Help Desk
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Get instant answers about volunteering,
            internships, donations, and support programs
            through our AI-powered NGO assistant.
          </p>

        </div>

        {/* Chatbot */}
        <Chatbot />

      </div>

    </div>
  )
}

export default AIHelpDesk