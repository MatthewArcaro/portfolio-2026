'use client'; // Add this at the top

import Link from "next/link";
import { usePathname } from "next/navigation"; // Add this import
import { ArrowLeft, Home, Code2, Briefcase, PersonStanding } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname(); // Get current route

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-[#0A0A0A]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Back to Home / Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-[#F0EEE9]/70 hover:text-[#00BFFF] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Home</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className={`text-sm flex items-center gap-1 transition-colors ${
                pathname === '/' 
                  ? 'text-[#00BFFF] font-semibold' 
                  : 'text-[#F0EEE9]/70 hover:text-[#00BFFF]'
              }`}
            >
              <Home className="w-4 h-4" /> Home
            </Link>
            <Link 
              href="/projects" 
              className={`text-sm flex items-center gap-1 transition-colors ${
                pathname === '/projects' 
                  ? 'text-[#00BFFF] font-semibold' 
                  : 'text-[#F0EEE9]/70 hover:text-[#00BFFF]'
              }`}
            >
              <Code2 className="w-4 h-4" /> Projects
            </Link>
            <Link 
              href="/about" 
              className={`text-sm flex items-center gap-1 transition-colors ${
                pathname === '/about' 
                  ? 'text-[#00BFFF] font-semibold' 
                  : 'text-[#F0EEE9]/70 hover:text-[#00BFFF]'
              }`}
            >
              <PersonStanding className="w-4 h-4" /> About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}