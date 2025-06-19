"use client";

import { useState } from "react";

export default function Collab({
  theme = "dark",
  pad = true,
}: {
  theme?: "dark" | "light";
  pad?: boolean;
}) {
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
        setErrorMessage("Please correct the errors above.");
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

  function handleLikeClick(destination: string) {
    window.open(destination, "_blank");
  }

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-background text-foreground"
          : "bg-foreground text-background"
      } w-full flex justify-center ${pad ? "px-4" : ""} `}
    >
      <div className="flex flex-col md:flex-row py-10 md:py-16 max-w-6xl  w-full gap-10">
        <div className="flex flex-col justify-start gap-2 h-full md:gap-6">
          <h3 className="text-xl md:text-3xl w-full font-bold">
            Want to Collaborate?
          </h3>
          <p className=" md:span-2">
            I&apos;m always interested in new opportunities and collaborations.
            Check me out at one of the links below, or drop me a message and
            let&apos;s discuss how we can work together!
          </p>
          <div className="flex gap-4">
            {/* linked in */}
            <svg
              viewBox="0 0 128 128"
              className="w-8 h-8 md:w-10 md:h-10 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
              onClick={() =>
                handleLikeClick(
                  "https://www.linkedin.com/in/damon-thomas-445a39126/"
                )
              }
            >
              <path
                fill="#0076b2"
                d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
              ></path>
              <path
                fill="#fff"
                d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
              ></path>
            </svg>
            {/* GitHub */}
            <svg
              viewBox="0 0 128 128"
              className={`w-8 h-8 md:w-10 md:h-10 hover:cursor-pointer hover:scale-110 transition-transform duration-200`}
              onClick={() => handleLikeClick("https://github.com/Damon-Thomas")}
            >
              <g fill={theme === "dark" ? "#ededed" : "#0a0a0a"}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                ></path>
                <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </g>
            </svg>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-2 min-w-1/2"
        >
          <div className="flex flex-col gap-2 justify-start">
            <div className="flex gap-4">
              <div className="flex flex-1 flex-col ">
                <label htmlFor="name" className="block text-sm font-bold mb-2">
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
                  className={`w-full px-4 py-2 bg-foreground border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-background ${
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
              <div className="flex flex-1 flex-col">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
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
                  className={`w-full px-4 py-2 bg-foreground border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-background ${
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
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
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
              className={`w-full px-4 py-2 bg-foreground border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-background resize-none ${
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
            className={`${
              theme === "dark"
                ? "bg-foreground text-background"
                : "bg-background text-foreground"
            } w-full md:w-auto px-8 py-3  font-semibold rounded-lg hover:cursor-pointer hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitStatus === "success" && (
            <div
              className={`p-4 ${
                theme === "dark"
                  ? "bg-green-900/30 border-green-500"
                  : "bg-zinc-900/10 border-green-500"
              }  border  rounded-lg`}
            >
              <p
                className={`${
                  theme === "dark" ? "text-green-400" : "text-green-900"
                } text-sm`}
              >
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
            <div
              className={`p-4 ${
                theme === "dark" ? "bg-red-900/30" : "bg-red-900/10"
              }  border border-red-500 rounded-lg`}
            >
              <p
                className={`${
                  theme === "dark" ? "text-red-400" : "text-red-900"
                } text-sm`}
              >
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
