import { ExternalLink, Github, Shield, Code2, Lock, Globe, Cpu, Zap } from "lucide-react";
import Navbar from "../components/Navbar";

export default function Projects() {
  const projects = [
    {
        title: "Pi-Powered Home Automation",
        description: "Centralized smart home controller built on Raspberry Pi using Home Assistant OS. Implements cross-device automation for TV control, PC Wake-on-LAN (WoL), and IoT lighting through a unified OLED interface.",
        technologies: ["Home Assistant", "Raspberry Pi", "AI", "Networking"],
        category: "IoT / Hardware",
        icon: Cpu, // Or use Zap from Lucide
        image: "HomeAssistantLogo.png",
        github: "https://github.com/MatthewArcaro",
        isLogo: false
    },
    {
      title: "Dump Happens Platform",
      description: "Co-founded and developed a full-stack platform for a service-based business, managing everything from customer intake to service scheduling. Offer services including Bulk Item Removal, Snow Removal, and Moving & Storage Services",
      technologies: ["Next.js", "Node.js", "Tailwind CSS"],
      category: "Full Stack",
      icon: Zap,
      image: "/WhiteLogo.png",
      github: "https://github.com/MatthewArcaro",
      demo: "https://dumphappens.com",
      isLogo: true
    },
    {
      title: "ROBI - Raspberry Pi Robot",
      description: "An autonomous robotics project powered by Raspberry Pi, featuring custom sensor integration and logic for navigation and task execution.",
      technologies: ["Python", "Raspberry Pi", "IoT", "Hardware"],
      category: "Hardware/IoT",
      icon: Cpu,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
      github: "https://github.com/MatthewArcaro",
      isLogo: false
    },
    {
        title: "CaptainEase CRM",
        description: "A specialized CRM platform designed for real estate agents to streamline lead management and client relationships. Real Estate made simple.",
        technologies: ["React", "Express", "MongoDB", "Auth0"],
        category: "SaaS",
        icon: Globe,
        image: "/CaptainEasePreview.png",
        github: "https://github.com/MatthewArcaro/agent-flow",
        demo: "https://captainease.com",
        isLogo: false
    },
    {
        title: "Kim's Sweets",
        description: "A comprehensive digital storefront for a local bakery. Features dynamic product management, a custom shopping cart workflow, and soon to come secure payment processing.",
        technologies: ["Next.js", "Node.js", "Stripe", "Tailwind CSS"],
        category: "E-Commerce",
        icon: Globe,
        // Make sure you have a screenshot of the site or the logo in your public folder
        image: "/KimsLogo.png", 
        github: "https://github.com/MatthewArcaro/KimsSweets",
        demo: "https://kims-sweets.vercel.app",
        isLogo: true
    },
    {
        title: "Movie Meter",
        description: "A cross-platform mobile application for cinephiles. Built with Flutter to browse trending titles, manage a 'Watch Later' queue, and sync user favorites with a persistent relational database.",
        technologies: ["Flutter", "Dart", "PostgreSQL", "REST API"],
        category: "Mobile Development",
        icon: Globe, // Or use 'Clapperboard' if you have it from Lucide
        image: "/Movies.jpg", // Or a relevant movie-themed Unsplash link
        github: "https://github.com/MatthewArcaro/MovieMeter-app",
        isLogo: false
    },
  ];

  return (
    <div className="py-20 bg-[#0A0A0A] min-h-screen text-[#F0EEE9]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="relative text-5xl sm:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto tracking-tight leading-tight select-none">
              <span className="absolute inset-0 blur-3xl bg-[#00BFFF]/5 animate-pulse -z-10"></span>

              <div className="flex items-center justify-center">
                <div className="relative inline-block">
                  {/* Container for text and cursor together */}
                  <div className="inline-flex items-center">
                    {/* Static text that gets revealed */}
                    <div className="terminal-text-container">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-[#F0EEE9] to-[#00BFFF] bg-[length:200%_auto] animate-shimmer">
                        Projects
                      </span>
                      
                    </div>
                  </div>
                  
                  {/* The cursor positioned absolutely to follow the reveal */}
                  <span className="terminal-cursor"></span>
                </div>
              </div>
            </h1>
          <p className="text-xl text-[#F0EEE9]/70 max-w-2xl mx-auto font-mono">
            A collection of software engineering, cybersecurity, and full-stack projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group bg-[#1A1A1A]/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-[#00BFFF]/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className={`relative h-56 overflow-hidden flex items-center justify-center ${project.isLogo ? 'bg-zinc-900/50 p-12' : ''}`}>
                    <img
                        src={project.image}
                        alt={project.title}
                        className={`transition-transform duration-500 group-hover:scale-105 ${
                        project.isLogo 
                            ? 'max-h-full w-auto object-contain' // Styling for Logos
                            : 'w-full h-full object-cover opacity-60 group-hover:opacity-90' // Styling for Photos
                        }`}
                    />
                    
                    {/* Only show the dark gradient overlay for photos, not for logos */}
                    {!project.isLogo && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
                    )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#00BFFF]/10 rounded-lg">
                      <Icon className="w-6 h-6 text-[#00BFFF]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  </div>

                  <p className="text-[#F0EEE9]/70 mb-6 leading-relaxed min-h-[60px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-mono text-[#00BFFF]/80">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-6 border-t border-zinc-800/50">
                    {project.demo && (
                      <a href={project.demo} className="flex items-center gap-2 text-sm hover:text-[#00F5D4] transition-colors">
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}