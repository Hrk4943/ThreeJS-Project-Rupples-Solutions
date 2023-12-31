import React from "react";
import Section from "./Sections/Section";
import AboutSection from "./Sections/AboutSection";
import SkillSection from "./Sections/SkillSection";
import ContactSection from "./Sections/ContactSection";
// const Section =(props)=>{
//     const {children}=props
//     return(
//         <section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center`}>{children}</section>
//     )
// }

function Interface() {
  return (
    <>
      <div className="flex flex-col items-center w-screen">
        <AboutSection/>
        <SkillSection/>
        <Section>
          <h1>Projects</h1>
        </Section>
        <ContactSection/>
      </div>
    </>
  );
}

// const AboutSection=()=>{
//     return(
//         <Section>
//             <h1 className="text-6xl font-extralight leading-snug">
//                 Hi, I'm
//                 <br />
//                 <span className="bg-white px-1 italic">Hrithik Gopi Chandrathil</span>
//             </h1>
//             <p className="text-lg text-gray-600 mt-4">I'm a Web Developer</p>
//             <button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}>Contact Me</button>
//         </Section>
//     )
// }

export default Interface;
