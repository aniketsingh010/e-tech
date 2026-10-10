import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ProductDetails() {
const [quantity, setQuantity] = useState(1);
const [isWishlist, setIsWishlist] = useState(false);
const [selectedColor, setSelectedColor] = useState("Black");
const [pincode, setPincode] = useState("");
const [deliveryMessage, setDeliveryMessage] = useState("");

const product = {
id: 1,
name: "Premium Wireless Headphones",
price: 2499,
oldPrice: 3499,
rating: 4.5,
reviews: 128,
category: "Headphones & Audio",
brand: "E-Tech",
sku: "ETH-001",
stock: "In Stock",
warranty: "1 Year",
connectivity: "Bluetooth 5.3",
battery: "Up to 30 Hours",
colors: ["Black", "White", "Blue"],
image:
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
description:
"Enjoy high-quality sound with these premium wireless headphones. Designed for comfortable everyday listening, music, online classes, and entertainment.",
features: [
"Premium sound quality",
"Wireless Bluetooth connectivity",
"Comfortable ear cushions",
"Long-lasting battery",
"Lightweight design",
"One-year warranty (demo information)",
],
};

const discount = Math.round(
((product.oldPrice - product.price) / product.oldPrice) * 100
);

const formatPrice = (price) =>
price.toLocaleString("en-IN");

const handleAddToCart = () => {
alert(
`${quantity} × ${product.name} (${selectedColor}) selected. Cart integration is not connected yet.`
);
};

const checkDelivery = (event) => {
event.preventDefault();

```
if (!/^[1-9][0-9]{5}$/.test(pincode)) {
  setDeliveryMessage("Please enter a valid 6-digit PIN code.");
  return;
}

setDeliveryMessage(
  "PIN code accepted. Actual delivery availability needs to be connected."
);
```

};

return (
  <>
  <Navbar/>
  <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8 lg:px-16"> <div className="mx-auto max-w-7xl">


    {/* Breadcrumb */}
    <div className="mb-8 flex flex-wrap gap-2 text-sm text-gray-500">
      <Link to="/" className="hover:text-blue-600">
        Home
      </Link>
      <span>/</span>
      <Link to="/categories" className="hover:text-blue-600">
        Categories
      </Link>
      <span>/</span>
      <span className="text-gray-900">{product.name}</span>
    </div>

    {/* Main Product Section */}
    <div className="grid gap-10 rounded-2xl bg-white p-5 shadow-sm md:grid-cols-2 md:p-10">

      {/* Product Image */}
      <div>
        <div className="flex items-center justify-center rounded-2xl bg-gray-100 p-6">
          <img
            src={product.image}
            alt={product.name}
            className="h-80 w-full rounded-xl object-contain transition duration-300 hover:scale-105 md:h-[450px]"
          />
        </div>

        {/* Product Benefits */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border p-4 text-center">
            <div className="mb-2 text-2xl">🚚</div>
            <h3 className="font-semibold">Delivery</h3>
            <p className="mt-1 text-xs text-gray-500">
              Check availability
            </p>
          </div>

          <div className="rounded-xl border p-4 text-center">
            <div className="mb-2 text-2xl">🔒</div>
            <h3 className="font-semibold">Secure</h3>
            <p className="mt-1 text-xs text-gray-500">
              Checkout support
            </p>
          </div>

          <div className="rounded-xl border p-4 text-center">
            <div className="mb-2 text-2xl">🛡️</div>
            <h3 className="font-semibold">Warranty</h3>
            <p className="mt-1 text-xs text-gray-500">
              {product.warranty}
            </p>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex flex-col justify-center">

        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
          {product.category}
        </p>

        <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="text-lg text-yellow-500">
            ★★★★★
          </span>
          <span className="text-sm text-gray-600">
            {product.rating}/5 ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="text-3xl font-bold text-blue-600">
            ₹{formatPrice(product.price)}
          </span>

          <span className="text-lg text-gray-400 line-through">
            ₹{formatPrice(product.oldPrice)}
          </span>

          <span className="rounded-md bg-green-100 px-2 py-1 text-sm font-semibold text-green-700">
            {discount}% OFF
          </span>
        </div>

        <p className="mb-5 text-sm font-semibold text-green-600">
          ● {product.stock}
        </p>

        <p className="mb-7 leading-7 text-gray-600">
          {product.description}
        </p>

        {/* Color Selection */}
        <div className="mb-6">
          <h3 className="mb-3 font-semibold text-gray-800">
            Select Color:{" "}
            <span className="text-blue-600">
              {selectedColor}
            </span>
          </h3>

          <div className="flex flex-wrap gap-3">
            {product.colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`rounded-lg border px-4 py-2 transition ${
                  selectedColor === color
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-gray-300 hover:border-blue-400"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setIsWishlist(!isWishlist)}
          aria-pressed={isWishlist}
          className="mb-6 w-fit rounded-lg border border-gray-300 px-4 py-2 transition hover:bg-gray-100"
        >
          {isWishlist
            ? "❤️ Added to Wishlist"
            : "♡ Add to Wishlist"}
        </button>

        {/* Key Features */}
        <h2 className="mb-3 text-xl font-bold text-gray-900">
          Key Features
        </h2>

        <ul className="mb-8 space-y-2">
          {product.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-gray-700"
            >
              <span className="font-bold text-green-600">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Quantity */}
        <div className="mb-6 flex items-center gap-4">
          <span className="font-semibold text-gray-800">
            Quantity:
          </span>

          <div className="flex items-center overflow-hidden rounded-lg border border-gray-300">
            <button
              type="button"
              onClick={() =>
                setQuantity((current) => Math.max(1, current - 1))
              }
              className="px-4 py-2 text-xl hover:bg-gray-100"
              aria-label="Decrease quantity"
            >
              −
            </button>

            <span className="min-w-12 text-center">
              {quantity}
            </span>

            <button
              type="button"
              onClick={() =>
                setQuantity((current) => Math.min(10, current + 1))
              }
              className="px-4 py-2 text-xl hover:bg-gray-100"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>

        {/* Dynamic Total Price */}
        <div className="mb-6 rounded-xl bg-blue-50 p-4">
          <p className="text-sm text-gray-600">
            Total Price
          </p>

          <p className="text-2xl font-bold text-blue-700">
            ₹{formatPrice(product.price * quantity)}
          </p>

          <p className="mt-1 text-sm text-gray-500">
            {quantity} × ₹{formatPrice(product.price)}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={handleAddToCart}
            className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            🛒 Add to Cart
          </button>

          <Link
            to="/cart"
            className="rounded-lg border border-blue-600 px-7 py-3 text-center font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            View Cart
          </Link>
        </div>

        {/* Delivery Checker */}
        <div className="mt-8 rounded-xl border border-gray-200 p-5">
          <h2 className="mb-3 text-lg font-bold text-gray-900">
            🚚 Check Delivery Availability
          </h2>

          <form
            onSubmit={checkDelivery}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={pincode}
              onChange={(event) => {
                setPincode(
                  event.target.value.replace(/\D/g, "").slice(0, 6)
                );
                setDeliveryMessage("");
              }}
              placeholder="Enter 6-digit PIN code"
              className="min-w-0 flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-700"
            >
              Check
            </button>
          </form>

          {deliveryMessage && (
            <p className="mt-3 text-sm text-gray-600" role="status">
              {deliveryMessage}
            </p>
          )}
        </div>
      </div>
    </div>

    {/* Product Specifications */}
    <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm md:p-10">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Product Specifications
      </h2>

      <div className="overflow-hidden rounded-xl border border-gray-200">
        {[
          ["Product Name", product.name],
          ["Brand", product.brand],
          ["SKU", product.sku],
          ["Category", product.category],
          ["Connectivity", product.connectivity],
          ["Battery Life", product.battery],
          ["Warranty", product.warranty],
          ["Selected Color", selectedColor],
        ].map(([label, value]) => (
          <div
            key={label}
            className="grid grid-cols-2 gap-3 border-b border-gray-200 p-4 last:border-b-0"
          >
            <span className="text-gray-500">{label}</span>
            <span className="break-words font-medium text-gray-800">
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* Customer Reviews */}
    <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm md:p-10">
      <h2 className="mb-5 text-2xl font-bold text-gray-900">
        Customer Reviews
      </h2>

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="text-5xl font-bold text-gray-900">
            {product.rating}
            <span className="text-2xl text-gray-500">/5</span>
          </p>

          <p className="mt-2 text-yellow-500">
            ★★★★★
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Based on {product.reviews} demo reviews
          </p>
        </div>

        <div className="rounded-xl bg-gray-50 p-5 sm:flex-1">
          <p className="font-semibold text-gray-800">
            Customer feedback
          </p>
          <p className="mt-2 leading-7 text-gray-600">
            Customer reviews will appear here when a real review system
            is connected.
          </p>
        </div>
      </div>
    </section>

    {/* Related Products */}
    <section className="mt-10 rounded-2xl bg-white p-6 shadow-sm md:p-10">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-2xl font-bold text-gray-900">
          You May Also Like
        </h2>

        <Link
          to="/categories"
          className="font-semibold text-blue-600 hover:text-blue-800"
        >
          Explore Categories →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Smart Watch",
            price: 1999,
            image:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
          },
          {
            name: "Wireless Earbuds",
            price: 1499,
            image:
              "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600",
          },
          {
            name: "Digital Camera",
            price: 8999,
            image:
              "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
          },
        ].map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-xl border border-gray-200 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="h-52 w-full bg-gray-100 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900">
                {item.name}
              </h3>

              <p className="mt-2 text-xl font-bold text-blue-600">
                ₹{formatPrice(item.price)}
              </p>

              <Link
                to="/product-details"
                className="mt-4 block rounded-lg bg-gray-900 px-4 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

  </div>
</div>

  <Footer/>
  </>
   

);
}

export default ProductDetails;
