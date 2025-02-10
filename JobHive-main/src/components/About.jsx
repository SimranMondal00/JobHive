import React from "react";

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            JobHive connects talented individuals with top companies worldwide. We aim to build a bridge between job seekers and employers for a seamless hiring experience.
          </p>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 container mx-auto text-center px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            To empower individuals by providing them with the best job opportunities and help companies find the right talent for their teams.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            To become the world’s most trusted job platform, fostering growth and innovation for both job seekers and employers.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/path/to/team-member1.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/path/to/team-member2.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/path/to/team-member3.jpg"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold">Emily Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Whether you’re looking for your dream job or the perfect candidate, JobHive is here to help you achieve your goals.
          </p>
          <button className="bg-yellow-500 px-6 py-3 rounded-lg font-bold hover:bg-yellow-600">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;