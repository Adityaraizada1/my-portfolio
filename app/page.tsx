"use client";

import React, { useState, useEffect } from "react";
import { FloatingNav } from "../components/ui/resizable-navbar";
import { Home, Info, Mail } from "lucide-react";
import { LoaderFive } from "@/components/ui/loader";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Image from "next/image";

// Typing effect hook
const useTypingEffect = (words: string[], speed = 150, pause = 1000) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout: NodeJS.Timeout;

    if (!deleting) {
      if (charIndex < currentWord.length) {
        timeout = setTimeout(() => setCharIndex(charIndex + 1), speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(charIndex - 1), speed / 2);
      } else {
        setDeleting(false);
        setWordIndex(wordIndex + 1);
      }
    }

    setText(currentWord.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return text;
};

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  const navItems = [
    { name: "Home", link: "/", icon: <Home size={18} /> },
    { name: "Project", link: "/projects", icon: <Info size={18} /> },
    { name: "Blog", link: "/contact", icon: <Mail size={18} /> },
  ];

  const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "Hallo", "नमस्ते", "こんにちは", "привет", "안녕하세요"];
  const typedText = useTypingEffect(greetings, 150, 1000);

  useEffect(() => {
    document.body.style.overflow = "auto"; // scrolling enabled
    const timer = setTimeout(() => {
      setHideLoader(true);
      setTimeout(() => setLoading(false), 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader */}
      {loading && (
        <div
          className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 text-white transition-all duration-500 ${hideLoader ? "translate-x-full opacity-0 scale-110" : "translate-x-0 opacity-100 scale-100"
            }`}
        >
          <LoaderFive text="Generating chat..." />
        </div>
      )}

      {/* Floating Nav */}
      <FloatingNav navItems={navItems} />

      {/* Top Hello Section */}
      <section className="w-full flex items-center justify-center mt-24 lg:mt-32 mb-16">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-extrabold text-yellow-400 font-mono text-center">
          {typedText} 👋
        </h1>
      </section>

      {/* Main content */}
      <main className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center p-6 gap-16 lg:gap-24">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left flex-shrink-0 space-y-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-purple-500">
            Aditya Raizada
          </h1>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
            I’m <span className="text-purple-400 font-semibold">Aditya Raizada</span>, a teen diving headfirst into the world of{" "}
            <span className="text-yellow-400 font-semibold">machine learning</span> while building a startup focused on{" "}
            <span className="text-yellow-400 font-semibold">women’s safety</span>.
            <br />
            I spend my days teaching machines to do my bidding, fueled by caffeine, and buzzing with ideas that might make the world a little safer and a lot more interesting.
            <br />
            Inspired by <span className="text-purple-400 font-semibold">Elon Musk</span>, I’m on a mission to create things that matter—sometimes serious, sometimes silly, but always <span className="text-yellow-400 font-semibold">learning and building</span>.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 mt-4 text-2xl">
            <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="text-blue-600 hover:opacity-80 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Adityaraizada1" target="_blank" rel="noreferrer" className="text-gray-300 hover:opacity-80 transition">
              <FaGithub />
            </a>
            <a href="https://instagram.com/adityaraizada_" target="_blank" rel="noreferrer" className="text-pink-500 hover:opacity-80 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Avatar */}
        <div className="flex justify-center lg:justify-end flex-shrink-0 mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute -inset-2 rounded-2xl border-2 border-dashed border-gray-700/30 pointer-events-none"></div>
            <Image
              src="/profile.jpeg"
              alt="Aditya Raizada"
              width={256}   // match w-64 (16rem)
              height={256}  // match h-64
              className="w-64 h-64 object-cover rounded-2xl border-2 border-purple-500 shadow-lg shadow-purple-800/40 hover:scale-105 transition-transform duration-300"
            />

          </div>
        </div>
      </main>
    </>
  );
}
