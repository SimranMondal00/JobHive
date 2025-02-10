import React from "react";
import JobList from "../components/JobList";
import Typewriter from "typewriter-effect"; // Install this library using: npm install typewriter-effect

const HomePage = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Text and Current Date */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <Typewriter
                options={{
                  strings: [
                    "Find Your Dream Job",
                    "Build Your Career",
                    "Achieve Your Goals",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 120,
                  deleteSpeed: 150,
                }}
              />
            </h1>
            <p className="text-lg md:text-xl mb-4">
              Discover thousands of job opportunities tailored just for you.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis exercitationem possimus molestias eveniet fugit sint.
            </p>
            <p className="text-md mb-8">
              <strong>Today's Date:</strong> {currentDate}
            </p>
            <a
              href="#job-section"
              className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-md shadow-md font-semibold hover:bg-yellow-400 transition-all duration-300"
            >
              Get Started
            </a>
          </div>

          {/* Right Side: Hero Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://cdn-icons-png.freepik.com/512/18239/18239246.png"
              alt="Job search illustration"
              className="w-full max-w-lg rounded-md  filter invert"
            />
          </div>
        </div>
      </div>

      {/* Featured Jobs Section */}
      <div id="job-section" className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <JobList />
        </div>
      </div>
      <section className="bg-gray-100 py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div>
        <h3 className="text-4xl font-bold text-blue-600">10,000+</h3>
        <p className="text-gray-600">Jobs Posted</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-blue-600">50,000+</h3>
        <p className="text-gray-600">Active Users</p>
      </div>
      <div>
        <h3 className="text-4xl font-bold text-blue-600">5,000+</h3>
        <p className="text-gray-600">Successful Placements</p>
      </div>
    </div>
  </div>
</section>
<section className="bg-gray-900 py-12">
  <div className="container mx-auto text-center text-white">
    <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
    <p className="mb-6">Subscribe to our newsletter for the latest job opportunities and career advice.</p>
    <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="px-4 py-2 rounded-lg text-black w-80"
      />
      <button className="bg-yellow-500 px-6 py-2 rounded-lg font-bold hover:bg-yellow-600">
        Subscribe
      </button>
    </form>
  </div>
</section>
<section className="bg-gray-100 py-12">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Our Trusted Partners</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJpwUvZMFKp_kXyJA2yd8zulrzNfK4ZIOgQ&s" alt="Partner 1" className="h-16 mx-auto" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJpwUvZMFKp_kXyJA2yd8zulrzNfK4ZIOgQ&s" alt="Partner 2" className="h-16 mx-auto" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJpwUvZMFKp_kXyJA2yd8zulrzNfK4ZIOgQ&s" alt="Partner 3" className="h-16 mx-auto" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJpwUvZMFKp_kXyJA2yd8zulrzNfK4ZIOgQ&s" alt="Partner 4" className="h-16 mx-auto" />
    </div>
    <p className="text-gray-600 mt-6">Join our growing network of trusted companies.</p>
  </div>
</section>

    </div>
  );
};

export default HomePage;
