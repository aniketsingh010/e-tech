
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
  // Initial cart products
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Laptop",
      category: "Electronics",
      price: 54999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 2,
      name: "Smart Smartphone",
      category: "Mobile Phones",
      price: 24999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      category: "Audio",
      price: 1999,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500",
    },
  ]);

  // Increase product quantity
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease product quantity
  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove product from cart
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Free shipping
  const shipping = subtotal === 0 || subtotal >= 1000 ? 0 : 99;

  // Total price
  const total = subtotal + shipping;

  // Format price in Indian Rupees
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50">

      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-blue-200 font-semibold uppercase tracking-widest text-sm">
            Your Shopping Bag
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mt-3">
            Shopping Cart
          </h1>

          <p className="text-blue-100 mt-4">
            Review your products before proceeding to checkout.
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="bg-white rounded-2xl shadow-sm p-10 md:p-16 text-center">
            <div className="text-7xl">🛒</div>

            <h2 className="text-2xl md:text-3xl font-bold mt-6">
              Your Cart Is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              You haven't added any products to your cart yet.
            </p>

            <Link
              to="/"
              className="inline-block mt-7 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Cart Products */}
            <div className="lg:col-span-2 space-y-5">

              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Your Items ({cartItems.reduce(
                    (count, item) => count + item.quantity,
                    0
                  )})
                </h2>

                <span className="text-sm text-gray-500">
                  Prices in INR
                </span>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6"
                >
                  <div className="flex flex-col sm:flex-row gap-5">

                    {/* Product Image */}
                    <div className="bg-gray-100 rounded-xl p-3 sm:w-40 shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 sm:h-36 object-contain rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">

                      <div className="flex justify-between gap-3">
                        <div>
                          <p className="text-sm text-gray-500">
                            {item.category}
                          </p>

                          <h3 className="text-lg md:text-xl font-bold mt-1">
                            {item.name}
                          </h3>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="text-red-500 hover:text-red-700 font-semibold text-sm"
                        >
                          Remove ✕
                        </button>
                      </div>

                      <p className="text-blue-700 font-bold text-xl mt-4">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex flex-wrap justify-between items-center gap-4 mt-5">

                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">

                          <button
                            type="button"
                            onClick={() => decreaseQuantity(item.id)}
                            disabled={item.quantity === 1}
                            aria-label="Decrease quantity"
                            className="px-4 py-2 hover:bg-gray-100 disabled:opacity-40"
                          >
                            −
                          </button>

                          <span className="px-4 py-2 font-semibold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() => increaseQuantity(item.id)}
                            aria-label="Increase quantity"
                            className="px-4 py-2 hover:bg-gray-100"
                          >
                            +
                          </button>

                        </div>

                        <p className="font-bold text-gray-900">
                          Item Total: {formatPrice(item.price * item.quantity)}
                        </p>

                      </div>
                    </div>

                  </div>
                </div>
              ))}

              {/* Continue Shopping */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition"
              >
                ← Continue Shopping
              </Link>

            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-6">

                <h2 className="text-2xl font-bold text-gray-900">
                  Order Summary
                </h2>

                <div className="border-b border-gray-200 my-6"></div>

                <div className="flex justify-between gap-3 mb-4">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                <div className="flex justify-between gap-3 mb-4">
                  <span className="text-gray-600">Shipping</span>

                  <span className="font-semibold text-green-600">
                    {shipping === 0 ? "FREE" : formatPrice(shipping)}
                  </span>
                </div>

                <div className="bg-green-50 text-green-700 p-3 rounded-xl text-sm mb-5">
                  {subtotal >= 1000
                    ? "🎉 Your order qualifies for free shipping!"
                    : "Add more products to qualify for free shipping."}
                </div>

                <div className="border-b border-gray-200 my-5"></div>

                <div className="flex justify-between items-center gap-3">
                  <span className="text-lg font-bold">Total</span>

                  <span className="text-2xl font-bold text-blue-700">
                    {formatPrice(total)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    alert("Checkout page will be added in the next step.")
                  }
                  className="w-full mt-7 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
                >
                  Proceed to Checkout →
                </button>

                <div className="mt-5 text-center text-sm text-gray-500">
                  🔒 Secure checkout experience
                </div>

                <div className="mt-6 pt-5 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700">
                    We Accept
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="border rounded px-3 py-2 text-sm font-bold">
                      UPI
                    </span>

                    <span className="border rounded px-3 py-2 text-sm font-bold">
                      VISA
                    </span>

                    <span className="border rounded px-3 py-2 text-sm font-bold">
                      Mastercard
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </section>
    </div>
    <Footer/>
    </>

  );
}

export default Cart;

