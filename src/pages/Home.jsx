
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const categories = [
  { name: "Laptops", icon: "💻", description: "Powerful performance", color: "bg-blue-100" },
  { name: "Smartphones", icon: "📱", description: "Latest smartphones", color: "bg-purple-100" },
  { name: "Headphones", icon: "🎧", description: "Premium sound", color: "bg-orange-100" },
  { name: "Smartwatches", icon: "⌚", description: "Smart lifestyle", color: "bg-green-100" },
  { name: "Gaming", icon: "🎮", description: "Level up gaming", color: "bg-pink-100" },
  { name: "Cameras", icon: "📷", description: "Capture moments", color: "bg-yellow-100" },
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
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Smartphone Pro",
    category: "Smartphones",
    price: 24999,
    oldPrice: 29999,
    rating: 4.9,
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Audio",
    price: 2499,
    oldPrice: 3499,
    rating: 4.6,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Premium Smartwatch",
    category: "Wearables",
    price: 3499,
    oldPrice: 4999,
    rating: 4.7,
    badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Modern Laptop",
    category: "Computers",
    price: 64999,
    oldPrice: 74999,
    rating: 4.8,
    badge: "NEW ARRIVAL",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Wireless Camera",
    category: "Cameras",
    price: 18999,
    oldPrice: 22999,
    rating: 4.5,
    badge: "POPULAR",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Gaming Headset",
    category: "Gaming",
    price: 3999,
    oldPrice: 4999,
    rating: 4.6,
    badge: "TRENDING",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Smartphone Plus",
    category: "Smartphones",
    price: 32999,
    oldPrice: 37999,
    rating: 4.9,
    badge: "BEST SELLER",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=800&q=80",
  },
];

