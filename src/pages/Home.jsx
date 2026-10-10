import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
  <>
  <Navbar/>
  <div>
    {/* Shop By Category Section */}
<section className="bg-white py-16 px-6">

  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-12">

      <p className="text-blue-600 font-semibold uppercase tracking-widest">
        Explore Our Collection
      </p>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3">
        Shop By Category
      </h2>

      <p className="text-gray-500 mt-4">
        Find the best electronics for your everyday needs.
      </p>

    </div>

    {/* Category Cards */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

      {/* Laptop */}
      <div className="group bg-gray-50 rounded-2xl p-5 text-center hover:bg-blue-50 hover:shadow-lg transition duration-300 cursor-pointer">

        <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
          💻
        </div>

        <h3 className="font-bold text-gray-800">
          Laptops
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Explore laptops
        </p>

      </div>

      {/* Smartphones */}
      <div className="group bg-gray-50 rounded-2xl p-5 text-center hover:bg-blue-50 hover:shadow-lg transition duration-300 cursor-pointer">

        <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
          📱
        </div>

        <h3 className="font-bold text-gray-800">
          Smartphones
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Latest mobiles
        </p>

      </div>

      {/* Headphones */}
      <div className="group bg-gray-50 rounded-2xl p-5 text-center hover:bg-blue-50 hover:shadow-lg transition duration-300 cursor-pointer">

        <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
          🎧
        </div>

        <h3 className="font-bold text-gray-800">
          Headphones
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Quality sound
        </p>

      </div>

      {/* Smartwatch */}
      <div className="group bg-gray-50 rounded-2xl p-5 text-center hover:bg-blue-50 hover:shadow-lg transition duration-300 cursor-pointer">

        <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
          ⌚
        </div>

        <h3 className="font-bold text-gray-800">
          Smartwatches
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Smart lifestyle
        </p>

      </div>

      {/* Gaming */}
      <div className="group bg-gray-50 rounded-2xl p-5 text-center hover:bg-blue-50 hover:shadow-lg transition duration-300 cursor-pointer">

        <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
          🎮
        </div>

        <h3 className="font-bold text-gray-800">
          Gaming
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Gaming gadgets
        </p>

      </div>

      {/* Cameras */}
      <div className="group bg-gray-50 rounded-2xl p-5 text-center hover:bg-blue-50 hover:shadow-lg transition duration-300 cursor-pointer">

        <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
          📷
        </div>

        <h3 className="font-bold text-gray-800">
          Cameras
        </h3>

        <p className="text-sm text-gray-500 mt-2">
          Capture moments
        </p>

      </div>

    </div>

  </div>

</section>
  </div>
  <div>
    {/* Featured Products Section */}
<section className="bg-gray-50 py-16 px-6">

  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-10">

      <div>
        <p className="text-blue-600 font-semibold uppercase tracking-widest">
          Our Collection
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Featured Products
        </h2>

        <p className="text-gray-500 mt-3">
          Discover our popular electronics and gadgets.
        </p>
      </div>

      <button className="mt-5 md:mt-0 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition">
        View All Products →
      </button>

    </div>

    {/* Product Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

      {/* Product 1: Laptop */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">

        <div className="relative bg-gray-100 p-4">

          <span className="absolute top-5 left-5 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
            Featured
          </span>

          <button
            type="button"
            aria-label="Add laptop to wishlist"
            className="absolute top-5 right-5 bg-white rounded-full w-9 h-9"
          >
            ♡
          </button>

          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
            alt="Laptop"
            className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition duration-300"
          />

        </div>

        <div className="p-5">

          <p className="text-sm text-gray-500">Computers</p>

          <h3 className="text-lg font-bold mt-1">
            Premium Laptop
          </h3>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">(4.5)</span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-xl font-bold text-blue-600">
              ₹55,999
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹65,999
            </span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>

      {/* Product 2: Smartphone */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">

        <div className="relative bg-gray-100 p-4">

          <span className="absolute top-5 left-5 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
            Popular
          </span>

          <button
            type="button"
            aria-label="Add smartphone to wishlist"
            className="absolute top-5 right-5 bg-white rounded-full w-9 h-9"
          >
            ♡
          </button>

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
            alt="Smartphone"
            className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition duration-300"
          />

        </div>

        <div className="p-5">

          <p className="text-sm text-gray-500">Mobiles</p>

          <h3 className="text-lg font-bold mt-1">
            Smart Phone
          </h3>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">(4.8)</span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-xl font-bold text-blue-600">
              ₹24,999
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹29,999
            </span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>

      {/* Product 3: Headphones */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">

        <div className="relative bg-gray-100 p-4">

          <span className="absolute top-5 left-5 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
            Trending
          </span>

          <button
            type="button"
            aria-label="Add headphones to wishlist"
            className="absolute top-5 right-5 bg-white rounded-full w-9 h-9"
          >
            ♡
          </button>

          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
            alt="Headphones"
            className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition duration-300"
          />

        </div>

        <div className="p-5">

          <p className="text-sm text-gray-500">Audio</p>

          <h3 className="text-lg font-bold mt-1">
            Wireless Headphones
          </h3>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">(4.4)</span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-xl font-bold text-blue-600">
              ₹2,499
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹3,499
            </span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>

      {/* Product 4: Smartwatch */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">

        <div className="relative bg-gray-100 p-4">

          <span className="absolute top-5 left-5 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
            New
          </span>

          <button
            type="button"
            aria-label="Add smartwatch to wishlist"
            className="absolute top-5 right-5 bg-white rounded-full w-9 h-9"
          >
            ♡
          </button>

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
            alt="Smartwatch"
            className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition duration-300"
          />

        </div>

        <div className="p-5">

          <p className="text-sm text-gray-500">Wearables</p>

          <h3 className="text-lg font-bold mt-1">
            Smart Watch
          </h3>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">★★★★★</span>
            <span className="text-sm text-gray-500">(4.6)</span>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-xl font-bold text-blue-600">
              ₹3,499
            </span>

            <span className="text-sm text-gray-400 line-through">
              ₹4,499
            </span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>

    </div>

  </div>

</section>
  </div>
  <div>
    {/* Special Offers Banner */}
<section className="px-6 py-16">

  <div className="max-w-7xl mx-auto">

    <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 rounded-3xl overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Left Content */}
        <div className="p-8 md:p-14 text-white">

          <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            🔥 Special Offer
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
            Upgrade Your Tech
            <br />
            For Less!
          </h2>

          <p className="text-blue-100 mt-5 text-lg">
            Discover amazing deals on the latest laptops,
            smartphones and electronic gadgets.
          </p>

          <div className="mt-6">
            <p className="text-sm text-blue-100">
              Exclusive deals on selected products
            </p>

            <p className="text-2xl font-bold mt-2">
              Great Products. Great Prices.
            </p>
          </div>

          <button
            type="button"
            className="mt-8 bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition duration-300"
          >
            Shop Now →
          </button>

        </div>

        {/* Right Image */}
        <div className="p-8 md:p-10">

          <img
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900"
            alt="Electronic gadgets special offer"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl"
          />

        </div>

      </div>

    </div>

  </div>

</section>
  </div>
  <div>
    ```jsx
{/* Best Sellers Section */}
<section className="px-6 py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
      <div>
        <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
          Customer Favorites
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Best Sellers
        </h2>

        <p className="text-gray-500 mt-3">
          Explore our most popular electronics and gadgets.
        </p>
      </div>

      <button
        type="button"
        className="mt-5 sm:mt-0 border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
      >
        View All Products →
      </button>
    </div>

    {/* Product Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

      {/* Product 1 - Laptop */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
        <div className="relative bg-gray-100 p-5">
          <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            BESTSELLER
          </span>

          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600"
            alt="Laptop"
            className="w-full h-48 object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">Computers</p>

          <h3 className="text-lg font-bold text-gray-900 mt-1">
            Premium Laptop
          </h3>

          <p className="text-yellow-500 mt-2">
            ★★★★★ <span className="text-gray-500 text-sm">(128 reviews)</span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-xl font-bold text-gray-900">₹54,999</span>
            <span className="text-sm text-gray-400 line-through">₹64,999</span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Add to Cart +
          </button>
        </div>
      </div>

      {/* Product 2 - Smartphone */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
        <div className="relative bg-gray-100 p-5">
          <span className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            POPULAR
          </span>

          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600"
            alt="Smartphone"
            className="w-full h-48 object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">Smartphones</p>

          <h3 className="text-lg font-bold text-gray-900 mt-1">
            Smart Smartphone
          </h3>

          <p className="text-yellow-500 mt-2">
            ★★★★★ <span className="text-gray-500 text-sm">(96 reviews)</span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-xl font-bold text-gray-900">₹24,999</span>
            <span className="text-sm text-gray-400 line-through">₹29,999</span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Add to Cart +
          </button>
        </div>
      </div>

      {/* Product 3 - Wireless Earbuds */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
        <div className="relative bg-gray-100 p-5">
          <span className="absolute top-4 left-4 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            TRENDING
          </span>

          <img
            src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600"
            alt="Wireless Earbuds"
            className="w-full h-48 object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">Audio</p>

          <h3 className="text-lg font-bold text-gray-900 mt-1">
            Wireless Earbuds
          </h3>

          <p className="text-yellow-500 mt-2">
            ★★★★☆ <span className="text-gray-500 text-sm">(84 reviews)</span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-xl font-bold text-gray-900">₹1,999</span>
            <span className="text-sm text-gray-400 line-through">₹2,999</span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Add to Cart +
          </button>
        </div>
      </div>

      {/* Product 4 - Smartwatch */}
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group">
        <div className="relative bg-gray-100 p-5">
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            TOP RATED
          </span>

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
            alt="Smartwatch"
            className="w-full h-48 object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">Wearables</p>

          <h3 className="text-lg font-bold text-gray-900 mt-1">
            Premium Smartwatch
          </h3>

          <p className="text-yellow-500 mt-2">
            ★★★★★ <span className="text-gray-500 text-sm">(112 reviews)</span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-xl font-bold text-gray-900">₹3,499</span>
            <span className="text-sm text-gray-400 line-through">₹4,999</span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Add to Cart +
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

  </div>
  <div>
    ```jsx
{/* New Arrivals Section */}
<section className="px-6 py-16 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* Section Heading */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
      <div>
        <p className="text-purple-600 font-semibold uppercase tracking-wider text-sm">
          Just Launched
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          New Arrivals
        </h2>

        <p className="text-gray-500 mt-3">
          Discover the latest technology and upgrade your lifestyle.
        </p>
      </div>

      <button
        type="button"
        className="mt-5 sm:mt-0 border border-purple-600 text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-600 hover:text-white transition duration-300"
      >
        Explore More →
      </button>
    </div>

    {/* Product Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

      {/* Product 1 - Gaming Laptop */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group">

        <div className="relative bg-gray-100 p-5">
          <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </span>

          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600"
            alt="Gaming Laptop"
            className="w-full h-48 object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">Computers</p>

          <h3 className="text-lg font-bold text-gray-900 mt-1">
            Gaming Laptop
          </h3>

          <p className="text-yellow-500 mt-2">
            ★★★★★ <span className="text-gray-500 text-sm">(New product)</span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-xl font-bold text-gray-900">₹69,999</span>
            <span className="text-sm text-gray-400 line-through">₹79,999</span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Add to Cart +
          </button>
        </div>
      </div>

      {/* Product 2 - Tablet */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group">

        <div className="relative bg-gray-100 p-5">
          <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </span>

          <img
            src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600"
            alt="Tablet"
            className="w-full h-48 object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">Tablets</p>

          <h3 className="text-lg font-bold text-gray-900 mt-1">
            Smart Tablet
          </h3>

          <p className="text-yellow-500 mt-2">
            ★★★★☆ <span className="text-gray-500 text-sm">(New product)</span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-xl font-bold text-gray-900">₹32,999</span>
            <span className="text-sm text-gray-400 line-through">₹37,999</span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Add to Cart +
          </button>
        </div>
      </div>

      {/* Product 3 - Headphones */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group">

        <div className="relative bg-gray-100 p-5">
          <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </span>

          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
            alt="Wireless Headphones"
            className="w-full h-48 object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">Audio</p>

          <h3 className="text-lg font-bold text-gray-900 mt-1">
            Wireless Headphones
          </h3>

          <p className="text-yellow-500 mt-2">
            ★★★★★ <span className="text-gray-500 text-sm">(New product)</span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-xl font-bold text-gray-900">₹4,499</span>
            <span className="text-sm text-gray-400 line-through">₹5,999</span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Add to Cart +
          </button>
        </div>
      </div>

      {/* Product 4 - Digital Camera */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300 group">

        <div className="relative bg-gray-100 p-5">
          <span className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            NEW
          </span>

          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600"
            alt="Digital Camera"
            className="w-full h-48 object-contain group-hover:scale-105 transition duration-300"
          />
        </div>

        <div className="p-5">
          <p className="text-sm text-gray-500">Photography</p>

          <h3 className="text-lg font-bold text-gray-900 mt-1">
            Digital Camera
          </h3>

          <p className="text-yellow-500 mt-2">
            ★★★★☆ <span className="text-gray-500 text-sm">(New product)</span>
          </p>

          <div className="flex items-center gap-3 mt-3">
            <span className="text-xl font-bold text-gray-900">₹42,999</span>
            <span className="text-sm text-gray-400 line-through">₹49,999</span>
          </div>

          <button
            type="button"
            className="w-full mt-5 bg-purple-600 text-white py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
          >
            Add to Cart +
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
  </div> 
 {/*  */}
  <Footer/> 
  
  </>
  )
}
<Navbar/>

export default Home