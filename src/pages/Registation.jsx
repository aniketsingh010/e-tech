import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("success");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // Input fields ki values update karna
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    setMessage("");
  };

  // Registration form submit karna
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.mobile.trim() ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setMessageType("error");
      setMessage("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessageType("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      setMessageType("error");
      setMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (formData.password.length < 8) {
      setMessageType("error");
      setMessage("Password must contain at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessageType("error");
      setMessage("Password and Confirm Password do not match.");
      return;
    }

    if (!formData.terms) {
      setMessageType("error");
      setMessage("Please accept the Terms and Conditions.");
      return;
    }

    // Abhi sirf frontend validation hai.
    // Real account banane ke liye backend API connect karni hogi.
    setMessageType("success");
    setMessage(
      "Form validated successfully! Connect your backend to create your account."
    );
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100";

  return (
    <>
    <Navbar/>
     <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:py-14">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">

        {/* LEFT SIDE: BRANDING */}
        <div className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 p-10 text-white lg:flex xl:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-white/10"></div>

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl font-black text-blue-700">
                E
              </div>

              <div>
                <h1 className="text-2xl font-extrabold tracking-wide">
                  E-TECH
                </h1>
                <p className="text-xs tracking-widest text-blue-100">
                  SMARTER SHOPPING
                </p>
              </div>
            </Link>

            <div className="mt-20">
              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm">
                Welcome to E-Tech
              </span>

              <h2 className="mt-7 text-4xl font-extrabold leading-tight xl:text-5xl">
                Create Your Account,
                <br />
                Start Shopping!
              </h2>

              <p className="mt-6 max-w-md leading-7 text-blue-100">
                Discover the latest electronics, explore exciting deals,
                and enjoy a smarter shopping experience with E-Tech.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-12 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <div className="text-2xl">🛍️</div>
              <h3 className="mt-3 font-bold">Easy Shopping</h3>
              <p className="mt-1 text-sm text-blue-100">
                Browse your favourite products.
              </p>
            </div>

            <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <div className="text-2xl">🔒</div>
              <h3 className="mt-3 font-bold">Secure Account</h3>
              <p className="mt-1 text-sm text-blue-100">
                Built for a safer shopping experience.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: REGISTER FORM */}
        <div className="p-6 sm:p-10 lg:p-12 xl:p-14">
          <div className="mb-8 flex items-center justify-between lg:hidden">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-black text-white">
                E
              </div>
              <span className="text-xl font-extrabold text-gray-900">
                E-TECH
              </span>
            </Link>

            <Link
              to="/"
              className="text-sm font-semibold text-blue-600 hover:text-blue-800"
            >
              Home
            </Link>
          </div>

          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Join E-Tech
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Create Account
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Register today to start exploring our latest electronics.
            </p>
          </div>

          {/* SUCCESS / ERROR MESSAGE */}
          {message && (
            <div
              role="status"
              className={`mb-5 rounded-xl border p-4 text-sm ${
                messageType === "error"
                  ? "border-red-200 bg-red-50 text-red-700"
                  : "border-green-200 bg-green-50 text-green-700"
              }`}
            >
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* FULL NAME */}
            <div>
              <label
                htmlFor="fullName"
                className="text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>

              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                className={inputClass}
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className={inputClass}
                required
              />
            </div>

            {/* MOBILE NUMBER */}
            <div>
              <label
                htmlFor="mobile"
                className="text-sm font-semibold text-gray-700"
              >
                Mobile Number
              </label>

              <input
                id="mobile"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                autoComplete="tel"
                inputMode="numeric"
                maxLength={10}
                className={inputClass}
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  className={`${inputClass} pr-20`}
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <p className="mt-2 text-xs text-gray-400">
                Use at least 8 characters.
              </p>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Enter your password again"
                  autoComplete="new-password"
                  className={`${inputClass} pr-20`}
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-blue-600 hover:text-blue-800"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* TERMS AND CONDITIONS */}
            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1 h-4 w-4 cursor-pointer accent-blue-600"
              />

              <label
                htmlFor="terms"
                className="text-sm leading-6 text-gray-600"
              >
                I agree to the{" "}
                <Link
                  to="/terms"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* REGISTER BUTTON */}
            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl active:translate-y-0"
            >
              Create Account →
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="mt-7 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-blue-600 hover:text-blue-800 hover:underline"
            >
              Login here
            </Link>
          </p>

          <div className="mt-8 border-t border-gray-100 pt-5 text-center">
            <Link
              to="/"
              className="text-sm font-medium text-gray-500 transition hover:text-blue-600"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
}

export default Register;