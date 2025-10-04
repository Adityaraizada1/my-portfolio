"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  const cards = [
    {
      title: "AI Hospital Management System",
      date: "Updated on: September 10, 2025",
      description: `
The AI Hospital Management System is an advanced software platform designed to transform how hospitals operate. In traditional hospitals, patient management, doctor coordination, and administrative processes are handled manually, which often leads to delays and inefficiencies. This system aims to change that through data-driven automation and artificial intelligence.

It uses predictive models to analyze patient inflow, manage appointments dynamically, and even suggest optimized treatment schedules based on available resources. Doctors and nurses receive real-time updates, while administrators gain insights into hospital performance through detailed dashboards. 

The system integrates patient electronic records, lab reports, and pharmacy data into a unified, secure database. Using AI, it can predict medicine shortages before they happen and flag unusual patient patterns for early disease detection.

This project represents the future of healthcare — where decision-making is not reactive but proactive, driven by intelligent systems that understand patterns and needs before humans do.
      `,
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600",
    },
    {
      title: "Machine Learning Website",
      date: "Updated on: August 28, 2025",
      description: `
This project is a full-fledged educational website dedicated to simplifying the learning of Machine Learning. The primary motivation behind its creation was the overwhelming complexity beginners face when they first encounter algorithms and mathematical concepts in ML.

The site offers step-by-step visualizations of algorithms like Linear Regression, Decision Trees, Support Vector Machines, and Neural Networks. Users can interactively modify parameters and instantly see how those changes affect outcomes. The interface promotes experimentation, curiosity, and intuitive understanding rather than memorization.

Every page is crafted to explain both the theory and the practical application side-by-side. In addition to interactive visuals, the site contains real-world case studies, project-based exercises, and an integrated notebook where users can write and test their code in real time.

It’s a platform built to make learning Machine Learning not only accessible but enjoyable — designed for students, professionals, and educators alike.
      `,
      image:
        "https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1600",
    },
    {
      title: "Model for Cars Dataset",
      date: "Updated on: October 2, 2025",
      description: `
The Cars Dataset project focuses on predicting vehicle prices using data science and machine learning. It was created to analyze how features such as engine size, horsepower, fuel type, body style, and brand influence market value.

The dataset underwent an extensive preprocessing phase — removing inconsistencies, handling missing values, and encoding categorical variables. Visualizations were performed to uncover relationships between performance metrics and pricing trends.

Multiple models were trained and compared, including Linear Regression, Random Forest, Gradient Boosting, and XGBoost. Random Forest provided the most balanced accuracy and interpretability, achieving an impressive 92% R² score on test data.

Beyond the technical side, the project emphasizes explainability. SHAP (SHapley Additive exPlanations) values were used to interpret how each feature impacts the final prediction, turning the model into a transparent tool rather than a black box. The end result is a robust, explainable system that can accurately estimate car prices based on data patterns.

The deployment of this model through a Flask API demonstrates how a research concept can become a production-level predictive service accessible to everyone.
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
The Guardians is an AI-powered surveillance and security solution built to protect public safety with a focus on women’s security. It combines deep learning and computer vision to detect violence, harassment, and abnormal human behavior in real time.

When the system identifies potential threats, it triggers an automated workflow that alerts nearby authorities and sends video snapshots with geolocation data. This rapid-response mechanism ensures incidents are addressed within seconds rather than minutes. 

The software was designed with consultation from local administration officials in Himachal Pradesh to align with real-world challenges faced by security departments. It can be integrated into existing CCTV infrastructure, making it scalable for urban environments.

The ultimate goal of The Guardians is not just to detect violence but to prevent it. By enabling authorities to act faster and more intelligently, this system represents a leap toward safer communities powered by ethical AI.
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
              Sharing insights, stories, and updates on my projects and
              experiences.
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
