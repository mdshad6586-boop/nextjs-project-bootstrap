export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A beautiful 3,500 sq ft custom home featuring modern design elements and energy-efficient systems.',
      details: 'Completed in 2023 • 4 bedrooms, 3 bathrooms • Custom kitchen and master suite'
    },
    {
      id: 2,
      title: 'Downtown Office Complex',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A state-of-the-art 50,000 sq ft office building designed for modern workspaces and collaboration.',
      details: 'Completed in 2023 • 5 floors • LEED certified • Modern amenities'
    },
    {
      id: 3,
      title: 'Luxury Kitchen Renovation',
      category: 'Renovation',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete kitchen transformation with custom cabinetry, granite countertops, and premium appliances.',
      details: 'Completed in 2023 • Custom cabinets • Granite countertops • High-end appliances'
    },
    {
      id: 4,
      title: 'Retail Shopping Center',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A 25,000 sq ft retail complex featuring multiple storefronts and modern architectural design.',
      details: 'Completed in 2022 • 12 retail units • Parking for 150 vehicles • Modern facade'
    },
    {
      id: 5,
      title: 'Custom Deck & Patio',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Expansive outdoor living space with composite decking, built-in seating, and fire pit area.',
      details: 'Completed in 2023 • 800 sq ft deck • Built-in seating • Fire pit • Outdoor kitchen'
    },
    {
      id: 6,
      title: 'Warehouse Facility',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A 75,000 sq ft distribution warehouse with modern loading docks and office space.',
      details: 'Completed in 2022 • 75,000 sq ft • 20 loading docks • Office space • Climate controlled'
    },
    {
      id: 7,
      title: 'Bathroom Remodel',
      category: 'Renovation',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury master bathroom renovation featuring marble tiles, custom vanity, and walk-in shower.',
      details: 'Completed in 2023 • Marble finishes • Custom vanity • Walk-in shower • Heated floors'
    },
    {
      id: 8,
      title: 'Restaurant Build-Out',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete restaurant interior build-out including kitchen, dining area, and bar installation.',
      details: 'Completed in 2023 • Commercial kitchen • 120 seat dining • Full bar • Modern design'
    },
    {
      id: 9,
      title: 'Home Addition',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Two-story addition adding 1,200 sq ft including family room, bedroom, and full bathroom.',
      details: 'Completed in 2022 • 1,200 sq ft addition • Family room • Bedroom • Full bathroom'
    }
  ]

  const categories = ['All', 'Residential', 'Commercial', 'Renovation', 'Industrial']

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our portfolio of completed construction projects. From custom homes to commercial buildings, each project showcases our commitment to quality and craftsmanship.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">{project.description}</p>
                  <p className="text-gray-500 text-xs">{project.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Statistics</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself. Here are some key numbers from our completed projects.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "MD Shad Construction exceeded our expectations. The quality of work and attention to detail was outstanding. Our new home is everything we dreamed of."
                </p>
                <div className="font-semibold text-gray-900">- Sarah Johnson</div>
                <div className="text-gray-500 text-sm">Custom Home Project</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Professional, reliable, and skilled. They completed our office renovation on time and within budget. Highly recommend MD Shad Construction."
                </p>
                <div className="font-semibold text-gray-900">- Michael Chen</div>
                <div className="text-gray-500 text-sm">Office Renovation</div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  <span>★★★★★</span>
                </div>
                <p className="text-gray-600 italic mb-4">
                  "From start to finish, the team was professional and communicative. Our kitchen remodel turned out beautifully. Thank you MD Shad!"
                </p>
                <div className="font-semibold text-gray-900">- Emily Rodriguez</div>
                <div className="text-gray-500 text-sm">Kitchen Renovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your construction needs and create something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a 
              href="/services" 
              className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
