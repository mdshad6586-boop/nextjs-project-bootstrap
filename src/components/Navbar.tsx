'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-gray-900">
            MD Shad
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="w-6 h-0.5 bg-gray-900"></span>
            <span className="w-6 h-0.5 bg-gray-900"></span>
            <span className="w-6 h-0.5 bg-gray-900"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Services
              </Link>
              <Link href="/projects" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
