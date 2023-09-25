import React from "react";
import Section from "./Section";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <Section>
      <h1 className="text-6xl font-extralight leading-snug">
        Hi, I'm
        <br />
        <span className=" px-1 italic">Hrithik Gopi Chandrathil</span>
      </h1>
      <motion.p
        className="text-lg text-gray-600 mt-4"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}
      >
        I'm a Web Developer
      </motion.p>
      <motion.button
        className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}
      >
        Contact Me
      </motion.button>
    </Section>
  );
}

export default AboutSection;
