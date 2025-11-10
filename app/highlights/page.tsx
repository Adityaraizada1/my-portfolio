"use client";

import React from "react";

export default function AboutPage() {
  // Images stored in /public
  const images = [
    "/lostfound1.png",
    "/lostfound2.png",
    "/lostfound3.png",
  ];

  // Your project website link
  const websiteLink = "https://lost-and-found-ten-nu.vercel.app/login"; 

  return (
    <main className="min-h-screen px-6 pt-24 pb-12 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-bold mb-3 text-gray-200 text-center">
        Highlights
      </h1>
      <p className="text-lg text-gray-400 mb-12 text-center">
        Lost and Found System – Built for University
      </p>

      {/* Project Card */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 w-full max-w-4xl mb-8 hover:scale-[1.02] transition-transform duration-300">
        <h2 className="text-2xl font-semibold text-white mb-3">
          Lost and Found System
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          A full-stack web-based application developed for my university to
          help students report, manage, and locate lost items efficiently. The
          platform allows users to post found items, search for lost belongings,
          and communicate with the admin — ensuring a smooth and user-friendly
          experience for the campus community.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg border border-white/10"
            >
              <img
                src={src}
                alt={`Lost and Found Screenshot ${idx + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Visit Website Button */}
        <div className="text-center">
          <a
            href={websiteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 text-sm font-semibold text-white border border-white/20 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-300"
          >
            Visit Website ↗
          </a>
        </div>
      </div>
    </main>
  );
}
