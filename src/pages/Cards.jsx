import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cards() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "Premium Laptop",
      category: "Laptops",
      price: 45999,
      oldPrice: 52999,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Smartphone Pro",
      category: "Mobiles",
      price: 24999,
      oldPrice: 29999,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      badge: "Popular",
    },
    {
      id: 3,
      name: "Wireless Headphones",
      category: "Audio",
      price: 2499,
      oldPrice: 3499,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
      badge: "Sale",
    },
    {
      id: 4,
      name: "Smart Watch",
      category: "Wearables",
      price: 1999,
      oldPrice: 2999,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
      badge: "Trending",
    },
    {
      id: 5,
      name: "Digital Camera",
      category: "Cameras",
      price: 18999,
      oldPrice: 22999,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      badge: "New",
    },
    {
      id: 6,
      name: "Gaming Headset",
      category: "Audio",
      price: 2999,
      oldPrice: 3999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
      badge: "Hot Deal",
    },
    {
      id: 7,
      name: "Wireless Earbuds",
      category: "Audio",
      price: 1499,
      oldPrice: 1999,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
      badge: "Sale",
    },
    {
      id: 8,
      name: "Computer Monitor",
      category: "Accessories",
      price: 11999,
      oldPrice: 14999,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
      badge: "Featured",
    },
  ];

  const categories = [
    "All",
    "Laptops",
    "Mobiles",
    "Audio",
    "Wearables",
    "Cameras",
    "Accessories",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  const addToCart = (product) => {
    setCartCount((previousCount) => previousCount + 1);
    alert(`${product.name} added to cart!`);
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 px-5 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-200">
            Welcome to E-Tech
          </p>

          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Discover Our Products
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-blue-100">
            Explore the latest electronics, amazing deals, and
            smart gadgets for your everyday life.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="rounded-xl bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              All Products
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-white/50 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* PAGE CONTENT */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="font-semibold text-blue-600">OUR COLLECTION</p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Shop Electronics
            </h2>

            <p className="mt-2 text-gray-500">
              Find the right gadget for you.
            </p>
          </div>

          <div className="rounded-xl bg-white px-5 py-3 shadow-sm">
            <span className="text-sm text-gray-500">Cart Items: </span>
            <span className="font-bold text-blue-600">{cartCount}</span>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search your favourite products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>

        {/* CATEGORY FILTER */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* PRODUCT COUNT */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">
            Featured Products
          </h3>

          <p className="text-sm text-gray-500">
            {filteredProducts.length} products found
          </p>
        </div>

        {/* PRODUCT CARDS */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => {
              const discount = Math.round(
                ((product.oldPrice - product.price) /
                  product.oldPrice) *
                  100
              );

              return (
                <div
                  key={product.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    <span className="absolute left-3 top-3 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-bold text-white">
                      {product.badge}
                    </span>

                    <span className="absolute right-3 top-3 rounded-lg bg-red-500 px-3 py-1.5 text-xs font-bold text-white">
                      {discount}% OFF
                    </span>
                  </div>

                  {/* CARD DETAILS */}
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-gray-900 transition group-hover:text-blue-600">
                      {product.name}
                    </h3>

                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-semibold text-gray-700">
                        {product.rating}
                      </span>
                      <span className="text-xs text-gray-400">
                        Customer Rating
                      </span>
                    </div>

                    {/* PRICE */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <span className="text-xl font-extrabold text-gray-900">
                        {formatPrice(product.price)}
                      </span>

                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-medium text-green-600">
                      You save {formatPrice(product.oldPrice - product.price)}
                    </p>

                    {/* BUTTONS */}
                    <div className="mt-5 flex gap-2">
                      <button
                        onClick={() => addToCart(product)}
                        className="flex-1 rounded-xl bg-blue-600 px-3 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                      >
                        Add to Cart
                      </button>

                      <Link
                        to={`/product-details?id=${product.id}`}
                        className="flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-bold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl bg-white px-5 py-16 text-center shadow-sm">
            <div className="text-5xl">🔍</div>

            <h3 className="mt-4 text-xl font-bold text-gray-900">
              No Products Found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another search or select a different category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-5 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* BOTTOM BANNER */}
      <section className="mx-4 mb-12 overflow-hidden rounded-3xl bg-blue-50 sm:mx-6 lg:mx-auto lg:max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row md:px-12 md:text-left">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Ready to Upgrade Your Tech?
            </h2>

            <p className="mt-3 text-gray-600">
              Explore our collection and find your next favourite gadget.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white transition hover:bg-blue-700"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </div>
    <Footer/>
    </>
    
  );
}

export default Cards;