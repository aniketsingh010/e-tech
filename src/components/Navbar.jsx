import React from 'react'
import img1 from "../assets/images/Tech-Hub.avif";
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Navbar = () => {
  return (
    <>

      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-white text-black hover:bg-amber-200">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>Abouts</Link></li>
              <li><Link to="/category">Category</Link></li>
              <li><Link to="/Details">Details</Link></li>
              <li><Link to="/Card">Card pages</Link></li>
              <li><Link to="/Procducts">Product</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/Cards" className='text-amber-600 bg-amber-950'>Cards</Link></li>
              <li> <Link to="/login" className="text-amber-50 bg-amber-300">Login</Link></li>
          <li><Link to="/Registation" className="text-red-400 bg-amber-100">Register</Link></li>

            </ul>
          </div>
          <div className="navbar-center">
            <img src={img1} alt='tech' className='max-h-20 w-20 shadow-2xl rounded-3xl xs:h-[40px] xs:w-[40px]' />
            <a className="btn btn-ghost text-sm  border-l-0 ">E-Tech <span className='text-blue-600'>Store</span></a>
            {/* <input type="text" placeholder='Search' className='border-2 border-amber-400'/> */}
          </div>
        </div>
        <div className="navbar-end text-end ">
         
        </div>
        <div className="navbar-end">
           <Link to="/Cards" className="btn btn-ghost text-xl xs:hidden  sm:block">Cards</Link>
          <Link to="/login" className="btn btn-ghost text-xl xs:hidden sm:block">Login</Link>
          <Link to="/Registation" className="btn btn-ghost text-xl xs:hidden sm:block">Register</Link>
          <button className="btn btn-ghost btn-circle">
            <svg aria-label="Search" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg aria-label="Notifications" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      <div>
        {/* Hero Section */}
        <section className="bg-blue-50 py-16 px-6">

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>

              <p className="text-blue-600 font-semibold mb-3">
                WELCOME TO E-TECH
              </p>

              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Discover the Latest
                <span className="text-blue-600"> Technology</span>
              </h1>

              <p className="text-gray-600 mt-5 text-lg">
                Explore the latest laptops, smartphones,
                headphones and smart gadgets at great prices.
              </p>

              <button className="mt-7 bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700">
                Shop Now
              </button>

            </div>

            {/* Right Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800"
                alt="Electronic gadgets"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>

          </div>

        </section>

      </div>

    </>
  )
}

export default Navbar