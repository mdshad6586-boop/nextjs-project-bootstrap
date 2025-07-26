export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MD Shad Construction</h3>
            <p className="text-gray-300 mb-4">
              Building dreams with quality and precision. Your trusted partner for all construction needs.
            </p>
            <p className="text-gray-300">
              Licensed & Insured Construction Company
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </a>
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors">
                Services
              </a>
              <a href="/projects" className="block text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@mdshadconstruction.com</p>
              <p>Address: 123 Construction Ave, Builder City, BC 12345</p>
              <p>Hours: Mon-Fri 8AM-6PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} MD Shad Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
