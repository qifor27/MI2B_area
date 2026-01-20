"use client";

import { projects } from "@/data/projects";
import { useState } from "react";

export default function Home() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] grid-bg relative overflow-hidden">
      {/* Scan Line Effect */}
      <div className="scan-line fixed inset-0 pointer-events-none z-50" />

      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#39FF14] rounded-full animate-float opacity-50" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-[#39FF14] rounded-full animate-float stagger-2 opacity-30" />
        <div className="absolute top-60 left-1/4 w-1.5 h-1.5 bg-[#00FFFF] rounded-full animate-float stagger-3 opacity-40" />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 bg-[#39FF14] rounded-full animate-float stagger-4 opacity-50" />
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-[#BF00FF] rounded-full animate-float stagger-5 opacity-30" />
      </div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Gradient Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#39FF14]/10 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="text-center z-10 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse" />
            <span className="text-[#39FF14] text-sm font-medium tracking-wider uppercase">Project Based Learning 2026</span>
          </div>

          {/* Main Title */}
          <h1 className="font-[family-name:var(--font-orbitron)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight">
            <span className="text-white">KELAS </span>
            <span className="text-[#39FF14] glow-text animate-pulse-glow">MI2B</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-[family-name:var(--font-orbitron)] mb-4 tracking-widest">
            POLITEKNIK NEGERI PADANG
          </p>

          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed font-[family-name:var(--font-inter)]">
            Showcase hasil karya mahasiswa Teknik Informatika dalam Project Based Learning.
            6 project inovatif yang siap menghadapi tantangan industri digital.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mb-10">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#39FF14] font-[family-name:var(--font-orbitron)]">6</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#39FF14] font-[family-name:var(--font-orbitron)]">26</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-[#39FF14] font-[family-name:var(--font-orbitron)]">∞</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Innovation</div>
            </div>
          </div>

          {/* CTA Button */}
          <a href="#projects" className="btn-neon inline-block rounded-lg font-[family-name:var(--font-orbitron)]">
            Explore Projects
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 text-[#39FF14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-orbitron)] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#39FF14] glow-text-subtle">PROJECT</span>
              <span className="text-white"> SHOWCASE</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Klik untuk melihat live demo dari setiap project
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card group animate-fade-in-up stagger-${index + 1}`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ opacity: 0, animationFillMode: 'forwards' }}
              >
                {/* Preview Container */}
                <div className="preview-container relative">
                  <iframe
                    src={project.url}
                    title={project.name}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                  <div className="preview-overlay" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#39FF14]/20 backdrop-blur-sm rounded-full border border-[#39FF14]/30">
                    <span className="text-[#39FF14] text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`}>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon-filled rounded-lg text-sm font-[family-name:var(--font-orbitron)]"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-[#1a1a1a] text-gray-400 rounded border border-[#2a2a2a] group-hover:border-[#39FF14]/30 transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="px-2 py-1 text-xs text-[#39FF14]">
                        +{project.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 pb-5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full py-3 px-4 bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] hover:border-[#39FF14] transition-all group/link"
                  >
                    <span className="text-sm text-gray-400 group-hover/link:text-[#39FF14] transition-colors">
                      View Live Demo
                    </span>
                    <svg className="w-4 h-4 text-[#39FF14] transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="text-center md:text-left">
              <div className="font-[family-name:var(--font-orbitron)] text-2xl font-bold">
                <span className="text-[#39FF14]">MI2B</span>
                <span className="text-white"> PBL</span>
              </div>
              <p className="text-gray-500 text-sm mt-1">Politeknik Negeri Padang</p>
            </div>

            {/* Info */}
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                Project Based Learning • Teknik Informatika • 2026
              </p>
            </div>

            {/* Social/Links */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-600">Powered by</span>
              <span className="text-[#39FF14] font-[family-name:var(--font-orbitron)] text-sm font-semibold">Next.js + Vercel</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-[#1a1a1a]">
            <p className="text-gray-600 text-xs">
              © 2026 MI2B Class. All rights reserved. Made with 💚 by MI2B Students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
