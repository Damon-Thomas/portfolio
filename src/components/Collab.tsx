"use client";

import { useState } from "react";

export default function Collab() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "rate-limited"
  >("idle");
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors({
        ...validationErrors,
        [name]: "",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setValidationErrors({});
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else if (response.status === 429) {
        setSubmitStatus("rate-limited");
        setErrorMessage(
          data.error || "Rate limit exceeded. Please try again later."
        );
      } else if (response.status === 400 && data.details) {
        // Handle validation errors
        setValidationErrors(data.details);
        setSubmitStatus("error");
        setErrorMessage("Please correct the errors below.");
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          data.error || "An error occurred while sending your message."
        );
      }
    } catch (error) {
      console.error("Submit error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background text-foreground w-full flex justify-center px-4">
      <div className="flex flex-col py-4 md:py-16 max-w-6xl w-full gap-3 md:gap-6">
        <div className="flex flex-col gap-1 md:gap-3">
          <h3 className="text-xl md:text-3xl w-full font-bold">
            Want to Collaborate?
          </h3>
          <p className="mb-6 text-gray-300 md:span-2">
            I&apos;m always interested in new opportunities and collaborations.
            Drop me a message and let&apos;s discuss how we can work together!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col gap-4">
            <div className="flex-flex-col">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                maxLength={100}
                className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-foreground ${
                  validationErrors.name
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-600"
                }`}
                placeholder="Your name"
              />
              {validationErrors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {validationErrors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                maxLength={254}
                className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-foreground ${
                  validationErrors.email
                    ? "border-red-500 focus:ring-red-400"
                    : "border-gray-600"
                }`}
                placeholder="your.email@example.com"
              />
              {validationErrors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {validationErrors.email}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={2000}
              className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-foreground resize-none ${
                validationErrors.message
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-600"
              }`}
              placeholder="Tell me about your project or how we can collaborate..."
            />
            <div className="flex justify-between items-center mt-1">
              {validationErrors.message && (
                <p className="text-red-400 text-sm">
                  {validationErrors.message}
                </p>
              )}
              <p className="text-gray-500 text-xs ml-auto">
                {formData.message.length}/2000
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <div className="p-4 bg-green-900/30 border border-green-500 rounded-lg">
              <p className="text-green-400 text-sm">
                Thank you! Your message has been sent successfully.
              </p>
            </div>
          )}

          {submitStatus === "rate-limited" && (
            <div className="p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg">
              <p className="text-yellow-400 text-sm">{errorMessage}</p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="p-4 bg-red-900/30 border border-red-500 rounded-lg">
              <p className="text-red-400 text-sm">
                {errorMessage ||
                  "Sorry, there was an error sending your message. Please try again."}
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
