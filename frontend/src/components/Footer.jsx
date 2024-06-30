import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/" className="hover:underline">Listings</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: info@rentwebsite.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Rent Street, Rent City, RC 12345</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a8.34 8.34 0 01-2.36.64 4.11 4.11 0 001.82-2.26 8.2 8.2 0 01-2.6.99 4.1 4.1 0 00-7.07 3.73 11.65 11.65 0 01-8.46-4.29 4.1 4.1 0 001.27 5.47A4.05 4.05 0 012 8.6v.05a4.1 4.1 0 003.29 4.01 4.1 4.1 0 01-1.85.07 4.1 4.1 0 003.83 2.85 8.23 8.23 0 01-5.08 1.75A8.37 8.37 0 010 18.29a11.63 11.63 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.34 8.34 0 0024 4.56a8.23 8.23 0 01-2.46.67z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.48-10 10 0 4.41 3.59 8.05 8.15 8.82v-6.23h-2.45v-2.45h2.45V9.77c0-2.42 1.46-3.76 3.65-3.76 1.06 0 1.96.08 2.22.11v2.57h-1.53c-1.2 0-1.43.57-1.43 1.4v1.83h2.86l-.37 2.45h-2.49v6.23C18.41 20.09 22 16.45 22 12.04c0-5.52-4.5-10-10-10z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-gray-400">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.85 3.65 8.86 8.36 9.82v-6.96H7.9v-2.86h2.45V9.26c0-2.44 1.46-3.77 3.66-3.77 1.06 0 1.96.08 2.22.11v2.58h-1.53c-1.2 0-1.44.57-1.44 1.4v1.83h2.86l-.37 2.45h-2.49v6.96C18.35 20.86 22 16.85 22 12 22 6.48 17.52 2 12 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>Made by 😍 Siddesh Gore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
