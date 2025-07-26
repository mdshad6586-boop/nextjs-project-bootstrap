import Hero from '@/components/Hero'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <Hero />
      
      {/* Services Overview Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive construction services for both residential and commercial projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">R</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Residential Construction</h3>
              <p className="text-gray-600 mb-6">
                Custom homes, renovations, and residential projects built to the highest standards.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Commercial Construction</h3>
              <p className="text-gray-600 mb-6">
                Office buildings, retail spaces, and commercial properties designed for success.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-2xl font-bold">R</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Renovation & Remodeling</h3>
              <p className="text-gray-600 mb-6">
                Transform your existing space with our expert renovation and remodeling services.
              </p>
              <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MD Shad?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              With years of experience and a commitment to excellence, we deliver projects that exceed expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl font-bold">15+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
              <p className="text-gray-600">Proven track record in construction industry</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl font-bold">500+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Projects Completed</h3>
              <p className="text-gray-600">Successfully delivered projects on time</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl font-bold">100%</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">Fully licensed and insured for your peace of mind</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-3xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
              <p className="text-gray-600">Always available to address your concerns</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch with us today for a free consultation and quote
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}
