"use client"

import { useState, useEffect } from "react"
import { FiSend, FiMessageSquare } from "react-icons/fi"

function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to send message")
      }

      setSuccess(true)
      form.reset()
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }


  }

  useEffect(() => {
  if (!success) return

  const timer = setTimeout(() => {
    setSuccess(false)
  }, 3000)

  return () => clearTimeout(timer)
}, [success])


  return (
    <form onSubmit={handleSubmit} className="w-full">
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="font-bold text-base mb-2 block text-text-muted"
        >
          Your Name *
        </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          required
          placeholder="John Doe"
          className="px-4 py-3 rounded-2xl border-text border-2 bg-white text-background text-base w-full"
        />
      </div>

      {/* Email */}
      <div className="my-5">
        <label
          htmlFor="email"
          className="font-bold text-base mb-2 block text-text-muted"
        >
          Your Email *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="john@example.com"
          className="px-4 py-3 rounded-2xl border-text border-2 bg-white text-background text-base w-full"
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="subject"
          className="font-bold text-base mb-2 block text-text-muted"
        >
          Subject *
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          placeholder="Project Inquiry / Job Opportunity"
          className="px-4 py-3 rounded-2xl border-text border-2 bg-white text-background text-base w-full"
        />
      </div>

      {/* Message */}
      <div className="my-5">
        <label
          htmlFor="message"
          className="font-bold text-base mb-2 block text-text-muted"
        >
          Message *
        </label>
        <textarea
          name="message"
          id="message"
          required
          placeholder="Tell me about your project or opportunity..."
          className="px-4 py-3 rounded-2xl border-text border-2 bg-white text-background text-base w-full h-28 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        disabled={loading}
        className="flex items-center gap-4 w-full bg-primary text-background rounded-2xl py-3 justify-center transition-opacity disabled:opacity-60 cursor-pointer"
      >
        <FiSend />
        {loading ? "Sending..." : "Send Message"}
      </button>

      {/* Feedback */}
      {success && (
        <p className="text-success text-center mt-4">
          Message sent successfully!
        </p>
      )}

      {error && (
        <p className="text-red-500 text-center mt-4">
          {error}
        </p>
      )}

      <div className="flex items-center justify-center gap-4 mt-4 text-sm text-text-muted">
        <FiMessageSquare />
        <p>I typically respond within 24 hours</p>
      </div>
    </form>
  )
}

export default ContactForm