function Home() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const handleAddToCart = (product) => {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === product.id);

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });
  };

  const handleWishlist = (productId) => {
    setWishlist((previous) =>
      previous.includes(productId)
        ? previous.filter((id) => id !== productId)
        : [...previous, productId]
    );
  };

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubscribed(true);
    setEmail("");
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const newArrivals = products.filter(
    (product) => product.badge === "NEW ARRIVAL"
  );

  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-white text-gray-900">

        {/* HERO SECTION */}
        <section className="relative bg-slate-950 text-white">
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:px-10">

            <div>
              <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
                ✨ Welcome to E-Tech Store
              </span>

              <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Upgrade Your
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital World
                </span>
              </h1>

              <p className="mt-6 max-w-xl leading-8 text-gray-300">
                Discover the latest laptops, smartphones, headphones
                and smart gadgets at exciting prices. Find your next
                favourite technology with E-Tech.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-500"
                >
                  Shop Now →
                </Link>

                <Link
                  to="/categories"
                  className="rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:bg-white/10"
                >
                  Explore Categories
                </Link>
              </div>

              <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-7">
                <div>
                  <p className="text-3xl font-extrabold">100+</p>
                  <p className="mt-1 text-sm text-gray-400">Products</p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold">24/7</p>
                  <p className="mt-1 text-sm text-gray-400">Support</p>
                </div>

                <div>
                  <p className="text-3xl font-extrabold">100%</p>
                  <p className="mt-1 text-sm text-gray-400">Dedication</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1000&q=85"
                  alt="Electronics collection"
                  className="h-72 w-full rounded-2xl object-cover sm:h-96"
                />
              </div>

              <div className="absolute -bottom-5 left-3 rounded-2xl bg-white p-4 text-gray-900 shadow-xl sm:left-0">
                <p className="text-sm text-gray-500">Discover something new</p>
                <p className="mt-1 font-extrabold">Tech for Everyone ✨</p>
              </div>
            </div>

          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="border-b bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 sm:px-8 md:grid-cols-4 lg:px-10">
            {[
              ["🚚", "Fast Delivery", "Convenient delivery options"],
              ["🔒", "Secure Shopping", "Shop with confidence"],
              ["💬", "Customer Support", "We're here to help"],
              ["🎁", "Special Deals", "Explore product offers"],
            ].map(([icon, title, description]) => (
              <div key={title} className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                  {icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold sm:text-base">{title}</h3>
                  <p className="mt-1 text-xs text-gray-500">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                Explore Our Collection
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Shop By Category
              </h2>
              <p className="mt-4 text-gray-500">
                Find the right gadgets for your everyday needs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <button
                  type="button"
                  key={category.name}
                  onClick={() => {
                    setSelectedCategory(
                      category.name === "Laptops"
                        ? "Computers"
                        : category.name === "Headphones"
                          ? "Audio"
                          : category.name === "Smartwatches"
                            ? "Wearables"
                            : category.name
                    );

                    document
                      .getElementById("featured-products")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 text-center transition hover:-translate-y-2 hover:shadow-xl sm:p-6"
                >
                  <div className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} text-4xl transition group-hover:scale-110`}>
                    {category.icon}
                  </div>
                  <h3 className="mt-4 font-bold">{category.name}</h3>
                  <p className="mt-2 text-xs text-gray-500">
                    {category.description}
                  </p>
                  <p className="mt-3 text-sm font-bold text-blue-600">
                    Explore →
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FLASH SALE */}
        <section className="px-5 py-12 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-8 text-white shadow-xl sm:p-12">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-bold">
                  🔥 SPECIAL COLLECTION
                </span>

                <h2 className="mt-6 text-4xl font-extrabold sm:text-5xl">
                  Flash Sale!
                </h2>

                <p className="mt-4 leading-7 text-white/90">
                  Discover amazing deals on selected electronics.
                  Find your next favourite gadget today.
                </p>

                <Link
                  to="/products"
                  className="mt-7 inline-block rounded-xl bg-white px-7 py-4 font-bold text-red-600 transition hover:-translate-y-1"
                >
                  Shop Deals →
                </Link>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm">
                <p className="font-bold uppercase tracking-widest">
                  Demo Countdown
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    [hours, "Hours"],
                    [minutes, "Minutes"],
                    [seconds, "Seconds"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-xl bg-white p-4 text-gray-900">
                      <p className="text-3xl font-extrabold">{value}</p>
                      <p className="mt-1 text-xs font-semibold">{label}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-xs text-white/90">
                  Demo timer resets when the page is refreshed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section id="featured-products" className="px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="font-bold uppercase tracking-widest text-blue-600">
                  Handpicked For You
                </p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  Featured Products
                </h2>
                <p className="mt-3 text-gray-500">
                  Find your favourite electronics and gadgets.
                </p>
              </div>

              <Link
                to="/products"
                className="font-bold text-blue-600 hover:underline"
              >
                View All Products →
              </Link>
            </div>

            {/* SEARCH AND FILTER */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2">
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="🔍 Search products..."
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />

              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none focus:border-blue-500"
              >
                <option value="All">All Categories</option>
                <option value="Computers">Laptops</option>
                <option value="Smartphones">Smartphones</option>
                <option value="Audio">Headphones</option>
                <option value="Wearables">Smartwatches</option>
                <option value="Cameras">Cameras</option>
                <option value="Gaming">Gaming</option>
              </select>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => {
                const discount = Math.round(
                  ((product.oldPrice - product.price) / product.oldPrice) * 100
                );

                const isWishlisted = wishlist.includes(product.id);

                return (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="relative overflow-hidden bg-gray-50 p-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-56 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                      />

                      <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">
                        {product.badge}
                      </span>

                      <span className="absolute bottom-5 left-5 rounded-lg bg-red-500 px-3 py-1.5 text-xs font-bold text-white">
                        {discount}% OFF
                      </span>

                      <button
                        type="button"
                        onClick={() => handleWishlist(product.id)}
                        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
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

                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {product.category}
                      </p>

                      <h3 className="mt-2 text-lg font-bold group-hover:text-blue-600">
                        {product.name}
                      </h3>

                      <div className="mt-3 flex items-center gap-2">
                        <span className="tracking-widest text-amber-500">
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
                        You save {formatPrice(product.oldPrice - product.price)}
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

            {filteredProducts.length === 0 && (
              <div className="rounded-2xl bg-gray-50 px-5 py-12 text-center">
                <p className="text-4xl">🔍</p>
                <h3 className="mt-4 text-xl font-bold">No products found</h3>
                <p className="mt-2 text-gray-500">
                  Try another search or category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                  className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white"
                >
                  Clear Filters
                </button>
              </div>
            )}

            <div className="mt-8 rounded-2xl bg-blue-50 p-5 text-center">
              <p className="font-semibold text-blue-900">
                🛒 Items in your demo cart:{" "}
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </p>
              <p className="mt-1 text-sm text-blue-700">
                Cart data is currently stored in this Home page only.
              </p>
            </div>

          </div>
        </section>

        {/* NEW ARRIVALS */}
        <section className="bg-gray-50 px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="mb-10">
              <p className="font-bold uppercase tracking-widest text-purple-600">
                Just Arrived
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                New Arrivals ✨
              </h2>
              <p className="mt-3 text-gray-500">
                Discover the latest additions to our collection.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {newArrivals.map((product) => (
                <article
                  key={product.id}
                  className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-xl sm:flex-row"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-64 w-full object-cover sm:h-auto sm:w-2/5"
                  />

                  <div className="flex flex-1 flex-col justify-center p-6">
                    <span className="w-fit rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      NEW ARRIVAL
                    </span>

                    <h3 className="mt-4 text-xl font-extrabold">
                      {product.name}
                    </h3>

                    <p className="mt-3 text-2xl font-extrabold text-blue-600">
                      {formatPrice(product.price)}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      {product.rating} ★ Customer rating
                    </p>

                    <Link
                      to={`/product-details?id=${product.id}`}
                      className="mt-5 inline-block w-fit rounded-xl bg-gray-900 px-5 py-3 font-bold text-white transition hover:bg-blue-600"
                    >
                      Explore Product →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-7xl">

            <div className="mb-10 text-center">
              <p className="font-bold uppercase tracking-widest text-blue-600">
                The E-Tech Experience
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Why Choose E-Tech?
              </h2>
              <p className="mt-3 text-gray-500">
                Making your shopping experience simple and convenient.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["🛍️", "Easy Shopping", "Browse product collections with a simple and friendly interface."],
                ["💡", "Explore Technology", "Discover electronics and compare products to find what suits you."],
                ["💬", "Get in Touch", "Have a question? Visit our contact page for support options."],
              ].map(([icon, title, description]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gray-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                    {icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-7 text-gray-500">{description}</p>
                  {title === "Get in Touch" && (
                    <Link
                      to="/contact"
                      className="mt-4 inline-block font-bold text-blue-600 hover:underline"
                    >
                      Contact Us →
                    </Link>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="px-5 py-16 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-blue-50 px-6 py-12 text-center sm:px-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-3xl text-white shadow-lg">
              ✉️
            </div>

            <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
              Stay Updated With E-Tech
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-600">
              Discover new products, exciting collections and the latest
              additions to our demo store.
            </p>

            {subscribed ? (
              <div className="mt-7">
                <p className="font-bold text-green-700">
                  ✅ Your form has been submitted successfully!
                </p>
                <button
                  type="button"
                  onClick={() => setSubscribed(false)}
                  className="mt-3 font-semibold text-blue-600 hover:underline"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="mx-auto mt-7 flex max-w-xl flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
              Demo form only. Email addresses are not sent to a server.
            </p>
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="px-5 pb-16 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-slate-950 p-8 text-center text-white sm:p-12 md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Ready to Upgrade Your Tech?
              </h2>
              <p className="mt-3 text-gray-400">
                Explore our complete electronics collection.
              </p>
            </div>

            <Link
              to="/products"
              className="shrink-0 rounded-xl bg-blue-600 px-7 py-4 font-bold transition hover:bg-blue-500"
            >
              Explore All Products →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default Home;
