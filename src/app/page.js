import Link from "next/link";
import { ArrowRight, Github, Instagram, Mail } from "lucide-react";
import { ChevronDown } from "lucide-react";


export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Cybersecurity background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="space-y-6">
            
            <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto tracking-tight leading-tight select-none">
              <span className="absolute inset-0 blur-3xl bg-[#00BFFF]/5 animate-pulse -z-10"></span>

              <div className="flex items-center justify-center">
                <div className="relative inline-block">
                  {/* Container for text and cursor together */}
                  <div className="inline-flex items-center">
                    {/* Static text that gets revealed */}
                    <div className="terminal-text-container">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-[#F0EEE9] to-[#00BFFF] bg-[length:200%_auto] animate-shimmer">
                        Matthew
                      </span>
                      <span className="text-[#F0EEE9]"> Arcaro</span>
                    </div>
                  </div>
                  
                  {/* The cursor positioned absolutely to follow the reveal */}
                  <span className="terminal-cursor"></span>
                </div>
              </div>
            </h1>

            <p className="font-mono text-sm text-[#F0EEE9]/60 uppercase tracking-widest mb-4">
              Software Engineering & Cybersecurity Student building real-world applications and securing systems
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#00BFFF] text-[#0A0A0A] font-semibold rounded-lg hover:bg-[#00F5D4] transition-colors"
              >
                Get To Know Me
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-[#F0EEE9] rounded-lg border border-zinc-800 hover:bg-[#2A2A2A] transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 pt-12">
              <a
                href="https://github.com/MatthewArcaro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1A1A1A] rounded-full text-zinc-400 hover:bg-[#2A2A2A] hover:text-[#00BFFF] transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:matthewarcaro@gmail.com"
                className="p-3 bg-[#1A1A1A] rounded-full text-zinc-400 hover:bg-[#2A2A2A] hover:text-[#00BFFF] transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-70 cursor-pointer">
        <ChevronDown 
          className="w-8 h-8 text-[#00BFFF] hover:text-[#00F5D4] transition-colors" 
          strokeWidth={3} 
        />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-[#0A0A0A] border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">15+</div>
              <div className="text-[#F0EEE9]/70">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">15+</div>
              <div className="text-[#F0EEE9]/70">Techincal Concepts applied</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">Top 10</div>
              <div className="text-[#F0EEE9]/70">Amazon CTF Finalist</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00BFFF] mb-2">3+</div>
              <div className="text-[#F0EEE9]/70">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}