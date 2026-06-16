import { useEffect, useRef, useState,} from "react"

import { generateAIResponse } from "../services/gemini"

const Chatbot = () => {

  const [messages, setMessages] = useState([
    {
      text: "Hello! Welcome to NayePankh AI Help Desk. How can I help you today?",
      sender: "bot",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ])

  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const chatEndRef = useRef(null)

  // Load Chat History
  useEffect(() => {

    const savedMessages =
      localStorage.getItem("nayepankh-chat")

    if (savedMessages) {
      setMessages(JSON.parse(savedMessages))
    }

  }, [])

  // Save Chat History
  useEffect(() => {

    localStorage.setItem(
      "nayepankh-chat",
      JSON.stringify(messages)
    )

  }, [messages])

  // Auto Scroll
  useEffect(() => {

    chatEndRef.current?.scrollIntoView({
      behavior: "smooth",
    })

  }, [messages, isTyping])

  // Send Message
  const handleSendMessage = async () => {

    if (input.trim() === "") {
      return
    }

    const userMessage = {
      text: input,
      sender: "user",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    }

    // Add User Message
    setMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
    ])

    setInput("")
    setIsTyping(true)

    try {

      const aiResponse =
        await generateAIResponse(input)

      const botMessage = {
        text: aiResponse,
        sender: "bot",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        botMessage,
      ])

    } catch (error) {

      console.error(error)

    } finally {

      setIsTyping(false)

    }

  }

  // Suggested Questions
  const suggestedQuestions = [
    "How can I volunteer?",
    "Tell me about internships",
    "How do donations help?",
    "How can I contact NayePankh?",
  ]

  return (
    <div className="flex h-175 flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">

      {/* Header */}
      <div className="border-b border-gray-200 bg-blue-600 px-6 py-5 text-white dark:border-gray-800">

        <h2 className="text-2xl font-bold">
          NayePankh AI Help Desk
        </h2>

        <p className="mt-1 text-blue-100">
          Ask questions about volunteering, internships, donations, and more.
        </p>

      </div>

      {/* Chat Area */}
      <div className="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-6 dark:bg-gray-950">

        {/* Messages */}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.sender === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[80%] rounded-2xl px-5 py-4 leading-7 shadow-sm ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-200"
              }`}
            >

              <p>{message.text}</p>

              <p className="mt-2 text-xs opacity-70">
                {message.time}
              </p>

            </div>

          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">

            <div className="rounded-2xl bg-white px-5 py-4 shadow-sm dark:bg-gray-800">

              <div className="flex gap-1">

                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500"></span>

                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0.2s]"></span>

                <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500 [animation-delay:0.4s]"></span>

              </div>

            </div>

          </div>
        )}

        {/* Scroll Target */}
        <div ref={chatEndRef}></div>

      </div>

      {/* Suggested Questions */}
      <div className="flex flex-wrap gap-3 border-t border-gray-200 px-6 py-4 dark:border-gray-800">

        {suggestedQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => setInput(question)}
            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300"
          >
            {question}
          </button>
        ))}

      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">

        <div className="flex gap-4">

          <input
            type="text"
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSendMessage()
              }
            }}
            placeholder="Type your message..."
            className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />

          <button
            onClick={handleSendMessage}
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  )
}

export default Chatbot

