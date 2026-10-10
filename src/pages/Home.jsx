import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  {
    name: "Laptops",
    icon: "💻",
    description: "Powerful performance",
    color: "bg-blue-50",
    link: "/categories",
  },
  {
    name: "Smartphones",
    icon: "📱",
    description: "Latest smartphones",
    color: "bg-purple-50",
    link: "/categories",
  },
  {
    name: "Headphones",
    icon: "🎧",
    description: "Premium sound",
    color: "bg-orange-50",
    link: "/categories",
  },
  {
    name: "Smartwatches",
    icon: "⌚",
    description: "Smart lifestyle",
    color: "bg-green-50",
    link: "/categories",
  },
  {
    name: "Gaming",
    icon: "🎮",
    description: "Level up gaming",
    color: "bg-pink-50",
    link: "/categories",
  },
  {
    name: "Cameras",
    icon: "📷",
    description: "Capture moments",
    color: "bg-yellow-50",
    link: "/categories",
  },
];

const products = [
  {
    id: 1,
    name: "Premium Laptop",
    category: "Computers",
    price: 55999,
    oldPrice: 65999,
    rating: 4.8,
    badge: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Smartphone Pro",
    category: "Smartphones",
    price: 24999,
    oldPrice: 29999,
    rating: 4.9,
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Audio",
    price: 2499,
    oldPrice: 3499,
    rating: 4.6,
    badge: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Premium Smartwatch",
    category: "Wearables",
    price: 3499,
    oldPrice: 4999,
    rating: 4.7,
    badge: "NEW ARRIVAL",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
];

function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [wishlist, setWishlist] = useState([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  // Demo Add to Cart button
  const handleAddToCart = (product) => {
    setCartCount((count) => count + 1);
    alert(`${product.name} added to cart!`);
  };

  // Wishlist button
  const handleWishlist = (productId) => {
    setWishlist((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId]
    );
  };

  // Newsletter form
  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-gray-900">

        {/* ================= HERO SECTION ================= */}
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

          <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl"></div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:px-10">

            {/* Hero Text */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                Welcome to E-Tech Store
              </span>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Upgrade Your
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital World
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
                Discover the latest laptops, smartphones, headphones
                and smart gadgets at exciting prices. Find your next
                favourite technology with E-Tech.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-1 hover:bg-blue-500"
                >
                  Shop Now →
                </Link>

                <Link
                  to="/categories"
                  className="rounded-xl border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Explore Categories
                </Link>
              </div>

              {/* Hero Statistics */}
              <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-7">
                <div>
                  <p className="text-2xl font-extrabold sm:text-3xl">
                    100+
                  </p>
                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                    Products
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold sm:text-3xl">
                    24/7
                  </p>
                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                    Support
                  </p>
                </div>

                <div>
                  <p className="text-2xl font-extrabold sm:text-3xl">
                    100%
                  </p>
                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                    Dedication
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-0 scale-90 rounded-full bg-blue-500/20 blur-3xl"></div>

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                <img
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=85"
                  alt="Electronics and gadgets collection"
                  className="h-72 w-full rounded-2xl object-cover sm:h-96"
                />

                <div className="absolute -bottom-5 left-3 rounded-2xl border border-gray-100 bg-white p-4 text-gray-900 shadow-xl sm:-left-5 sm:p-5">
                  <p className="text-xs font-medium text-gray-500">
                    Discover something new
                  </p>
                  <p className="mt-1 text-lg font-extrabold">
                    Tech for Everyone ✨
                  </p>
                </div>

                <div className="absolute -right-2 top-7 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold shadow-xl sm:-right-5">
                  Explore. Discover. Shop.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= BENEFITS SECTION ================= */}
        <section className="border-b border-gray-100 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4 lg:px-10">

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                🚚
              </div>
              <div>
                <h3 className="text-sm font-bold sm:text-base">
                  Delivery Information
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Check delivery options
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-2xl">
                🔒
              </div>
              <div>
                <h3 className="text-sm font-bold sm:text-base">
                  Secure Shopping
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Shop with confidence
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-2xl">
                💬
              </div>
              <div>
                <h3 className="text-sm font-bold sm:text-base">
                  Customer Support
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  We're here to help
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                🎁
              </div>
              <div>
                <h3 className="text-sm font-bold sm:text-base">
                  Special Deals
                </h3>
                <p className="mt-1 text-xs text-gray-500">
                  Explore product offers
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ================= CATEGORIES SECTION ================= */}
        <section className="bg-gray-50 px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Explore Our Collection
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Shop By Category
              </h2>

              <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500">
                Find the right gadgets and electronics for your
                everyday needs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.link}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:p-6"
                >
                  <div
                    className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} text-4xl transition duration-300 group-hover:scale-110`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="mt-4 text-sm font-bold sm:text-base">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {category.description}
                  </p>

                  <p className="mt-3 text-sm font-bold text-blue-600">
                    Explore →
                  </p>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ================= FEATURED PRODUCTS ================= */}
        <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  Handpicked For You
                </p>

                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  Featured Products
                </h2>

                <p className="mt-3 text-gray-500">
                  Check out our popular electronics and gadgets.
                </p>
              </div>

              <Link
                to="/products"
                className="inline-flex items-center gap-2 font-bold text-blue-600 transition hover:gap-3"
              >
                View All Products →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((product) => {
                const discount = Math.round(
                  ((product.oldPrice - product.price) /
                    product.oldPrice) *
                    100
                );

                const isWishlisted = wishlist.includes(product.id);

                return (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    {/* Product Image */}
                    <div className="relative overflow-hidden bg-gray-50 p-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-56 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                      />

                      <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow">
                        {product.badge}
                      </span>

                      <span className="absolute bottom-5 left-5 rounded-lg bg-red-500 px-3 py-1.5 text-xs font-bold text-white">
                        {discount}% OFF
                      </span>

                      <button
                        type="button"
                        onClick={() => handleWishlist(product.id)}
                        aria-label={
                          isWishlisted
                            ? "Remove from wishlist"
                            : "Add to wishlist"
                        }
                        aria-pressed={isWishlisted}
                        className={`absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-xl shadow-md transition hover:scale-110 ${
                          isWishlisted
                            ? "bg-red-500 text-white"
                            : "bg-white text-gray-700 hover:text-red-500"
                        }`}
                      >
                        {isWishlisted ? "♥" : "♡"}
                      </button>
                    </div>

                    {/* Product Information */}
                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {product.category}
                      </p>

                      <h3 className="mt-2 text-lg font-bold transition group-hover:text-blue-600">
                        {product.name}
                      </h3>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-sm tracking-widest text-amber-500">
                          ★★★★★
                        </span>

                        <span className="text-sm font-semibold text-gray-600">
                          {product.rating}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="text-xl font-extrabold">
                          {formatPrice(product.price)}
                        </span>

                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(product.oldPrice)}
                        </span>
                      </div>

                      <p className="mt-2 text-xs font-semibold text-green-600">
                        You save{" "}
                        {formatPrice(product.oldPrice - product.price)}
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleAddToCart(product)}
                          className="rounded-xl bg-blue-600 px-3 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                        >
                          🛒 Add to Cart
                        </button>

                        <Link
                          to={`/product-details?id=${product.id}`}
                          className="flex items-center justify-center rounded-xl border border-gray-200 px-3 py-3 text-sm font-bold transition hover:border-blue-600 hover:text-blue-600"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                to="/products"
                className="inline-flex rounded-xl border border-gray-300 px-7 py-3.5 font-bold transition hover:border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Explore All Products →
              </Link>
            </div>

          </div>
        </section>

        {/* ================= SPECIAL OFFER SECTION ================= */}
        <section className="px-5 py-10 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700">

            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="px-7 py-10 text-white sm:px-12 md:py-14">
                <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
                  ⚡ Special Collection
                </span>

                <h2 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Find Your Next
                  <br />
                  Favourite Gadget
                </h2>

                <p className="mt-5 max-w-lg leading-7 text-blue-100">
                  Explore our product collection, compare features,
                  and discover electronics that fit your needs.
                </p>

                <Link
                  to="/products"
                  className="mt-7 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  Explore Products →
                </Link>
              </div>

              <div className="px-6 pb-8 md:px-8 md:py-8">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=85"
                  alt="Modern technology workspace"
                  loading="lazy"
                  className="h-64 w-full rounded-2xl object-cover shadow-2xl sm:h-80 md:h-96"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="bg-gray-50 px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="mb-10 text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                The E-Tech Experience
              </p>

              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Why Choose E-Tech?
              </h2>

              <p className="mt-3 text-gray-500">
                Making your online shopping experience simple and convenient.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  🛍️
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Easy Shopping
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  Browse product collections and explore your favourite
                  gadgets through a simple interface.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 text-3xl">
                  💡
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Explore Technology
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  Discover different electronics categories and compare
                  products to find what suits you.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-3xl">
                  💬
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Get in Touch
                </h3>

                <p className="mt-3 leading-7 text-gray-500">
                  Have a question about our demo store? Visit our contact
                  page to explore the support options.
                </p>

                <Link
                  to="/contact"
                  className="mt-4 inline-block font-bold text-blue-600 hover:underline"
                >
                  Contact Us →
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* ================= NEWSLETTER SECTION ================= */}
        <section className="px-5 py-16 sm:px-8 md:py-20 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-blue-50 px-6 py-10 text-center sm:px-12 sm:py-14">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white shadow-lg">
              ✉️
            </div>

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Stay Updated With E-Tech
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
              Explore our store and stay informed about product updates
              and the latest additions to our collection.
            </p>

            {subscribed ? (
              <p className="mt-6 font-semibold text-green-700">
                Your form has been submitted successfully!
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
                >
                  Subscribe →
                </button>
              </form>
            )}

            <p className="mt-4 text-xs text-gray-500">
              This demo form does not send or store emails.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;