export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About MD Shad Construction</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            With over 15 years of experience in the construction industry, MD Shad Construction has built a reputation for excellence, quality craftsmanship, and unwavering commitment to client satisfaction.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2008 by Mohammad Shad, MD Shad Construction began as a small residential construction company with a simple mission: to build quality homes that families could be proud of. What started as a one-man operation has grown into a full-service construction company serving both residential and commercial clients.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our journey has been marked by continuous growth, learning, and adaptation to new technologies and construction methods. We've successfully completed over 500 projects, ranging from custom homes to large commercial developments.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, MD Shad Construction stands as a testament to the power of dedication, quality workmanship, and building lasting relationships with our clients and community.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Construction site" 
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional construction services that exceed our clients' expectations while maintaining the highest standards of quality, safety, and professionalism. We are committed to building lasting relationships through honest communication, reliable service, and superior craftsmanship.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and respected construction company in our region, known for our innovation, sustainability practices, and commitment to creating spaces that enhance the lives of those who use them. We envision a future where every project contributes positively to our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we interact with our clients, partners, and community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">Q</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every project is executed with meticulous attention to detail and the highest standards of craftsmanship.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honesty and transparency are at the core of our business. We build trust through open communication and ethical practices.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Safety</h3>
              <p className="text-gray-600">
                The safety of our workers, clients, and the public is our top priority. We maintain strict safety protocols on every job site.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">R</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                Our clients can count on us to deliver projects on time and within budget. We keep our promises and exceed expectations.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">I</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and construction methods to provide better solutions and more efficient processes.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We are committed to giving back to our community and supporting local businesses and initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced team of professionals is dedicated to bringing your construction vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-2xl font-bold">MS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mohammad Shad</h3>
              <p className="text-blue-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                With over 15 years of experience, Mohammad leads our team with vision and expertise in all aspects of construction management.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-2xl font-bold">PM</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Project Manager</h3>
              <p className="text-blue-600 font-medium mb-3">Senior Project Manager</p>
              <p className="text-gray-600 text-sm">
                Our experienced project managers ensure every project runs smoothly from start to finish, maintaining quality and timelines.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-600 text-2xl font-bold">CS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Construction Supervisor</h3>
              <p className="text-blue-600 font-medium mb-3">Site Supervisor</p>
              <p className="text-gray-600 text-sm">
                Our skilled supervisors oversee daily operations, ensuring safety protocols and quality standards are maintained.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
