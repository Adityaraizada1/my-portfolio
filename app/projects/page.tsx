"use client";

import React from "react";

export default function AboutPage() {
  const cards = [
    {
      title: "AI Hospital Management System",
      description:
        "A software solution that leverages AI to optimize hospital operations, improve patient care, and streamline administrative tasks.",
      link: "https://github.com/Adityaraizada1/hospitalmanagement_system",
    },
    {
      title: "Machine Learning Website",
      description:
        "A web application designed to teach machine learning concepts interactively through visualizations and hands-on coding exercises.",
      link: "https://github.com/Adityaraizada1/Machine-Learning-Site",
    },
    {
      title: "Model for Cars Dataset",
      description:
        "Multiple machine learning models were trained on a cars dataset to predict the price of a car based on various features.",
      link: "https://github.com/Adityaraizada1/cars_data",
    },
    {
      title: "The Guardians",
      description:
        "A software developed for AI security for women safety using computer vision and deep learning.",
      link: null, // no repo available
    },
  ];

  return (
    <main className="min-h-screen px-6 pt-24 pb-12 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-bold mb-3 text-gray-200 text-center">
        Projects
      </h1>
      <p className="text-lg text-gray-400 mb-12 text-center">
        Innovations. Experiments. Solutions.
      </p>

      {/* Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300"
          >
            {card.link ? (
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-md font-semibold mb-2 text-white hover:underline"
              >
                {card.title}
              </a>
            ) : (
              <h2 className="text-md font-semibold mb-2 text-white">
                {card.title}
              </h2>
            )}

            <p className="text-sm text-gray-300 mb-3 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
