"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

// Define TypeScript type for Card
type Card = {
  title: string;
  date: string;
  description: string;
  image: string;
  gallery?: string[];
};

export default function BlogPage() {
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  const cards: Card[] = [
    {
      title: "AI Hospital Management System",
      date: "Updated on: September 10, 2025",
      description: `
The AI Hospital Management System is a comprehensive platform designed to transform hospital operations. It uses artificial intelligence to optimize patient scheduling, manage records, predict patient inflow, and streamline administrative tasks. 

With predictive analytics, the system forecasts bed availability and medicine inventory, reducing shortages and delays. Doctors and nurses get real-time insights, while administrators monitor performance via dashboards. 

By integrating patient records, lab results, and pharmacy data, it enables proactive decision-making, enhancing efficiency and patient care.
      `,
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600",
    },
    {
      title: "Machine Learning Website",
      date: "Updated on: August 28, 2025",
      description: `
This project is an interactive educational platform designed to simplify machine learning concepts. Users can visualize algorithms such as Linear Regression, Decision Trees, Neural Networks, and more. 

The site includes live coding exercises, parameter tuning, and real-time output visualization. Its goal is to make learning ML intuitive and hands-on for students, professionals, and educators.
      `,
      image:
        "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1600",
    },
    {
      title: "Model for Cars Dataset",
      date: "Updated on: October 2, 2025",
      description: `
This project trains machine learning models to predict car prices based on a dataset including features like engine size, horsepower, fuel type, and body style. Multiple models were tested, including Linear Regression, Random Forest, and XGBoost. 

Feature engineering, data visualization, and model evaluation were performed. Random Forest achieved the best performance with 92% R². SHAP values were used for explainability, highlighting the impact of each feature.
      `,
      image:
        "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1600",
      gallery: [
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800",
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=800",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800",
      ],
    },
    {
      title: "The Guardians",
      date: "Updated on: September 18, 2025",
      description: `
The Guardians is an AI-based public safety system designed for real-time threat detection and women's safety. It uses computer vision to detect violence or harassment. 

When an incident is detected, authorities receive instant alerts with live video and location. The system is scalable and can integrate with existing CCTV infrastructure to enhance public safety.
      `,
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1600",
    },
  ];

  return (
    <main className="min-h-screen px-6 pt-24 pb-12 flex flex-col items-center">
      <AnimatePresence mode="wait">
        {!selectedCard ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-3 text-gray-200 text-center">
              blog.
            </h1>
            <p className="text-lg text-gray-400 mb-12 text-center">
              A collection of my projects and writings on AI, machine learning,
              and data science.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  onClick={() => setSelectedCard(card)}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 cursor-pointer hover:shadow-lg"
                >
                  <h2 className="text-md font-semibold mb-2 text-white">
                    {card.title}
                  </h2>
                  <p className="text-xs text-gray-400 mb-2">{card.date}</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {card.description.slice(0, 140)}...
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-4xl flex flex-col items-start space-y-4"
          >
            <button
              onClick={() => setSelectedCard(null)}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>

            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={selectedCard.image}
                alt={selectedCard.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4">
              {selectedCard.title}
            </h2>
            <p className="text-sm text-gray-400">{selectedCard.date}</p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-300 leading-relaxed text-base sm:text-lg whitespace-pre-line"
            >
              {selectedCard.description}
            </motion.p>

            {selectedCard.gallery && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 w-full"
              >
                {selectedCard.gallery.map((img: string, index: number) => (
                  <div
                    key={index}
                    className="relative w-full h-48 rounded-xl overflow-hidden shadow-md"
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
