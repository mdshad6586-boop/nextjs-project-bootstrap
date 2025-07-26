export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            From residential homes to commercial buildings, we provide comprehensive construction services tailored to meet your specific needs and exceed your expectations.
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Residential Construction */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Residential Construction" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Residential Construction</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We specialize in building custom homes that reflect your lifestyle and preferences. From concept to completion, our team works closely with you to create the home of your dreams.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">Custom Home Construction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">Home Additions & Extensions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">Kitchen & Bathroom Remodeling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">Basement Finishing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">Deck & Patio Construction</span>
                </li>
              </ul>
            </div>

            {/* Commercial Construction */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <img 
                  src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Commercial Construction" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Construction</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our commercial construction services help businesses create functional, attractive spaces that support their operations and growth objectives.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">Office Buildings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">Retail Spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">Warehouses & Industrial Buildings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">Restaurant & Hospitality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span className="text-gray-600">Tenant Improvements</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Renovation & Remodeling</h3>
              <p className="text-gray-600 mb-4">
                Transform your existing space with our expert renovation services.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Whole House Renovations</li>
                <li>• Room Additions</li>
                <li>• Interior Remodeling</li>
                <li>• Exterior Updates</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Design-Build Services</h3>
              <p className="text-gray-600 mb-4">
                Streamlined process from initial design through final construction.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Architectural Design</li>
                <li>• 3D Visualization</li>
                <li>• Permit Assistance</li>
                <li>• Project Management</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Specialty Services</h3>
              <p className="text-gray-600 mb-4">
                Additional services to support your construction needs.
              </p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Concrete Work</li>
                <li>• Roofing Services</li>
                <li>• Electrical & Plumbing</li>
                <li>• HVAC Installation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We follow a proven process to ensure your project is completed on time, within budget, and to your complete satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600 text-sm">
                We meet with you to understand your vision, requirements, and budget for the project.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Planning</h3>
              <p className="text-gray-600 text-sm">
                Our team creates detailed plans and designs, handling permits and approvals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Construction</h3>
              <p className="text-gray-600 text-sm">
                We execute the project with skilled craftsmen, maintaining quality and safety standards.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3">Completion</h3>
              <p className="text-gray-600 text-sm">
                Final walkthrough, quality inspection, and handover of your completed project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quality Assurance</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
                    <p className="text-gray-600 text-sm">Fully licensed contractors with comprehensive insurance coverage</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality Materials</h4>
                    <p className="text-gray-600 text-sm">We use only the highest quality materials from trusted suppliers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Skilled Craftsmen</h4>
                    <p className="text-gray-600 text-sm">Experienced professionals with years of construction expertise</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Warranty Protection</h4>
                    <p className="text-gray-600 text-sm">Comprehensive warranties on all our construction work</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Quality Construction" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and detailed quote for your construction project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:555-123-4567" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
