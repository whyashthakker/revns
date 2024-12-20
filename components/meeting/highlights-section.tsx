"use client";
import { motion } from "framer-motion";
import { PiCheckCircle } from "react-icons/pi";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const highlights = [
  {
    title: "Strategy + Design",
    description: "Turn your ideas into reality with our development and design services.",
  },
  {
    title: "Free Audit & Consultation",
    description: "Get expert advice on how to improve your business and increase your online presence.",
  },
  {
    title: "Dedicated Account Manager",
    description: "Get a dedicated AM for your product.",
  },
];

export const HighlightsSection = () => {
  return (
    <>
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          variants={checkItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 1.8 }}
          className="flex gap-x-4 py-4"
        >
          <PiCheckCircle className="rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
          <ul>
            <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
            <div className="text-gray-400">{item.description}</div>
          </ul>
        </motion.div>
      ))}
    </>
  );
};