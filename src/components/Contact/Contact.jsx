import { useState } from "react";
import { personalInfo } from "../../data/portfolioData";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const contactCards = [
    {
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: "✉️",
    },
    {
      label: "Phone",
      value: personalInfo.phone,
      href: personalInfo.phoneHref,
      icon: "📱",
    },
    {
      label: "LinkedIn",
      value: personalInfo.linkedinLabel,
      href: personalInfo.linkedin,
      icon: "💼",
    },
    {
      label: "GitHub",
      value: personalInfo.githubLabel,
      href: personalInfo.github,
      icon: "🐙",
    },
  ].filter((card) => card.value);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const endpoint = personalInfo.formEndpoint;

    if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
      setErrorMessage("The form endpoint is not set in portfolioData.js.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        setErrorMessage("");
        setForm({ name: "", email: "", message: "" });
      } else {
        const reason = Array.isArray(data.errors)
          ? data.errors.map((item) => item.message).join(", ")
          : data.error || `Request failed with status ${response.status}.`;

        console.error("Form error:", response.status, data);
        setErrorMessage(reason);
        setStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setErrorMessage(
        "Network error. Check your internet connection and the endpoint URL."
      );
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          I'm open to new opportunities, internships, and freelance projects.
          Feel free to contact me anytime.
        </p>

        <div className="contact-grid">
          <div className="contact-cards">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={
                  card.label === "Email" || card.label === "Phone"
                    ? "_self"
                    : "_blank"
                }
                rel="noreferrer"
                className="contact-card"
              >
                <span className="contact-icon">{card.icon}</span>
                <div>
                  <small>{card.label}</small>
                  <p>{card.value}</p>
                </div>
                <span className="contact-arrow">→</span>
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="btn btn-block btn-reverse"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="form-status form-success">
                Thank you! Your message has been sent. I will reply soon.
              </p>
            )}

            {status === "error" && (
              <p className="form-status form-error">
                Message could not be sent
                {errorMessage ? `: ${errorMessage}` : "."} You can also email me
                directly at{" "}
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                .
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;