
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const initialProducts = [
  {
    id: 1,
    name: "Premium Laptop",
    category: "Computers",
    price: 54999,
    oldPrice: 64999,
    quantity: 1,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Smartphone Pro",
    category: "Smartphones",
    price: 24999,
    oldPrice: 29999,
    quantity: 1,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Audio",
    price: 2499,
    oldPrice: 3499,
    quantity: 2,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
  },
];

const recommendedProducts = [
  {
    id: 4,
    name: "Premium Smartwatch",
    category: "Wearables",
    price: 3499,
    oldPrice: 4999,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 5,
    name: "Digital Camera",
    category: "Cameras",
    price: 18999,
    oldPrice: 22999,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    category: "Audio",
    price: 1799,
    oldPrice: 2499,
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: 7,
    name: "Gaming Controller",
    category: "Gaming",
    price: 2999,
    oldPrice: 3999,
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=500&q=80",
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialProducts);
  const [coupon, setCoupon] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [showCheckout, setShowCheckout] = useState(false);

  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  // Clear complete cart
  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon("");
    setCoupon("");
    setCouponMessage("");
  };

  // Add recommended product
  const addRecommendedProduct = (product) => {
    setCartItems((items) => {
      const existing = items.find((item) => item.id === product.id);

      if (existing) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { ...product, quantity: 1, rating: 4.5 }];
    });
  };

  // Price calculations
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const originalTotal = cartItems.reduce(
    (total, item) => total + (item.oldPrice || item.price) * item.quantity,
    0
  );

  const productSavings = originalTotal - subtotal;
  const shipping = subtotal === 0 || subtotal >= 1000 ? 0 : 99;

  // Demo coupon: ETECH10 gives 10% off up to ₹2,000
  const couponDiscount =
    appliedCoupon === "ETECH10"
      ? Math.min(Math.round(subtotal * 0.1), 2000)
      : 0;

  const total = Math.max(0, subtotal + shipping - couponDiscount);

  const totalItems = cartItems.reduce(
    (count, item) => count + item.quantity,
    0
  );

  const shippingGoal = 1000;
  const shippingProgress = Math.min(
    (subtotal / shippingGoal) * 100,
    100
  );

  // Apply coupon
  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (subtotal === 0) {
      setCouponMessage("Add a product before applying a coupon.");
      setAppliedCoupon("");
      return;
    }

    if (code === "ETECH10") {
      setAppliedCoupon(code);
      setCouponMessage("Coupon applied! You saved 10% on your order.");
    } else {
      setAppliedCoupon("");
      setCouponMessage("Invalid coupon. Try ETECH10.");
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 text-gray-900">

        {/* HERO HEADER */}
        <section className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-900 px-5 py-14 text-white sm:px-8 md:py-20">
          <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center gap-2 text-sm text-blue-200">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Shopping Cart</span>
            </div>

            <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold">
                  🛍️ YOUR SHOPPING BAG
                </span>

                <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-6xl">
                  Shopping Cart
                </h1>

                <p className="mt-4 max-w-xl leading-7 text-blue-100">
                  Your favourite technology, all in one place.
                  Review your items and get ready for checkout.
                </p>
              </div>

              <div className="w-fit rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm text-blue-100">Items in your cart</p>
                <p className="mt-1 text-4xl font-extrabold">
                  {totalItems}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHECKOUT STEPS */}
        <section className="border-b border-gray-100 bg-white px-5 py-5 sm:px-8">
          <div className="mx-auto flex max-w-4xl items-center justify-center gap-3 sm:gap-8">
            {[
              ["01", "Shopping Cart"],
              ["02", "Checkout"],
              ["03", "Confirmation"],
            ].map(([number, label], index) => (
              <div key={number} className="flex items-center gap-2 sm:gap-4">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    index === 0
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {number}
                </div>

                <span
                  className={`text-xs font-semibold sm:text-sm ${
                    index === 0 ? "text-blue-700" : "text-gray-400"
                  }`}
                >
                  {label}
                </span>

                {index !== 2 && (
                  <div className="h-px w-5 bg-gray-200 sm:w-12" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CART CONTENT */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14">

          {cartItems.length === 0 ? (
            /* EMPTY CART */
            <div className="rounded-3xl border border-gray-100 bg-white px-6 py-16 text-center shadow-sm sm:py-24">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-50 text-6xl">
                🛒
              </div>

              <h2 className="mt-7 text-3xl font-extrabold">
                Your Cart Is Empty
              </h2>

              <p className="mx-auto mt-4 max-w-md leading-7 text-gray-500">
                Looks like you haven't added anything yet.
                Explore our collection and find something you love.
              </p>

              <Link
                to="/products"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Explore Products →
              </Link>
            </div>
          ) : (
            <div className="grid items-start gap-8 lg:grid-cols-3">

              {/* LEFT: PRODUCTS */}
              <div className="space-y-5 lg:col-span-2">

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-2xl font-extrabold">
                      Your Items
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      {totalItems} item(s) selected
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="rounded-lg px-3 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                  >
                    Clear Cart ✕
                  </button>
                </div>

                {/* SHIPPING PROGRESS */}
                <div className="rounded-2xl border border-green-100 bg-green-50 p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🚚</span>

                    <div className="flex-1">
                      <p className="font-bold text-green-900">
                        {subtotal >= shippingGoal
                          ? "Congratulations! You qualify for free shipping."
                          : `Add ${formatPrice(shippingGoal - subtotal)} more for free shipping!`}
                      </p>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-green-200">
                        <div
                          className="h-full rounded-full bg-green-600 transition-all duration-500"
                          style={{ width: `${shippingProgress}%` }}
                        />
                      </div>

                      <p className="mt-2 text-xs text-green-800">
                        Free shipping on orders of ₹1,000 or more.
                      </p>
                    </div>
                  </div>
                </div>

                {/* PRODUCT CARDS */}
                {cartItems.map((item) => {
                  const discount = item.oldPrice
                    ? Math.round(
                        ((item.oldPrice - item.price) / item.oldPrice) * 100
                      )
                    : 0;

                  return (
                    <article
                      key={item.id}
                      className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg"
                    >
                      <div className="flex flex-col gap-5 p-4 sm:flex-row sm:p-6">

                        {/* IMAGE */}
                        <Link
                          to={`/product-details?id=${item.id}`}
                          className="relative block shrink-0 overflow-hidden rounded-xl bg-gray-50 p-3 sm:w-44"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="h-48 w-full rounded-lg object-contain transition duration-500 hover:scale-105 sm:h-40"
                          />

                          {discount > 0 && (
                            <span className="absolute left-3 top-3 rounded-lg bg-red-500 px-2 py-1 text-xs font-bold text-white">
                              {discount}% OFF
                            </span>
                          )}
                        </Link>

                        {/* DETAILS */}
                        <div className="flex min-w-0 flex-1 flex-col">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                                {item.category}
                              </p>

                              <h3 className="mt-2 text-lg font-extrabold sm:text-xl">
                                {item.name}
                              </h3>

                              <div className="mt-2 flex items-center gap-2 text-sm">
                                <span className="text-amber-500">★★★★★</span>
                                <span className="font-semibold text-gray-600">
                                  {item.rating || 4.5}
                                </span>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              aria-label={`Remove ${item.name}`}
                              className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-600"
                            >
                              🗑️
                            </button>
                          </div>

                          <div className="mt-5 flex flex-wrap items-center gap-2">
                            <span className="text-2xl font-extrabold text-gray-900">
                              {formatPrice(item.price)}
                            </span>

                            {item.oldPrice && (
                              <span className="text-sm text-gray-400 line-through">
                                {formatPrice(item.oldPrice)}
                              </span>
                            )}
                          </div>

                          <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-5">
                            {/* QUANTITY */}
                            <div>
                              <p className="mb-2 text-xs font-semibold text-gray-500">
                                Quantity
                              </p>

                              <div className="inline-flex items-center overflow-hidden rounded-xl border border-gray-200">
                                <button
                                  type="button"
                                  onClick={() => decreaseQuantity(item.id)}
                                  disabled={item.quantity === 1}
                                  aria-label={`Decrease ${item.name} quantity`}
                                  className="h-10 w-10 text-lg transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-30"
                                >
                                  −
                                </button>

                                <span className="flex h-10 min-w-10 items-center justify-center border-x border-gray-200 px-3 font-bold">
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() => increaseQuantity(item.id)}
                                  aria-label={`Increase ${item.name} quantity`}
                                  className="h-10 w-10 text-lg transition hover:bg-gray-100"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            {/* ITEM TOTAL */}
                            <div className="text-right">
                              <p className="text-xs text-gray-500">
                                Item Total
                              </p>
                              <p className="mt-1 text-lg font-extrabold text-blue-700">
                                {formatPrice(item.price * item.quantity)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}

                {/* CONTINUE SHOPPING */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-2 font-bold text-blue-600 transition hover:text-blue-800"
                  >
                    ← Continue Shopping
                  </Link>

                  <p className="text-sm text-gray-500">
                    🔒 Safe and secure shopping
                  </p>
                </div>

                {/* TRUST CARDS */}
                <div className="grid grid-cols-1 gap-4 pt-3 sm:grid-cols-3">
                  {[
                    ["🚚", "Delivery", "Convenient delivery options"],
                    ["🔐", "Secure", "Shop with confidence"],
                    ["💬", "Support", "We're here to help"],
                  ].map(([icon, title, description]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-gray-100 bg-white p-4"
                    >
                      <span className="text-2xl">{icon}</span>
                      <h3 className="mt-3 font-bold">{title}</h3>
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: ORDER SUMMARY */}
              <aside className="lg:sticky lg:top-6">
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

                  <div className="bg-slate-950 px-6 py-5 text-white">
                    <h2 className="text-2xl font-extrabold">
                      Order Summary
                    </h2>
                    <p className="mt-1 text-sm text-gray-300">
                      Review your total before checkout.
                    </p>
                  </div>

                  <div className="p-6">

                    {/* PRICE BREAKDOWN */}
                    <div className="space-y-4">
                      <div className="flex justify-between gap-3">
                        <span className="text-gray-600">
                          Subtotal ({totalItems} items)
                        </span>
                        <span className="font-semibold">
                          {formatPrice(subtotal)}
                        </span>
                      </div>

                      <div className="flex justify-between gap-3">
                        <span className="text-gray-600">
                          Shipping
                        </span>
                        <span
                          className={`font-bold ${
                            shipping === 0
                              ? "text-green-600"
                              : "text-gray-900"
                          }`}
                        >
                          {shipping === 0 ? "FREE" : formatPrice(shipping)}
                        </span>
                      </div>

                      <div className="flex justify-between gap-3">
                        <span className="text-gray-600">
                          Product savings
                        </span>
                        <span className="font-semibold text-green-600">
                          −{formatPrice(productSavings)}
                        </span>
                      </div>

                      {couponDiscount > 0 && (
                        <div className="flex justify-between gap-3">
                          <span className="text-gray-600">
                            Coupon discount
                          </span>
                          <span className="font-bold text-green-600">
                            −{formatPrice(couponDiscount)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* COUPON */}
                    <div className="mt-6 border-t border-gray-100 pt-6">
                      <label
                        htmlFor="coupon"
                        className="text-sm font-bold"
                      >
                        🎟️ Apply Coupon Code
                      </label>

                      <div className="mt-3 flex gap-2">
                        <input
                          id="coupon"
                          type="text"
                          value={coupon}
                          onChange={(event) => setCoupon(event.target.value)}
                          placeholder="Enter code"
                          className="min-w-0 flex-1 rounded-xl border border-gray-200 px-3 py-3 text-sm uppercase outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />

                        <button
                          type="button"
                          onClick={applyCoupon}
                          className="rounded-xl bg-gray-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                        >
                          Apply
                        </button>
                      </div>

                      {couponMessage && (
                        <p
                          className={`mt-3 text-xs font-semibold ${
                            appliedCoupon
                              ? "text-green-600"
                              : "text-red-500"
                          }`}
                        >
                          {couponMessage}
                        </p>
                      )}

                      <p className="mt-2 text-xs text-gray-500">
                        Demo code:{" "}
                        <span className="font-bold text-blue-600">
                          ETECH10
                        </span>
                      </p>
                    </div>

                    {/* TOTAL */}
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-lg font-extrabold">
                          Total
                        </span>
                        <span className="text-2xl font-extrabold text-blue-700">
                          {formatPrice(total)}
                        </span>
                      </div>

                      <p className="mt-2 text-xs leading-5 text-gray-500">
                        Final charges are shown for this demo cart.
                      </p>
                    </div>

                    {/* CHECKOUT BUTTON */}
                    <button
                      type="button"
                      onClick={() => setShowCheckout(!showCheckout)}
                      disabled={cartItems.length === 0}
                      className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-4 font-extrabold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:opacity-50"
                    >
                      {showCheckout
                        ? "Hide Checkout Options ↑"
                        : "Proceed to Checkout →"}
                    </button>

                    {/* CHECKOUT DEMO OPTIONS */}
                    {showCheckout && (
                      <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50 p-4">
                        <h3 className="font-extrabold">
                          Select Payment Method
                        </h3>

                        <div className="mt-3 space-y-2">
                          {["UPI", "Card", "Cash on Delivery"].map(
                            (method) => (
                              <label
                                key={method}
                                className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 bg-white p-3"
                              >
                                <input
                                  type="radio"
                                  name="paymentMethod"
                                  value={method}
                                  checked={paymentMethod === method}
                                  onChange={(event) =>
                                    setPaymentMethod(event.target.value)
                                  }
                                />
                                <span className="text-sm font-semibold">
                                  {method === "UPI"
                                    ? "📱 UPI"
                                    : method === "Card"
                                      ? "💳 Credit / Debit Card"
                                      : "💵 Cash on Delivery"}
                                </span>
                              </label>
                            )
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() =>
                            alert(
                              `Demo only: ${paymentMethod} selected. Connect a backend and payment gateway to place real orders.`
                            )
                          }
                          className="mt-4 w-full rounded-xl bg-green-600 px-4 py-3 font-bold text-white transition hover:bg-green-700"
                        >
                          Confirm Demo Order
                        </button>

                        <p className="mt-3 text-xs leading-5 text-gray-500">
                          This is a frontend demo. It does not charge money
                          or create a real order.
                        </p>
                      </div>
                    )}

                    {/* PAYMENT ICONS */}
                    <div className="mt-6 border-t border-gray-100 pt-5">
                      <p className="text-sm font-bold text-gray-700">
                        Payment Options
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {["UPI", "VISA", "Mastercard", "COD"].map(
                          (method) => (
                            <span
                              key={method}
                              className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-bold text-gray-600"
                            >
                              {method}
                            </span>
                          )
                        )}
                      </div>
                    </div>

                    <div className="mt-5 rounded-xl bg-green-50 p-4 text-sm leading-6 text-green-800">
                      <span className="font-extrabold">
                        ✓ Shopping with confidence
                      </span>
                      <p className="mt-1 text-xs">
                        Review your items before continuing.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}

          {/* RECOMMENDED PRODUCTS */}
          <section className="mt-16">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  You May Also Like
                </p>
                <h2 className="mt-3 text-3xl font-extrabold">
                  Recommended Products
                </h2>
                <p className="mt-2 text-gray-500">
                  Discover more gadgets from E-Tech.
                </p>
              </div>

              <Link
                to="/products"
                className="font-bold text-blue-600 hover:underline"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {recommendedProducts.map((product) => {
                const alreadyAdded = cartItems.some(
                  (item) => item.id === product.id
                );

                return (
                  <article
                    key={product.id}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <Link
                      to={`/product-details?id=${product.id}`}
                      className="block overflow-hidden bg-gray-50 p-3"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-52 w-full rounded-xl object-cover transition duration-500 group-hover:scale-105"
                      />
                    </Link>

                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                        {product.category}
                      </p>

                      <h3 className="mt-2 text-lg font-extrabold">
                        {product.name}
                      </h3>

                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <span className="text-xl font-extrabold">
                          {formatPrice(product.price)}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          {formatPrice(product.oldPrice)}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => addRecommendedProduct(product)}
                        className={`mt-5 w-full rounded-xl px-4 py-3 font-bold transition ${
                          alreadyAdded
                            ? "bg-green-100 text-green-700 hover:bg-green-200"
                            : "bg-gray-900 text-white hover:bg-blue-600"
                        }`}
                      >
                        {alreadyAdded ? "✓ Added — Add Again" : "＋ Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* BOTTOM CTA */}
          <section className="mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-8 text-white sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
                  E-Tech Store
                </p>
                <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                  Great Technology, Great Choices.
                </h2>
                <p className="mt-3 max-w-xl leading-7 text-blue-100">
                  Explore more electronics and discover products
                  for your everyday needs.
                </p>
              </div>

              <Link
                to="/products"
                className="shrink-0 rounded-xl bg-white px-6 py-4 font-extrabold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
              >
                Continue Shopping →
              </Link>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Cart;
