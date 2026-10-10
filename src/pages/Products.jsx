import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const productList = [
{
id: 1,
name: "Premium Wireless Headphones",
category: "Headphones",
price: 2499,
oldPrice: 3499,
rating: 4.5,
reviews: 128,
badge: "Best Seller",
image:
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700",
},
{
id: 2,
name: "Smart Watch Series 8",
category: "Smartwatches",
price: 1999,
oldPrice: 2999,
rating: 4.3,
reviews: 96,
badge: "Popular",
image:
"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
},
{
id: 3,
name: "Professional Digital Camera",
category: "Cameras",
price: 8999,
oldPrice: 10999,
rating: 4.7,
reviews: 85,
badge: "Featured",
image:
"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700",
},
{
id: 4,
name: "Modern Laptop",
category: "Laptops",
price: 45999,
oldPrice: 52999,
rating: 4.6,
reviews: 210,
badge: "Hot Deal",
image:
"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700",
},
{
id: 5,
name: "Wireless Earbuds",
category: "Headphones",
price: 1499,
oldPrice: 1999,
rating: 4.2,
reviews: 145,
badge: "Trending",
image:
"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=700",
},
{
id: 6,
name: "Smartphone",
category: "Smartphones",
price: 18999,
oldPrice: 21999,
rating: 4.4,
reviews: 178,
badge: "New",
image:
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700",
},
{
id: 7,
name: "Gaming Headset",
category: "Gaming",
price: 2999,
oldPrice: 3999,
rating: 4.5,
reviews: 74,
badge: "Gaming",
image:
"https://images.unsplash.com/photo-1599669454699-248893623440?w=700",
},
{
id: 8,
name: "Computer Monitor",
category: "Accessories",
price: 11999,
oldPrice: 14999,
rating: 4.3,
reviews: 62,
badge: "Featured",
image:
"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700",
},
];

