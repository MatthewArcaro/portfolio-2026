import { GraduationCap, Award, BookOpen, Languages, ShieldCheck, Briefcase } from "lucide-react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#F0EEE9]">
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="relative text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto tracking-tight leading-tight select-none">
              <span className="absolute inset-0 blur-3xl bg-[#00BFFF]/5 animate-pulse -z-10"></span>

              <div className="flex items-center justify-center">
                <div className="relative inline-block">
                  <div className="inline-flex items-center">
                    <div className="terminal-text-container">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-[#F0EEE9] to-[#00BFFF] bg-[length:200%_auto] animate-shimmer">
                        About
                      </span>
                    </div>
                  </div>
                  <span className="terminal-cursor"></span>
                </div>
              </div>
            </h1>
        </div>

        {/* Banner Image */}
        <div className="relative mb-12">
          <div className="aspect-[10/1] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
              alt="Matthew Arcaro Coding"
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#00BFFF] to-[#00F5D4] rounded-2xl -z-10 blur-2xl opacity-20"></div>
        </div>

        {/* Profile Info */}
        <div className="space-y-6 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl lg:text-3xl font-bold text-white">Matthew Arcaro</h2>
            <p className="text-[#F0EEE9]/70 leading-relaxed text-base lg:text-lg max-w-4xl">
              I am a Computer Science & Cybersecurity student at Hofstra University. 
              I love building systems just as much as I love breaking them. Tech has always been a passion of mine for as long as I can remember. 
            </p>
            <p className="text-[#F0EEE9]/70 leading-relaxed text-base max-w-4xl">
              Outside the classroom, I am an entrepreneur. Co-founding Dump Happens taught me how to utilize my tech skills to scale a business from the ground up.
            </p>
          </div>

          {/* Bilingual Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg">
            <Languages className="w-5 h-5 text-[#00BFFF]" />
            <span className="text-sm">Bilingual (English/Spanish)</span>
          </div>
        </div>

        {/* Work Experience Card */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 lg:p-6 space-y-4 mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-[#00F5D4]" />
            <h3 className="text-lg font-bold text-white">Work Experience</h3>
          </div>

          {/* Altice USA */}
          <div className="border-l-2 border-[#00BFFF] pl-4 py-1">
            <h4 className="text-white font-semibold">Full Stack Software Engineering Intern</h4>
            <p className="text-sm text-[#00BFFF]">Altice USA</p>
            <p className="text-xs text-zinc-500 mb-2">January 2025 - Summer 2025</p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Collaborated on large-scale web applications, contributing to both frontend UI components and backend API logic to enhance telecommunications management systems.
            </p>
          </div>

          {/* Python Tutor */}
          <div className="border-l-2 border-zinc-700 pl-4 py-1">
            <h4 className="text-white font-semibold">Python Tutor</h4>
            <p className="text-sm text-[#00F5D4]">Hofstra University</p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Guided students through complex data structures and algorithmic concepts, simplifying Python fundamentals to improve student success rates in foundational CS courses.
            </p>
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Education */}
          <div className="bg-[#1A1A1A]/40 border border-zinc-800 rounded-xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-6 h-6 text-[#00BFFF]" />
              <h2 className="text-xl lg:text-2xl font-bold text-white">Education</h2>
            </div>
            <h3 className="text-lg lg:text-xl text-[#F0EEE9] font-semibold">B.S. in Computer Science & Cybersecurity</h3>
            <p className="text-[#00BFFF] mb-2 font-medium">Hofstra University</p>
            <p className="text-[#F0EEE9]/60 text-sm mb-4">GPA: 3.64</p>
            <div className="flex flex-wrap gap-2">
              {["Data Structures", "Network Security", "Ethical Hacking", "Operating Systems"].map(course => (
                <span key={course} className="px-2 py-1 bg-zinc-900 rounded border border-zinc-800 text-xs text-zinc-400">
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Amazon CTF */}
          <div className="bg-[#1A1A1A]/40 border border-zinc-800 rounded-xl p-6 lg:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-24 h-24 text-[#00BFFF]" />
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#00BFFF]" />
              <h2 className="text-xl lg:text-2xl font-bold text-white">Key Achievement</h2>
            </div>
            <h3 className="text-lg lg:text-xl text-[#F0EEE9] font-semibold">Amazon CTF Top 10 Finalist</h3>
            <p className="text-[#00BFFF] mb-2 font-medium">Hofstra University Competition</p>
            <p className="text-[#F0EEE9]/70 leading-relaxed text-sm lg:text-base">
              Placed in the top 10 solving complex challenges in reverse engineering, 
              cryptography, and SQL injections in an Amazon-sponsored Capture The Flag event.
            </p>
          </div>
        </div>

        {/* Professional Interests */}
        <div>
          <div className="flex items-center gap-3 mb-6 lg:mb-8">
            <BookOpen className="w-6 h-6 text-[#00BFFF]" />
            <h2 className="text-xl lg:text-2xl font-bold text-white">Professional Interests</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {[
              { title: "Ethical Hacking", desc: "Performing controlled penetration tests to identify vulnerabilities." },
              { title: "Full Stack Dev", desc: "Building scalable web apps using Next.js, Node, and PostgreSQL." },
              { title: "IoT Security", desc: "Securing edge devices and home automation systems like ROBI." }
            ].map((item, i) => (
              <div key={i} className="p-5 lg:p-6 bg-zinc-900/30 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
                <h3 className="text-[#F0EEE9] font-semibold mb-2 text-base lg:text-lg">{item.title}</h3>
                <p className="text-sm text-[#F0EEE9]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}