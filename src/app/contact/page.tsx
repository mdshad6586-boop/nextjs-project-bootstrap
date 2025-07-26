import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to start your construction project? Get in touch with us today for a free consultation and detailed quote.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      123 Construction Avenue<br />
                      Builder City, BC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone Numbers</h3>
                    <p className="text-gray-600">
                      Office: (555) 123-4567<br />
                      Mobile: (555) 987-6543<br />
                      Emergency: (555) 911-HELP
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Addresses</h3>
                    <p className="text-gray-600">
                      General: info@mdshadconstruction.com<br />
                      Quotes: quotes@mdshadconstruction.com<br />
                      Support: support@mdshadconstruction.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Emergency calls only
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact</h3>
                <div className="space-y-3">
                  <a 
                    href="tel:555-123-4567" 
                    className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-blue-600 font-bold mr-3">📞</span>
                    <span className="font-medium">Call Now: (555) 123-4567</span>
                  </a>
                  <a 
                    href="mailto:info@mdshadconstruction.com" 
                    className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-blue-600 font-bold mr-3">✉️</span>
                    <span className="font-medium">Email Us</span>
                  </a>
                  <a 
                    href="sms:555-123-4567" 
                    className="flex items-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <span className="text-blue-600 font-bold mr-3">💬</span>
                    <span className="font-medium">Send SMS</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We proudly serve the following areas with our construction services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Primary Service Area</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Builder City</li>
                <li>Construction Town</li>
                <li>Development Village</li>
                <li>Renovation Heights</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Extended Service Area</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Nearby County</li>
                <li>Adjacent Township</li>
                <li>Surrounding Districts</li>
                <li>Regional Communities</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Special Projects</h3>
              <ul className="text-gray-600 space-y-1">
                <li>Statewide Commercial</li>
                <li>Large Developments</li>
                <li>Government Contracts</li>
                <li>Custom Requests</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area listed? <a href="tel:555-123-4567" className="text-blue-600 hover:text-blue-700 font-medium">Contact us</a> to discuss your project location.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our construction services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does a typical construction project take?</h3>
              <p className="text-gray-600">
                Project timelines vary depending on size and complexity. A custom home typically takes 4-6 months, while renovations can range from 2-8 weeks. We provide detailed timelines during the planning phase.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide free estimates?</h3>
              <p className="text-gray-600">
                Yes, we provide free, detailed estimates for all projects. Our team will visit your site, discuss your requirements, and provide a comprehensive quote within 48 hours.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are you licensed and insured?</h3>
              <p className="text-gray-600">
                Absolutely. MD Shad Construction is fully licensed, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage for your peace of mind.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept various payment methods including cash, check, credit cards, and financing options. We typically work with a deposit and progress payments throughout the project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you handle permits and inspections?</h3>
              <p className="text-gray-600">
                Yes, we handle all necessary permits and coordinate inspections with local authorities. This is included in our comprehensive project management service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-900 mb-4">Emergency Services</h2>
          <p className="text-xl text-red-700 mb-8">
            Need immediate assistance? We provide 24/7 emergency construction services for urgent situations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:555-911-HELP" 
              className="inline-block px-8 py-4 bg-red-600 text-white font-semibold rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300"
            >
              Emergency Hotline: (555) 911-HELP
            </a>
            <a 
              href="mailto:emergency@mdshadconstruction.com" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              Emergency Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
