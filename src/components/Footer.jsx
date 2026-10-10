
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">

      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Stay Updated with E-Tech
            </h2>

            <p className="text-gray-400 mt-2">
              Get updates about new products and special offers.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
            className="flex w-full md:w-auto gap-2"
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="min-w-0 flex-1 md:w-72 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition"
            >
              Subscribe
            </button>
          </form>

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Information */}
          <div>
            <Link to="/" className="text-3xl font-bold text-white">
              E-<span className="text-blue-500">Tech</span>
            </Link>

            <p className="mt-5 text-gray-400 leading-7">
              Your trusted destination for laptops, smartphones,
              accessories and the latest electronic gadgets.
              Discover technology that makes life easier.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 text-white transition"
              >
                f
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-pink-600 text-white transition"
              >
                ig
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 text-white transition"
              >
                ▶
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-blue-400 transition">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/categories" className="hover:text-blue-400 transition">
                  Categories
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Customer Support
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="hover:text-blue-400 transition">
                  FAQs
                </Link>
              </li>

              <li>
                <Link to="/shipping" className="hover:text-blue-400 transition">
                  Shipping Information
                </Link>
              </li>

              <li>
                <Link to="/returns" className="hover:text-blue-400 transition">
                  Returns & Refunds
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-blue-400 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold text-white mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-blue-400">📍</span>
                <span>
                  E-Tech Online Store
                  <br />
                  India
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-400">✉️</span>
                <a
                  href="mailto:support@example.com"
                  className="hover:text-blue-400 transition break-all"
                >
                  support@example.com
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-blue-400">🕒</span>
                <span>
                  Monday – Saturday
                  <br />
                  9:00 AM – 6:00 PM
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">

          <p>
            © {new Date().getFullYear()}  Projects E-Tech. &developed by <strong>Aniket singh</strong> 
          </p>

          <p>
            Made with <span className="text-red-500">♥</span> for technology lovers.
          </p>

        </div>
      </div>

    </footer>
  );
}

export default Footer;
