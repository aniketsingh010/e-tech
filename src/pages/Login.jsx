import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Login() {
const [isSignup, setIsSignup] = useState(false);
const [showPassword, setShowPassword] = useState(false);
const [rememberMe, setRememberMe] = useState(false);
const [showForgotPassword, setShowForgotPassword] = useState(false);
const [message, setMessage] = useState("");

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
});

const handleChange = (event) => {
const { name, value } = event.target;

setFormData((previous) => ({
  ...previous,
  [name]: value,
}));

setMessage("");


};

const switchMode = (signup) => {
setIsSignup(signup);
setShowForgotPassword(false);
setShowPassword(false);
setMessage("");
setFormData({
name: "",
email: "",
password: "",
confirmPassword: "",
});
};

const handleSubmit = (event) => {
event.preventDefault();
setMessage("");
if (!formData.email.trim() || !formData.password) {
  setMessage("Please enter your email and password.");
  return;
}

if (isSignup) {
  if (!formData.name.trim()) {
    setMessage("Please enter your full name.");
    return;
  }

  if (formData.password.length < 8) {
    setMessage("Password must contain at least 8 characters.");
    return;
  }

  if (formData.password !== formData.confirmPassword) {
    setMessage("Passwords do not match.");
    return;
  }

  setMessage(
    "Form validated successfully! Connect a backend to create your account."
  );
  return;
}

setMessage(
  "Form validated successfully! Connect your authentication backend to log in."
);

};

const handleForgotPassword = (event) => {
event.preventDefault();
if (!formData.email.trim()) {
  setMessage("Please enter your email address first.");
  return;
}

setMessage(
  "Password reset requires a backend or authentication service. No reset email has been sent."
);

};

