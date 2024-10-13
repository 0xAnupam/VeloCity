// components/Navbar.js
'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import useAuth from '../hooks/useAuth';
import { Home, BookOpen, MapPin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const menuItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/booking', label: 'Book a Ride', icon: BookOpen },
    { href: '/tracking', label: 'Track Your Ride', icon: MapPin },
  ];

  return (
    <nav className="fixed w-full z-50">
      <div className="backdrop-blur-md bg-white/30 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Velo<span className="text-blue-600">City</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center transition ${
                  pathname === item.href
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                <item.icon className="w-5 h-5 mr-1" />
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="flex items-center text-gray-800 hover:text-blue-600 transition focus:outline-none"
                >
                  <span className="mr-2">{user.name}</span>
                  <Image
                    src="/user_avatar.jpeg" 
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                </button>
                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-gray-800 hover:text-blue-600 transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
          <button onClick={toggleMenu} className="md:hidden text-gray-800">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/30 border-b border-white/20">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block transition ${
                  pathname === item.href
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-800 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link
                  href="/profile"
                  className="block text-gray-800 hover:text-blue-600 transition"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-gray-800 hover:text-blue-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block text-gray-800 hover:text-blue-600 transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
