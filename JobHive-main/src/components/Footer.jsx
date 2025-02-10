import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm text-gray-300">
            We connect talented individuals with top companies worldwide. Find
            your dream job and build a career you love.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="text-gray-300 hover:text-yellow-500 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/jobs"
                className="text-gray-300 hover:text-yellow-500 transition"
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-300 hover:text-yellow-500 transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="text-gray-300 hover:text-yellow-500 transition"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">
            Email: support@jobhive.com
            <br />
            Phone: +1 (555) 123-4567
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} JobHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
