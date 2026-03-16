"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fcfbf9] border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              href="/"
              className="font-serif text-2xl font-bold text-gray-900 tracking-tight"
            >
              Avelino<span className="text-[#556b2f]">Fisio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-gray-600 hover:text-[#556b2f] font-medium transition-colors"
            >
              Funcionalidades
            </Link>
            <Link
              href="#pricing"
              className="text-gray-600 hover:text-[#556b2f] font-medium transition-colors"
            >
              Planos
            </Link>
            <Link
              href="#help"
              className="text-gray-600 hover:text-[#556b2f] font-medium transition-colors"
            >
              Ajuda
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-[#556b2f] hover:bg-[#7e965a] text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm"
            >
              Teste Grátis
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
              aria-label="Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#fcfbf9] border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="#features"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#556b2f] hover:bg-gray-50"
            >
              Funcionalidades
            </Link>
            <Link
              href="#pricing"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#556b2f] hover:bg-gray-50"
            >
              Planos
            </Link>
            <Link
              href="#help"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-[#556b2f] hover:bg-gray-50"
            >
              Ajuda
            </Link>
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col space-y-3 px-3">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-gray-600 hover:text-gray-900 font-medium py-3"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#556b2f] text-white px-6 py-3 rounded-full font-medium shadow-sm"
              >
                Teste Grátis
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
