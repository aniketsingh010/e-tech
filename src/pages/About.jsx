
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  return (
<>
<Navbar/>
        <div className="bg-white text-gray-800">
      
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          <div>
            <p className="text-blue-200 font-semibold uppercase tracking-widest text-sm">
              About E-Tech
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
              Technology That
              <br />
              Makes Life Better
            </h1>

            <p className="text-blue-100 text-lg leading-8 mt-6">
              Welcome to E-Tech, your destination for discovering
              electronics, smart devices and technology that fits
              your everyday life.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/products"
                className="bg-white text-blue-700 px-7 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
              >
                Explore Products
              </Link>

              <Link
                to="/contact"
                className="border border-white px-7 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1000"
              alt="Electronic products displayed together"
              className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* 2. Our Story */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14">

          <div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900"
              alt="Modern shopping store"
              className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              Our Story
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Making Technology Accessible to Everyone
            </h2>

            <p className="text-gray-600 leading-8 mt-6">
              E-Tech is an electronics e-commerce website concept
              designed to make discovering technology products
              simple and convenient.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              From laptops and smartphones to headphones and
              smartwatches, our goal is to create a convenient
              shopping experience where customers can explore
              different products in one place.
            </p>

            <p className="text-gray-600 leading-8 mt-4">
              We believe that shopping for technology should be
              straightforward, informative and enjoyable.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Mission and Vision */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              Our Purpose
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Our Mission & Vision
            </h2>

            <p className="text-gray-600 mt-4 leading-7">
              We want to make exploring and choosing technology
              products easier for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mission */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">
                🎯
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                Our mission is to build a user-friendly shopping
                platform where people can discover electronics,
                compare options and find products suited to
                their needs.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-lg transition">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl">
                🚀
              </div>

              <h3 className="text-2xl font-bold mt-6">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                Our vision is to create a convenient and reliable
                online destination for technology enthusiasts,
                helping them explore new innovations with confidence.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why Choose E-Tech */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              Why E-Tech?
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Why Choose E-Tech?
            </h2>

            <p className="text-gray-600 mt-4">
              Designed to make your online electronics shopping
              experience simple and convenient.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {/* Feature 1 */}
            <div className="border border-gray-200 rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-5xl">🛍️</div>

              <h3 className="text-xl font-bold mt-5">
                Easy Shopping
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                Explore different electronics categories in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border border-gray-200 rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-5xl">💻</div>

              <h3 className="text-xl font-bold mt-5">
                Modern Products
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                Discover laptops, smartphones and everyday gadgets.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border border-gray-200 rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-5xl">📱</div>

              <h3 className="text-xl font-bold mt-5">
                Responsive Design
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                Browse the website on mobile, tablet or desktop.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border border-gray-200 rounded-2xl p-7 text-center hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="text-5xl">💬</div>

              <h3 className="text-xl font-bold mt-5">
                Customer Support
              </h3>

              <p className="text-gray-600 leading-7 mt-3">
                Find contact information and helpful shopping details.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Values */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              What Matters to Us
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              The Values Behind E-Tech
            </h2>

            <p className="text-gray-600 leading-8 mt-5">
              We want to create a shopping experience that puts
              clarity, convenience and customer needs first.
            </p>
          </div>

          <div className="space-y-5">

            <div className="flex gap-4 bg-white p-5 rounded-2xl shadow-sm">
              <div className="text-3xl">🤝</div>

              <div>
                <h3 className="font-bold text-lg">
                  Trust & Transparency
                </h3>

                <p className="text-gray-600 mt-2 leading-7">
                  Clear product information helps customers make
                  informed decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-5 rounded-2xl shadow-sm">
              <div className="text-3xl">💡</div>

              <div>
                <h3 className="font-bold text-lg">
                  Innovation
                </h3>

                <p className="text-gray-600 mt-2 leading-7">
                  We celebrate technology that helps people in
                  their everyday lives.
                </p>
              </div>
            </div>

            <div className="flex gap-4 bg-white p-5 rounded-2xl shadow-sm">
              <div className="text-3xl">❤️</div>

              <div>
                <h3 className="font-bold text-lg">
                  Customer First
                </h3>

                <p className="text-gray-600 mt-2 leading-7">
                  We aim to keep the shopping journey simple,
                  useful and convenient.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Statistics */}
      <section className="bg-blue-700 text-white px-6 py-16">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              E-Tech at a Glance
            </h2>

            <p className="text-blue-100 mt-4">
              Built around a simple idea: make technology easier to explore.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div>
              <h3 className="text-4xl md:text-5xl font-bold">
                4+
              </h3>

              <p className="text-blue-100 mt-3">
                Product Categories
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold">
                100%
              </h3>

              <p className="text-blue-100 mt-3">
                Responsive Layout
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold">
                24/7
              </h3>

              <p className="text-blue-100 mt-3">
                Website Access
              </p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold">
                1
              </h3>

              <p className="text-blue-100 mt-3">
                Shopping Destination
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Call To Action */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-8 md:p-14 text-center text-white">

          <h2 className="text-3xl md:text-5xl font-bold">
            Ready to Explore the World of Technology?
          </h2>

          <p className="text-blue-100 mt-5 text-lg leading-8 max-w-2xl mx-auto">
            Discover electronics and gadgets for your everyday needs
            with E-Tech.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              to="/products"
              className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
            >
              Shop Now →
            </Link>

            <Link
              to="/contact"
              className="border border-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-700 transition"
            >
              Get in Touch
            </Link>
          </div>

        </div>
      </section>

    </div>
    <Footer/>
</>
  );
}

export default About;

