import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
const [formData, setFormData] = useState({
name: "",
email: "",
subject: "",
message: "",
});

const [status, setStatus] = useState("");

const handleChange = (event) => {
const { name, value } = event.target;

```
setFormData((previous) => ({
  ...previous,
  [name]: value,
}));

setStatus("");
```

};

const handleSubmit = (event) => {
event.preventDefault();

```
if (
  !formData.name.trim() ||
  !formData.email.trim() ||
  !formData.subject.trim() ||
  !formData.message.trim()
) {
  setStatus("Please fill in all fields.");
  return;
}

setStatus(
  "Your form is valid! Connect a backend or email service to send your message."
);

console.log("Contact form data:", formData);
```

};

const faqs = [
{
question: "How can I track my order?",
answer:
"Order tracking can be added after connecting an order management system.",
},
{
question: "How can I return a product?",
answer:
"You can add your return policy and return request process here.",
},
{
question: "How can I contact customer support?",
answer:
"Use the contact form on this page. Actual message delivery requires a connected backend or email service.",
},
];

return (
    <>
    <Navbar/>
         <main className="min-h-screen bg-gray-50">


  {/* Hero Section */}
  <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-blue-700 px-5 py-20 text-center text-white">
    <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-blue-300">
      We Are Here For You
    </p>

    <h1 className="text-4xl font-extrabold md:text-6xl">
      Contact Us
    </h1>

    <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-200">
      Have a question about our products or need help with your order?
      Get in touch with the E-Tech team.
    </p>

    <div className="mt-6 text-sm text-blue-200">
      <Link to="/" className="hover:text-white">
        Home
      </Link>
      {" / "}
      <span className="text-white">Contact</span>
    </div>
  </section>

  {/* Contact Information Cards */}
  <section className="mx-auto -mt-8 grid max-w-7xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3">
    <div className="rounded-2xl bg-white p-7 text-center shadow-lg">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
        📧
      </div>

      <h2 className="text-xl font-bold text-gray-900">
        Email Us
      </h2>

      <p className="mt-2 text-gray-500">
        For product and order questions
      </p>

      <a
        href="mailto:support@example.com"
        className="mt-3 inline-block break-all font-semibold text-blue-600 hover:text-blue-800"
      >
        support@example.com
      </a>
    </div>

    <div className="rounded-2xl bg-white p-7 text-center shadow-lg">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
        📞
      </div>

      <h2 className="text-xl font-bold text-gray-900">
        Call Us
      </h2>

      <p className="mt-2 text-gray-500">
        Customer support contact
      </p>

      <p className="mt-3 font-semibold text-gray-700">
        Add your business phone number
      </p>
    </div>

    <div className="rounded-2xl bg-white p-7 text-center shadow-lg sm:col-span-2 lg:col-span-1">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-2xl">
        📍
      </div>

      <h2 className="text-xl font-bold text-gray-900">
        Our Location
      </h2>

      <p className="mt-2 text-gray-500">
        Business location
      </p>

      <p className="mt-3 font-semibold text-gray-700">
        India
      </p>
    </div>
  </section>

  {/* Contact Form and Information */}
  <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8">

    {/* Left Information */}
    <div className="flex flex-col justify-center">
      <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
        Get In Touch
      </p>

      <h2 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
        Let's Talk About
        <span className="block text-blue-600">
          Your Needs.
        </span>
      </h2>

      <p className="mt-5 leading-7 text-gray-600">
        At E-Tech, we want to make your shopping experience simple
        and convenient. Send us your questions, feedback, or suggestions.
      </p>

      <div className="mt-8 space-y-5">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-blue-100 p-3 text-xl">
            💬
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Product Support
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              Ask questions about product features and specifications.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-green-100 p-3 text-xl">
            📦
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Orders & Returns
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              Get help with order-related questions and returns.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-purple-100 p-3 text-xl">
            💡
          </div>

          <div>
            <h3 className="font-bold text-gray-900">
              Feedback & Suggestions
            </h3>

            <p className="mt-1 text-sm leading-6 text-gray-500">
              Share your ideas to help improve our website.
            </p>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="mt-8 rounded-xl border border-gray-200 bg-white p-5">
        <h3 className="mb-3 font-bold text-gray-900">
          🕒 Business Hours
        </h3>

        <div className="flex justify-between gap-4 text-sm">
          <span className="text-gray-600">
            Monday – Saturday
          </span>

          <span className="font-medium text-gray-800">
            Add your working hours
          </span>
        </div>

        <div className="mt-3 flex justify-between gap-4 text-sm">
          <span className="text-gray-600">
            Sunday
          </span>

          <span className="font-medium text-gray-800">
            Add your Sunday hours
          </span>
        </div>
      </div>
    </div>

    {/* Contact Form */}
    <div className="rounded-2xl bg-white p-6 shadow-lg md:p-9">
      <h2 className="text-2xl font-bold text-gray-900">
        Send Us a Message
      </h2>

      <p className="mt-2 text-sm leading-6 text-gray-500">
        Fill in the form below with your details and message.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Full Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            autoComplete="name"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            autoComplete="email"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Subject
          </label>

          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Select a subject</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Order Support">Order Support</option>
            <option value="Return or Refund">Return or Refund</option>
            <option value="Technical Support">Technical Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Your Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            required
            className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Status Message */}
        {status && (
          <p
            role="status"
            className="rounded-lg bg-blue-50 p-3 text-sm leading-6 text-blue-800"
          >
            {status}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-4 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
        >
          Send Message →
        </button>

        <p className="text-xs leading-5 text-gray-500">
          Demo form: submitting validates the fields but does not send
          an email. Connect a backend or email service to receive messages.
        </p>
      </form>
    </div>
  </section>

  {/* FAQ Section */}
  <section className="bg-white px-4 py-16 md:px-8">
    <div className="mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <p className="font-semibold uppercase tracking-widest text-blue-600">
          Need Help?
        </p>

        <h2 className="mt-3 text-3xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>

        <p className="mt-3 text-gray-500">
          Find answers to some common questions.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-xl border border-gray-200 p-5 transition hover:border-blue-300"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900">
              {faq.question}

              <span className="text-xl text-blue-600 transition group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 leading-7 text-gray-600">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  </section>

  {/* Bottom CTA */}
  <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-5 py-14 text-center text-white">
    <h2 className="text-3xl font-extrabold">
      Explore E-Tech Products
    </h2>

    <p className="mx-auto mt-3 max-w-xl leading-7 text-blue-100">
      Discover electronics and accessories for your everyday needs.
    </p>

    <Link
      to="/products"
      className="mt-6 inline-block rounded-lg bg-white px-7 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
    >
      Shop Now →
    </Link>
  </section>

</main>
<Footer/>
    </>


);
}

export default Contact;
