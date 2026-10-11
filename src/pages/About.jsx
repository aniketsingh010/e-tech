
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  const [openFaq, setOpenFaq] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = [
    {
      name: "Laptops",
      description: "Powerful devices for work and study.",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700",
      link: "/products",
    },
    {
      name: "Smartphones",
      description: "Stay connected wherever you go.",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700",
      link: "/products",
    },
    {
      name: "Headphones",
      description: "Enjoy your favorite sounds.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
      link: "/products",
    },
    {
      name: "Smartwatches",
      description: "Smart technology on your wrist.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
      link: "/products",
    },
  ];

  const journey = [
    {
      year: "01",
      title: "The Idea",
      description:
        "We imagined a place where customers could explore technology products in a simple and convenient way.",
      icon: "💡",
    },
    {
      year: "02",
      title: "The Design",
      description:
        "We planned a clean, modern and responsive shopping experience for different screen sizes.",
      icon: "🎨",
    },
    {
      year: "03",
      title: "The Experience",
      description:
        "We brought product discovery, category browsing and shopping pages together in one place.",
      icon: "🛍️",
    },
    {
      year: "04",
      title: "The Future",
      description:
        "We aim to keep improving the experience with useful features and customer-focused design.",
      icon: "🚀",
    },
  ];

  const workSteps = [
    {
      number: "01",
      title: "Explore",
      description:
        "Browse different technology categories and discover products.",
      icon: "🔎",
    },
    {
      number: "02",
      title: "Compare",
      description:
        "Review product details and choose an option that suits your needs.",
      icon: "📋",
    },
    {
      number: "03",
      title: "Choose",
      description:
        "Add your selected products to the cart and review your order.",
      icon: "🛒",
    },
    {
      number: "04",
      title: "Enjoy",
      description:
        "Experience a simple and organized online shopping journey.",
      icon: "✨",
    },
  ];

  const values = [
    {
      icon: "🤝",
      title: "Trust & Transparency",
      description:
        "Clear and understandable product information helps customers make informed decisions.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We appreciate technology and digital experiences that make everyday tasks easier.",
    },
    {
      icon: "❤️",
      title: "Customer First",
      description:
        "We aim to make browsing and exploring products convenient for every visitor.",
    },
    {
      icon: "🌱",
      title: "Continuous Improvement",
      description:
        "We believe every website can become better through learning, feedback and improvement.",
    },
  ];

  const testimonials = [
    {
      name: "Aarav Sharma",
      role: "Demo Customer",
      text: "The website layout is clean, and the product categories are easy to explore.",
      avatar: "AS",
      rating: 5,
    },
    {
      name: "Priya Verma",
      role: "Demo Customer",
      text: "I like the modern design and the way the different sections are organized.",
      avatar: "PV",
      rating: 5,
    },
    {
      name: "Rahul Singh",
      role: "Demo Customer",
      text: "The responsive layout makes the shopping experience easy to browse.",
      avatar: "RS",
      rating: 5,
    },
  ];

  const faqs = [
    {
      question: "What is E-Tech?",
      answer:
        "E-Tech is an electronics e-commerce website project designed to help visitors explore technology products through an organized and user-friendly interface.",
    },
    {
      question: "What products can I explore?",
      answer:
        "You can explore categories such as laptops, smartphones, headphones, smartwatches, gaming products and other electronic accessories, depending on the products available on the website.",
    },
    {
      question: "Can I browse E-Tech on my mobile phone?",
      answer:
        "Yes. The page uses a responsive Tailwind CSS layout designed to adjust to mobile phones, tablets and desktop screens.",
    },
    {
      question: "How can I contact E-Tech?",
      answer:
        "Visit the Contact page to see the contact options configured for your project.",
    },
    {
      question: "Can I place a real order on this website?",
      answer:
        "This project demonstrates an e-commerce interface. Real orders and payments require a working backend, order management and a properly configured payment system.",
    },
  ];

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    // Demo newsletter form. Connect a backend or newsletter service
    // to save subscriptions permanently.
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-gray-800">
        {/* 1. HERO SECTION */}
        <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-800 text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-400 blur-3xl"></div>
            <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-purple-500 blur-3xl"></div>
          </div>

          <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
              <span className="inline-block rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-200">
                ✨ ABOUT E-TECH
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
                Technology That
                <span className="block text-blue-300">
                  Makes Life Better
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Discover a world of electronics, smart devices and innovative
                technology. E-Tech brings product discovery and modern design
                together in one convenient place.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 shadow-lg transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  Explore Products →
                </Link>

                <Link
                  to="/contact"
                  className="rounded-xl border border-white/50 px-7 py-3.5 font-bold transition hover:bg-white hover:text-blue-800"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-blue-100">
                <span>✓ Modern Design</span>
                <span>✓ Easy Navigation</span>
                <span>✓ Responsive Layout</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-blue-400 to-purple-500 opacity-30 blur-xl"></div>

              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1200"
                alt="A collection of electronic devices"
                className="relative h-72 w-full rounded-3xl object-cover shadow-2xl sm:h-96"
              />

              <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 text-gray-800 shadow-xl sm:left-8">
                <p className="text-sm text-gray-500">Discover</p>
                <p className="text-lg font-extrabold">What's Next in Tech</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. QUICK HIGHLIGHTS */}
        <section className="relative z-10 mx-auto -mt-1 max-w-7xl px-6 py-10">
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl md:grid-cols-4 md:p-8">
            {[
              { number: "01", label: "Simple Navigation" },
              { number: "02", label: "Modern Interface" },
              { number: "03", label: "Multiple Categories" },
              { number: "04", label: "Responsive Design" },
            ].map((item) => (
              <div
                key={item.number}
                className="border-gray-100 px-2 py-4 text-center sm:border-r last:border-r-0"
              >
                <h3 className="text-3xl font-extrabold text-blue-700">
                  {item.number}
                </h3>
                <p className="mt-2 text-sm font-semibold text-gray-600 sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. OUR STORY */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
                alt="Modern shopping environment"
                className="h-80 w-full rounded-3xl object-cover shadow-xl md:h-[460px]"
              />

              <div className="absolute -bottom-6 -right-3 max-w-xs rounded-2xl bg-blue-700 p-5 text-white shadow-xl sm:-right-5">
                <p className="text-2xl font-extrabold">Technology</p>
                <p className="mt-1 text-sm text-blue-100">
                  Made easier to explore.
                </p>
              </div>
            </div>

            <div className="mt-5 md:mt-0">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Story
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Making Technology Accessible to Everyone
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                E-Tech is an electronics e-commerce website concept created
                to make discovering technology products simple, convenient
                and enjoyable.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                From laptops and smartphones to headphones and smartwatches,
                our goal is to bring different product categories together
                through an organized digital shopping experience.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                We believe that a useful shopping website should have clear
                navigation, attractive product displays and a responsive
                interface that works across devices.
              </p>

              <Link
                to="/products"
                className="mt-8 inline-flex items-center gap-2 font-bold text-blue-700 transition hover:gap-4"
              >
                Discover Our Products <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. MISSION AND VISION */}
        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Purpose
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Our Mission & Vision
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Our aim is to make exploring and choosing technology products
                easier through a clear and convenient online experience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition group-hover:scale-110">
                  🎯
                </div>

                <h3 className="mt-6 text-2xl font-bold">Our Mission</h3>

                <p className="mt-4 leading-8 text-gray-600">
                  To build a user-friendly shopping platform where visitors
                  can explore electronics, review product information and
                  discover options that fit their everyday needs.
                </p>
              </div>

              <div className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl md:p-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-3xl transition group-hover:scale-110">
                  🚀
                </div>

                <h3 className="mt-6 text-2xl font-bold">Our Vision</h3>

                <p className="mt-4 leading-8 text-gray-600">
                  To create a convenient digital destination for technology
                  enthusiasts, with an engaging interface and a shopping
                  experience that continues to improve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. PRODUCT CATEGORIES */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Explore Technology
                </p>

                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  Discover Our Categories
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-gray-600">
                  Explore popular technology categories and find devices for
                  work, entertainment and everyday life.
                </p>
              </div>

              <Link
                to="/products"
                className="font-bold text-blue-700 transition hover:text-indigo-700"
              >
                View All Products →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => (
                <Link
                  to={category.link}
                  key={category.name}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold">{category.name}</h3>

                    <p className="mt-2 leading-7 text-gray-500">
                      {category.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 font-bold text-blue-700 transition group-hover:gap-4">
                      Explore <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 6. HOW WE WORK */}
        <section className="bg-slate-950 px-6 py-20 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Simple Shopping
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                A Simple Way to Explore Technology
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                We organize the shopping journey into clear and easy steps.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {workSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/60 hover:bg-white/10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{step.icon}</span>
                    <span className="text-3xl font-extrabold text-blue-300/60">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold">{step.title}</h3>

                  <p className="mt-3 leading-7 text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. WHY CHOOSE E-TECH */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Why E-Tech?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Designed Around Your Needs
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Our interface focuses on convenience, accessibility and
                easy product discovery.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🛍️",
                  title: "Easy Shopping",
                  text: "Explore different product categories in one place.",
                },
                {
                  icon: "💻",
                  title: "Modern Products",
                  text: "Discover devices for work, learning and entertainment.",
                },
                {
                  icon: "📱",
                  title: "Responsive Design",
                  text: "Browse a layout designed for phones, tablets and computers.",
                },
                {
                  icon: "💬",
                  title: "Contact Options",
                  text: "Visit the Contact page to find available support details.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-gray-100 p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50 text-4xl">
                    {feature.icon}
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. OUR VALUES */}
        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                What Matters to Us
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                The Values Behind E-Tech
              </h2>

              <p className="mt-5 leading-8 text-gray-600">
                We want to create a shopping experience that puts clarity,
                convenience and customer needs first. These values guide
                the way we design and improve our website.
              </p>

              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1000"
                alt="People working together with technology"
                loading="lazy"
                className="mt-8 h-64 w-full rounded-3xl object-cover shadow-lg md:h-80"
              />
            </div>

            <div className="space-y-5">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="flex gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    {value.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">{value.title}</h3>

                    <p className="mt-2 leading-7 text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. OUR JOURNEY */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Our Journey
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                An Idea Becomes an Experience
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Every good digital experience begins with an idea and grows
                through design, development and continuous improvement.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {journey.map((item) => (
                <div
                  key={item.year}
                  className="relative rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{item.icon}</span>
                    <span className="text-4xl font-black text-blue-100">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. STATISTICS */}
        <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 px-6 py-16 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                E-Tech at a Glance
              </h2>

              <p className="mt-4 leading-7 text-blue-100">
                A digital shopping concept built around modern design and
                convenient product discovery.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {[
                { number: "4+", label: "Featured Categories" },
                { number: "100%", label: "Responsive Layout Goal" },
                { number: "24/7", label: "Website Access Goal" },
                { number: "1", label: "Shopping Destination" },
              ].map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-4xl font-extrabold sm:text-5xl">
                    {stat.number}
                  </h3>
                  <p className="mt-3 text-sm text-blue-100 sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. CUSTOMER REVIEWS - DEMO */}
        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Customer Experience
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                What Visitors Might Appreciate
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Example review cards to demonstrate how customer feedback
                could appear on the website.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
              {testimonials.map((review) => (
                <div
                  key={review.name}
                  className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="text-xl tracking-widest text-amber-400">
                    {"★".repeat(review.rating)}
                  </div>

                  <p className="mt-5 leading-8 text-gray-600">
                    “{review.text}”
                  </p>

                  <div className="mt-7 flex items-center gap-4 border-t border-gray-100 pt-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                      {review.avatar}
                    </div>

                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-center text-xs text-gray-500">
              Note: These are sample testimonials for the website design,
              not verified customer reviews.
            </p>
          </div>
        </section>

        {/* 12. FAQ */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Need Help?
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 leading-7 text-gray-600">
                Find answers to common questions about our website.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:border-blue-200"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span className="font-bold text-gray-800 sm:text-lg">
                        {faq.question}
                      </span>

                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl font-bold text-blue-700">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 leading-8 text-gray-600 sm:px-6">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 13. NEWSLETTER */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-blue-50">
            <div className="grid grid-cols-1 items-center gap-8 p-8 md:grid-cols-2 md:p-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  Stay Connected
                </p>

                <h2 className="mt-3 text-3xl font-extrabold">
                  Keep Up With Technology
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  Subscribe to this demo newsletter interface to see how
                  a website signup form can work.
                </p>
              </div>

              <div>
                {subscribed ? (
                  <div
                    role="status"
                    className="rounded-2xl border border-green-200 bg-green-50 p-5 font-semibold text-green-700"
                  >
                    Thanks! Your demo submission was successful.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <label htmlFor="newsletter-email" className="sr-only">
                      Email address
                    </label>

                    <input
                      id="newsletter-email"
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-blue-700 px-6 py-4 font-bold text-white transition hover:bg-blue-800"
                    >
                      Subscribe Now →
                    </button>
                  </form>
                )}

                <p className="mt-3 text-xs leading-5 text-gray-500">
                  Demo form only. Connect a backend or newsletter service
                  to store email subscriptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 14. FINAL CALL TO ACTION */}
        <section className="px-6 pb-20 pt-5">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-blue-700 to-cyan-600 px-6 py-14 text-center text-white md:px-14 md:py-20">
            <div className="absolute -right-10 -top-16 h-60 w-60 rounded-full border-[35px] border-white/10"></div>
            <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full border-[35px] border-white/10"></div>

            <div className="relative">
              <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
                YOUR TECH JOURNEY STARTS HERE
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                Ready to Explore the World of Technology?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
                Explore electronics and gadgets through the E-Tech shopping
                experience. Discover categories, browse products and find
                technology that interests you.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  to="/products"
                  className="rounded-xl bg-white px-8 py-3.5 font-bold text-blue-800 transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  Shop Now →
                </Link>

                <Link
                  to="/contact"
                  className="rounded-xl border border-white/60 px-8 py-3.5 font-bold transition hover:bg-white hover:text-blue-800"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;
