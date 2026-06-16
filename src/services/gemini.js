import { GoogleGenerativeAI } from "@google/generative-ai"

const apiKey =
  import.meta.env.VITE_GEMINI_API_KEY

const genAI =
  new GoogleGenerativeAI(apiKey)

const model =
  genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  })

// Fallback NGO Responses
const fallbackResponses = {
  volunteer:
    "You can join our volunteer programs through the Volunteer page. We offer education support, awareness campaigns, and community outreach opportunities.",

  internship:
    "NayePankh offers internships in frontend development, content writing, social media management, and community engagement.",

  donation:
    "Your donations help support educational programs, technology access, and community awareness initiatives.",

  contact:
    "You can contact us through the Contact page or email us at support@nayepankh.org.",
}

const getFallbackResponse = (prompt) => {

  const lowerPrompt =
    prompt.toLowerCase()

  if (lowerPrompt.includes("volunteer")) {
    return fallbackResponses.volunteer
  }

  if (lowerPrompt.includes("internship")) {
    return fallbackResponses.internship
  }

  if (lowerPrompt.includes("donation")) {
    return fallbackResponses.donation
  }

  if (lowerPrompt.includes("contact")) {
    return fallbackResponses.contact
  }

  return "Thank you for reaching out to NayePankh. Our AI assistant is currently unavailable, but we’d still love to help you."
}

export const generateAIResponse = async (
  prompt
) => {

  try {

    const result =
      await model.generateContent(prompt)

    const response =
      await result.response.text()

    return response

  } catch (error) {

    console.error(
      "Gemini API Error:",
      error
    )

    // Use fallback if quota exceeded
    if (
      error.message.includes("429")
    ) {

      return getFallbackResponse(prompt)

    }

    return "Unable to generate AI response right now."

  }

}

