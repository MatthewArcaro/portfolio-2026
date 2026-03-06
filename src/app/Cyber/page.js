import { Shield, Network, Code2, Lock, Terminal, AlertTriangle, Bug, Cpu } from "lucide-react";
import Navbar from "../components/Navbar";

export default function CyberSkills() {
  const skills = [
    {
      title: "Network Analysis & Security",
      description: "Proficient in network traffic analysis and attack simulation using industry-standard tools. Experience with packet capture, protocol analysis, and network replay attacks to identify vulnerabilities.",
      tools: ["tcpdump", "Wireshark", "Netcat"],
      techniques: ["Packet Capture", "Protocol Analysis", "Network Replay Attacks", "Traffic Monitoring"],
      icon: Network,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Web Application Security",
      description: "Skilled in identifying and exploiting common web vulnerabilities. Hands-on experience with OWASP Top 10 vulnerabilities including injection attacks and client-side exploits.",
      tools: ["Burp Suite", "SQL Injection", "XSS Payloads"],
      techniques: ["SQL Injection", "Cross-Site Scripting (XSS)", "CSRF", "Session Hijacking"],
      icon: Lock,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Exploit Development",
      description: "Experience developing custom exploits and leveraging the Metasploit Framework for penetration testing. Capable of scripting automated attacks and payload delivery systems.",
      tools: ["Metasploit", "Ruby", "Python", "Exploit-DB"],
      techniques: ["Metasploit Scripting", "Payload Construction", "Post-Exploitation", "Custom Exploits"],
      icon: Code2,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Buffer Overflow Attacks",
      description: "Deep understanding of memory vulnerabilities in both local and remote contexts. Knowledge in x86 assembly, shellcode development, and bypassing modern security defenses.",
      tools: ["GDB", "x86 Assembly", "Metasploit Payloads", "pwntools"],
      techniques: ["Stack-Based Overflow", "Local Privilege Escalation", "Remote Code Execution", "Shellcode Injection", "DEP/ASLR Bypass"],
      icon: Bug,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Advanced Memory Attacks",
      description: "Expertise in sophisticated memory exploitation techniques beyond traditional buffer overflows. Experience with heap manipulation.",
      tools: ["ROPgadget", "Heap Analysis Tools", "Memory Debuggers"],
      techniques: ["Heap Spraying", "Return-to-libc", "ROP Chains", "Memory Corruption"],
      icon: Cpu,
      color: "from-yellow-500 to-amber-500"
    },
    {
      title: "System & Concurrency Exploits",
      description: "Skilled in exploiting race conditions and timing vulnerabilities in multi-threaded applications. Experience defeating stack protection mechanisms.",
      tools: ["Race Condition Tools", "Thread Analyzers", "Stack Canary Detectors"],
      techniques: ["Race Condition Exploitation", "TOCTOU Attacks"],
      icon: AlertTriangle,
      color: "from-indigo-500 to-violet-500"
    }
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
                <div className="inline-flex items-center">
                  <div className="terminal-text-container">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] via-[#F0EEE9] to-[#00BFFF] bg-[length:200%_auto] animate-shimmer">
                      Cybersecurity Skills
                    </span>
                  </div>
                </div>
                <span className="terminal-cursor"></span>
              </div>
            </div>
          </h1>
          <p className="text-xl text-[#F0EEE9]/70 max-w-2xl mx-auto font-mono mt-4">
            Offensive security expertise from ethical hacking & penetration testing labs.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group bg-[#1A1A1A]/40 border border-zinc-800 rounded-xl overflow-hidden hover:border-[#00BFFF]/50 transition-all duration-300"
              >
                {/* Gradient Header */}
                <div className={`relative h-32 bg-gradient-to-br ${skill.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-8 -mt-16 relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#00BFFF]/10 rounded-lg border border-[#00BFFF]/20">
                      <Icon className="w-7 h-7 text-[#00BFFF]" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{skill.title}</h3>
                  </div>

                  <p className="text-[#F0EEE9]/70 mb-6 leading-relaxed min-h-[80px]">
                    {skill.description}
                  </p>

                  {/* Tools Section */}
                  <div className="mb-6">
                    <h4 className="text-sm font-mono text-[#00BFFF] mb-3 uppercase tracking-wider">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.tools.map((tool) => (
                        <span 
                          key={tool} 
                          className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-mono text-[#F0EEE9]/80 hover:border-[#00BFFF]/50 transition-colors"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Techniques Section */}
                  <div className="pt-6 border-t border-zinc-800/50">
                    <h4 className="text-sm font-mono text-[#00F5D4] mb-3 uppercase tracking-wider">Key Techniques</h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.techniques.map((technique) => (
                        <span 
                          key={technique} 
                          className="px-3 py-1 bg-[#00F5D4]/5 border border-[#00F5D4]/20 rounded-md text-xs font-mono text-[#00F5D4]/90"
                        >
                          {technique}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional: Certifications or Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <p className="text-sm font-mono text-[#F0EEE9]/60">
              <Terminal className="w-4 h-4 inline mr-2 text-[#00BFFF]" />
              Skills developed through hands-on ethical hacking coursework and penetration testing labs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}