const categories = [
"All",
"Laptops",
"Smartphones",
"Headphones",
"Smartwatches",
"Cameras",
"Gaming",
"Accessories",
];
function Products() {
const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [sort, setSort] = useState("default");
const [maxPrice, setMaxPrice] = useState(60000);

const filteredProducts = useMemo(() => {
let result = productList.filter((product) => {
const matchesSearch =
product.name.toLowerCase().includes(search.toLowerCase()) ||
product.category.toLowerCase().includes(search.toLowerCase());


  const matchesCategory =
    category === "All" || product.category === category;

  const matchesPrice = product.price <= maxPrice;

  return matchesSearch && matchesCategory && matchesPrice;
});

if (sort === "lowToHigh") {
  result.sort((a, b) => a.price - b.price);
} else if (sort === "highToLow") {
  result.sort((a, b) => b.price - a.price);
} else if (sort === "rating") {
  result.sort((a, b) => b.rating - a.rating);
}

return result;

}, [search, category, sort, maxPrice]);

const formatPrice = (price) =>
price.toLocaleString("en-IN");

const handleAddToCart = (product) => {
alert(
`${product.name} selected. Connect shared cart state to add it to your cart.`
);
};

return (
  <>
  <Navbar/>
  <main className="min-h-screen bg-gray-50">
  {/* Hero Section */}
  <section className="bg-gradient-to-r from-slate-950 via-blue-950 to-blue-700 px-5 py-16 text-white md:py-24">
    <div className="mx-auto max-w-7xl">
      <p className="mb-4 font-semibold uppercase tracking-[0.25em] text-blue-300">
        Welcome to E-Tech
      </p>

      <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
        Discover Technology.
        <span className="block text-blue-300">
          Upgrade Your Life.
        </span>
      </h1>

      <p className="mt-5 max-w-2xl leading-7 text-gray-200">
        Explore electronics, smart devices, headphones, cameras and
        more. Find the right technology for your everyday needs.
      </p>

      <a
        href="#all-products"
        className="mt-8 inline-block rounded-lg bg-white px-7 py-3 font-bold text-blue-900 transition hover:bg-blue-100"
      >
        Explore Products →
      </a>
    </div>
  </section>

  {/* Category Quick Links */}
  <section className="mx-auto max-w-7xl px-4 py-8 sm:px-8">
    <h2 className="mb-5 text-2xl font-bold text-gray-900">
      Shop By Category
    </h2>

    <div className="flex gap-3 overflow-x-auto pb-3">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition ${
            category === item
              ? "border-blue-600 bg-blue-600 text-white"
              : "border-gray-200 bg-white text-gray-700 hover:border-blue-500"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  </section>

  {/* Products and Filters */}
  <section
    id="all-products"
    className="mx-auto max-w-7xl px-4 pb-16 sm:px-8"
  >
    <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-900">
        Our Products
      </h2>

      <p className="mt-2 text-gray-500">
        Discover the right products at great prices.
      </p>
    </div>

    {/* Search and Sorting */}
    <div className="mb-8 grid gap-4 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 lg:grid-cols-4">

      <div className="lg:col-span-2">
        <label
          htmlFor="product-search"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Search Products
        </label>

        <input
          id="product-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search laptop, headphones..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label
          htmlFor="sort-products"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Sort By
        </label>

        <select
          id="sort-products"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="default">Featured</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
          <option value="rating">Highest Rating</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="max-price"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Maximum Price: ₹{formatPrice(maxPrice)}
        </label>

        <input
          id="max-price"
          type="range"
          min="1000"
          max="60000"
          step="1000"
          value={maxPrice}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
          className="mt-3 w-full accent-blue-600"
        />
      </div>
    </div>

    {/* Product Count */}
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <p className="text-gray-600">
        Showing{" "}
        <span className="font-bold text-gray-900">
          {filteredProducts.length}
        </span>{" "}
        products
      </p>

      <button
        onClick={() => {
          setSearch("");
          setCategory("All");
          setSort("default");
          setMaxPrice(60000);
        }}
        className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
      >
        Reset Filters
      </button>
    </div>

    {/* Product Grid */}
    {filteredProducts.length > 0 ? (
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="relative overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                {product.badge}
              </span>

              <button
                type="button"
                onClick={() =>
                  alert("Wishlist feature is not connected yet.")
                }
                aria-label={`Add ${product.name} to wishlist`}
                className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-gray-700 shadow transition hover:text-red-500"
              >
                ♡
              </button>
            </div>

            {/* Product Information */}
            <div className="p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                {product.category}
              </p>

              <h3 className="min-h-14 text-lg font-bold text-gray-900 transition group-hover:text-blue-600">
                {product.name}
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <span className="text-yellow-500">★</span>
                <span className="text-sm font-semibold text-gray-700">
                  {product.rating}
                </span>
                <span className="text-sm text-gray-400">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xl font-extrabold text-gray-900">
                  ₹{formatPrice(product.price)}
                </span>

                <span className="text-sm text-gray-400 line-through">
                  ₹{formatPrice(product.oldPrice)}
                </span>
              </div>

              <p className="mt-1 text-sm font-semibold text-green-600">
                Save ₹{formatPrice(product.oldPrice - product.price)}
              </p>

              {/* Buttons */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link
                  to={`/product-details?id=${product.id}`}
                  className="rounded-lg border border-blue-600 px-3 py-3 text-center text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
                >
                  View Details
                </Link>

                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="rounded-lg bg-blue-600 px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    ) : (
      <div className="rounded-2xl bg-white px-5 py-16 text-center shadow-sm">
        <div className="text-5xl">🔍</div>

        <h3 className="mt-4 text-2xl font-bold text-gray-900">
          No Products Found
        </h3>

        <p className="mt-2 text-gray-500">
          Try another search term or change your filters.
        </p>

        <button
          onClick={() => {
            setSearch("");
            setCategory("All");
            setSort("default");
            setMaxPrice(60000);
          }}
          className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Clear Filters
        </button>
      </div>
    )}
  </section>

  {/* Bottom Banner */}
  <section className="bg-blue-950 px-5 py-12 text-center text-white">
    <h2 className="text-3xl font-bold">
      Technology Made Simple
    </h2>

    <p className="mx-auto mt-3 max-w-2xl leading-7 text-blue-100">
      Explore our electronics collection and discover devices for
      work, entertainment, learning, and everyday life.
    </p>

    <Link
      to="/"
      className="mt-6 inline-block rounded-lg bg-white px-7 py-3 font-bold text-blue-950 transition hover:bg-blue-100"
    >
      Back to Home
    </Link>
  </section>
</main>
  <Footer/>
  </>
 

);
}

export default Products;
