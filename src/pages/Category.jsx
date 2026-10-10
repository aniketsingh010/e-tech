
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Categories() {
  const [search, setSearch] = useState("");

  const categories = [
    {
      id: 1,
      name: "Laptops & Computers",
      description: "Powerful laptops for work, study and gaming.",
      icon: "💻",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700",
      products: "Laptops, Desktops, Keyboards",
      color: "bg-blue-50",
    },
    {
      id: 2,
      name: "Smartphones",
      description: "Discover the latest smartphones and accessories.",
      icon: "📱",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700",
      products: "Android Phones, Accessories",
      color: "bg-purple-50",
    },
    {
      id: 3,
      name: "Headphones & Audio",
      description: "Enjoy music with an immersive audio experience.",
      icon: "🎧",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
      products: "Headphones, Earbuds, Speakers",
      color: "bg-pink-50",
    },
    {
      id: 4,
      name: "Smartwatches",
      description: "Smart wearable technology for everyday life.",
      icon: "⌚",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
      products: "Smartwatches, Fitness Bands",
      color: "bg-green-50",
    },
    {
      id: 5,
      name: "Cameras",
      description: "Capture special moments with modern cameras.",
      icon: "📷",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700",
      products: "Digital Cameras, Lenses",
      color: "bg-orange-50",
    },
    {
      id: 6,
      name: "Gaming",
      description: "Level up your gaming experience.",
      icon: "🎮",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=700",
      products: "Gaming Consoles, Controllers",
      color: "bg-indigo-50",
    },
    {
      id: 7,
      name: "Monitors & Displays",
      description: "Enjoy clear visuals on modern displays.",
      icon: "🖥️",
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700",
      products: "Monitors, Display Accessories",
      color: "bg-cyan-50",
    },
    {
      id: 8,
      name: "Accessories",
      description: "Useful gadgets for your everyday technology.",
      icon: "🔌",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700",
      products: "Chargers, Cables, Adapters",
      color: "bg-yellow-50",
    },
  ];

  // Search categories by name or description
  const filteredCategories = categories.filter((category) => {
    const searchText = search.toLowerCase();

    return (
      category.name.toLowerCase().includes(searchText) ||
      category.description.toLowerCase().includes(searchText) ||
      category.products.toLowerCase().includes(searchText)
    );
  });

  return (
    <>
    <Navbar/>
     <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">

          <div className="max-w-3xl">
            <p className="text-blue-200 uppercase tracking-widest text-sm font-semibold">
              Explore E-Tech
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
              Explore Our
              <br />
              Product Categories
            </h1>

            <p className="text-blue-100 text-lg mt-6 leading-8">
              Discover electronics, smart devices and useful gadgets.
              Find the technology that fits your everyday needs.
            </p>

            <a
              href="#all-categories"
              className="inline-block mt-8 bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Explore Categories ↓
            </a>
          </div>

        </div>
      </section>

      {/* Category Introduction */}
      <section className="px-6 pt-14">
        <div className="max-w-7xl mx-auto text-center">

          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
            Find Your Favorites
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
            Shop By Category
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-7">
            Browse our electronics categories to explore different
            products in one convenient place.
          </p>

        </div>
      </section>

      {/* Search Bar */}
      <section className="px-6 py-8">
        <div className="max-w-xl mx-auto">

          <div className="flex items-center gap-3 border border-gray-300 rounded-2xl px-5 py-3 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
            <span className="text-2xl">🔍</span>

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search categories..."
              aria-label="Search categories"
              className="w-full outline-none text-gray-700 bg-transparent"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="text-gray-500 hover:text-gray-900 font-semibold"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Categories Grid */}
      <section id="all-categories" className="px-6 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-8">

            <h2 className="text-2xl font-bold text-gray-900">
              All Categories
            </h2>

            <p className="text-gray-500">
              Showing {filteredCategories.length} of {categories.length} categories
            </p>

          </div>

          {filteredCategories.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 rounded-2xl">
              <p className="text-5xl">🔎</p>

              <h3 className="text-2xl font-bold mt-4">
                No Categories Found
              </h3>

              <p className="text-gray-500 mt-2">
                Try searching with another category name.
              </p>

              <button
                type="button"
                onClick={() => setSearch("")}
                className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

              {filteredCategories.map((category) => (
                <div
                  key={category.id}
                  className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
                >

                  {/* Category Image */}
                  <div className={`relative ${category.color} p-5`}>
                    <span className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                      {category.icon} Category
                    </span>

                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                      className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Category Details */}
                  <div className="p-5">

                    <h3 className="text-xl font-bold text-gray-900">
                      {category.name}
                    </h3>

                    <p className="text-gray-500 text-sm leading-6 mt-3">
                      {category.description}
                    </p>

                    <p className="text-blue-600 text-sm font-medium mt-4">
                      {category.products}
                    </p>

                    <Link
                      to={`/products?category=${encodeURIComponent(category.name)}`}
                      className="flex items-center justify-between gap-2 mt-5 pt-4 border-t border-gray-100 text-blue-600 font-semibold hover:text-blue-800 transition"
                    >
                      <span>Explore Products</span>
                      <span className="text-xl">→</span>
                    </Link>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>
      </section>

      {/* Bottom Call To Action */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-700 to-purple-700 rounded-3xl p-8 md:p-14 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Find the Right Tech for You
          </h2>

          <p className="text-blue-100 mt-4 max-w-2xl mx-auto leading-7">
            Explore our product collection and discover devices
            for work, entertainment and everyday life.
          </p>

          <Link
            to="/products"
            className="inline-block mt-7 bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            View All Products →
          </Link>

        </div>
      </section>

    </div>
    <Footer/>
    </>
   
  );
}

export default Categories;
