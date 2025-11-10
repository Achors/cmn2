import { FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class four="bg-gray-900 text-white py-12 border-t-4 border-success">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-accent mb-3">CMN Solutions</h2>
            <p className="text-gray-400 text-sm">
              Connecting businesses to global talent and streamlined operations.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-success mb-3">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#bpo" className="hover:text-white transition">Business Process Outsourcing</a></li>
              <li><a href="#rpo" className="hover:text-white transition">Recruitment Process Outsourcing</a></li>
              <li><a href="#consulting" className="hover:text-white transition">Process Consulting</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-success mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/case-studies" className="hover:text-white transition">Case Studies</a></li>
              <li><a href="/careers" className="hover:text-white transition">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-success mb-3">Get in Touch</h3>
            <div className="space-y-3 text-gray-400 text-sm">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-success" />
                info@cmnsolutions.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-success" />
                +31 20 123 4567
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-2xl hover:text-success transition">
                  <FaLinkedin />
                </a>
                <a href="#" className="text-2xl hover:text-success transition">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-500 text-xs">
          <p>© {currentYear} CMN Solutions B.V. All rights reserved. | <a href="/privacy" className="hover:text-success">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
}