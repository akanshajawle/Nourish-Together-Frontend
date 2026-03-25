import React from "react";
import { motion } from "framer-motion";

// ✅ Correct image imports
import Hero from "../assets/Hero.png";
import StepsImage from "../assets/Steps.png";
import SDG1Image from "../assets/SDG1.jpg";
import SDG2Image from "../assets/SDG2.jpg";
import SDG3Image from "../assets/SGD3.jpg"; // make sure filename matches
import SDG12Image from "../assets/SDG12.jpg";
import SDG13Image from "../assets/SDG13.jpg";
import HPimg2 from "../assets/HPimg2.jpeg"; // ✅ FIXED

const Home = () => {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-green-100 to-green-50 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
            Nourish Together 🌱
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Donate surplus food and help fight hunger. Together, we can make a difference.
          </p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
            Get Started
          </button>
        </div>

        <div className="mt-10 md:mt-0">
          <img src={Hero} alt="Hero" className="w-full max-w-md" />
        </div>
      </section>

      {/* ================= PROBLEM SECTION ================= */}
      <section className="py-16 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10">
        
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-green-700 mb-4">
            The Problem
          </h2>
          <p className="text-gray-700">
            Millions of people go hungry every day while tons of food is wasted.
            Nourish Together aims to bridge this gap.
          </p>
        </div>

        <div className="flex-1">
          {/* ✅ FIXED IMAGE */}
          <img
            src={HPimg2}
            alt="Problem Illustration"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-green-50 py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-10">
          How It Works
        </h2>

        <img
          src={StepsImage}
          alt="Steps"
          className="mx-auto max-w-3xl"
        />
      </section>

      {/* ================= SDG SECTION ================= */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          Supporting Sustainable Development Goals
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* SDG 1 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src={SDG1Image}
              alt="SDG 1"
              className="w-full h-52 object-cover rounded mb-3"
            />
            <h3 className="font-semibold">No Poverty</h3>
          </div>

          {/* SDG 2 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src={SDG2Image}
              alt="SDG 2"
              className="w-full h-52 object-cover rounded mb-3"
            />
            <h3 className="font-semibold">Zero Hunger</h3>
          </div>

          {/* SDG 3 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src={SDG3Image}
              alt="SDG 3"
              className="w-full h-52 object-cover rounded mb-3"
            />
            <h3 className="font-semibold">Good Health</h3>
          </div>

          {/* SDG 12 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src={SDG12Image}
              alt="SDG 12"
              className="w-full h-52 object-cover rounded mb-3"
            />
            <h3 className="font-semibold">Responsible Consumption</h3>
          </div>

          {/* SDG 13 */}
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src={SDG13Image}
              alt="SDG 13"
              className="w-full h-52 object-cover rounded mb-3"
            />
            <h3 className="font-semibold">Climate Action</h3>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;