return ( 
  <>
  <Navbar/>
  <main className="min-h-screen bg-slate-100 px-4 py-8 sm:px-6 lg:py-12"> <div className="mx-auto grid min-h-[650px] max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl lg:grid-cols-2">

    {/* LEFT BRANDING SECTION */}
    <section className="relative hidden overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">

      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

      <div className="relative z-10">
        <Link to="/" className="inline-flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl font-extrabold text-blue-700">
            E
          </div>

          <span className="text-2xl font-extrabold tracking-wide">
            E-TECH
          </span>
        </Link>

        <p className="mt-2 text-sm tracking-widest text-blue-200">
          TECHNOLOGY FOR EVERYDAY LIFE
        </p>
      </div>

      <div className="relative z-10 my-12">
        <div className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-100">
          ✨ Welcome to the E-Tech community
        </div>

        <h1 className="text-4xl font-extrabold leading-tight xl:text-5xl">
          Technology
          <span className="block text-blue-300">
            Meets Lifestyle.
          </span>
        </h1>

        <p className="mt-6 max-w-md leading-7 text-blue-100">
          Discover smart devices, modern electronics, and everyday
          technology designed to make life simpler.
        </p>

        <div className="mt-8 space-y-4">
          {[
            "Explore the latest electronics",
            "Discover products for everyday life",
            "Enjoy a simple shopping experience",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400/20 text-sm text-green-300">
                ✓
              </span>

              <span className="text-sm text-blue-50">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/20 pt-6 text-sm text-blue-200">
        <span>© {new Date().getFullYear()} E-Tech</span>
        <Link to="/" className="hover:text-white">
          Back to Home →
        </Link>
      </div>
    </section>

    {/* RIGHT FORM SECTION */}
    <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">

      <div className="w-full max-w-md">

        {/* Mobile Logo */}
        <div className="mb-8 flex items-center justify-between lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xl font-extrabold text-white">
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

        {/* Form Heading */}
        <div className="mb-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            {showForgotPassword
              ? "Account Recovery"
              : isSignup
                ? "Join E-Tech"
                : "Welcome Back"}
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {showForgotPassword
              ? "Forgot Password?"
              : isSignup
                ? "Create Account"
                : "Sign In"}
          </h2>

          <p className="mt-3 leading-6 text-gray-500">
            {showForgotPassword
              ? "Enter your email to begin the password recovery process."
              : isSignup
                ? "Create an account to get started with E-Tech."
                : "Enter your details to access your account."}
          </p>
        </div>

        {/* Login / Signup Tabs */}
        {!showForgotPassword && (
          <div className="mb-7 grid grid-cols-2 rounded-xl bg-gray-100 p-1">
            <button
              type="button"
              onClick={() => switchMode(false)}
              className={`rounded-lg py-3 text-sm font-bold transition ${
                !isSignup
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Login
            </button>

            <button
              type="button"
              onClick={() => switchMode(true)}
              className={`rounded-lg py-3 text-sm font-bold transition ${
                isSignup
                  ? "bg-white text-blue-700 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Sign Up
            </button>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={
            showForgotPassword
              ? handleForgotPassword
              : handleSubmit
          }
          className="space-y-5"
        >

          {/* Full Name */}
          {isSignup && !showForgotPassword && (
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
                autoComplete="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>

            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                ✉
              </span>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 py-3.5 pl-11 pr-4 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Password */}
          {!showForgotPassword && (
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                {!isSignup && (
                  <button
                    type="button"
                    onClick={() => {
                      setShowForgotPassword(true);
                      setMessage("");
                    }}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-800"
                  >
                    Forgot Password?
                  </button>
                )}
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  🔒
                </span>

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete={
                    isSignup ? "new-password" : "current-password"
                  }
                  placeholder={
                    isSignup
                      ? "Create a password"
                      : "Enter your password"
                  }
                  value={formData.password}
                  onChange={handleChange}
                  minLength={isSignup ? 8 : undefined}
                  required
                  className="w-full rounded-xl border border-gray-300 py-3.5 pl-11 pr-20 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-blue-600 hover:text-blue-800"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {isSignup && (
                <p className="mt-2 text-xs text-gray-500">
                  Use at least 8 characters for your password.
                </p>
              )}
            </div>
          )}

          {/* Confirm Password */}
          {isSignup && !showForgotPassword && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Confirm Password
              </label>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength={8}
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>
          )}

          {/* Remember Me */}
          {!isSignup && !showForgotPassword && (
            <div className="flex items-center gap-3">
              <input
                id="rememberMe"
                type="checkbox"
                checked={rememberMe}
                onChange={(event) =>
                  setRememberMe(event.target.checked)
                }
                className="h-4 w-4 rounded accent-blue-600"
              />

              <label
                htmlFor="rememberMe"
                className="text-sm text-gray-600"
              >
                Remember me on this device
              </label>
            </div>
          )}

          {/* Status Message */}
          {message && (
            <div
              role="status"
              className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-800"
            >
              {message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            {showForgotPassword
              ? "Continue to Recovery →"
              : isSignup
                ? "Create Account →"
                : "Sign In →"}
          </button>

          {/* Back to Login */}
          {showForgotPassword && (
            <button
              type="button"
              onClick={() => {
                setShowForgotPassword(false);
                setMessage("");
              }}
              className="w-full rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              ← Back to Login
            </button>
          )}
        </form>

        {/* Bottom Text */}
        {!showForgotPassword && (
          <p className="mt-7 text-center text-sm text-gray-600">
            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}{" "}

            <button
              type="button"
              onClick={() => switchMode(!isSignup)}
              className="font-bold text-blue-600 hover:text-blue-800"
            >
              {isSignup ? "Login" : "Create Account"}
            </button>
          </p>
        )}

        <div className="mt-8 border-t border-gray-200 pt-5 text-center">
          <p className="text-xs leading-5 text-gray-500">
            By continuing, you agree to use E-Tech in accordance
            with its applicable terms and privacy policy.
          </p>

          <Link
            to="/"
            className="mt-4 inline-block text-sm font-semibold text-gray-600 transition hover:text-blue-600"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </section>
  </div>
</main>
  </>

);
}

export default Login;
