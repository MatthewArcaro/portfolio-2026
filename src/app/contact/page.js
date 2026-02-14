import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const contactLinks = [
    {
      name: "Email Me",
      icon: Mail,
      href: "mailto:matthewarcaro@gmail.com",
      color: "hover:text-[#00BFFF]",
      description: "Direct inquiries & professional networking"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "http://linkedin.com/in/matthew-arcaro-2bb371298/",
      color: "hover:text-[#00BFFF]",
      description: "Professional profile & industry connections"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/MatthewArcaro",
      color: "hover:text-[#00F5D4]",
      description: "Source code & technical contributions"
    },
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#F0EEE9]">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 pt-48 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00BFFF] to-[#00F5D4]">
            Connect
          </h1>
          <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">
            Establishing a secure connection...
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-between p-8 bg-[#1A1A1A]/30 border border-zinc-800/50 rounded-3xl transition-all duration-500 hover:border-[#00BFFF]/50 hover:bg-zinc-900/40 ${link.color}`}
            >
              <div className="flex items-center gap-8">
                <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-2xl group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-500">
                  <link.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-zinc-100 group-hover:text-white transition-colors">
                    {link.name}
                  </h2>
                  <p className="text-sm text-zinc-500 mt-1">
                    {link.description}
                  </p>
                </div>
              </div>
              
              <div className="p-2 rounded-full bg-zinc-900 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* Footer Detail */}
        <div className="mt-24 text-center">
          <p className="text-zinc-600 font-mono text-xs tracking-tighter">
            LOC_DATA: LITTLE_NECK_NY // 40.7630° N, 73.7310° W
          </p>
        </div>
      </div>
    </div>
  );
}