import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
        Hey there! I am Chinmaya Acharya, a tech enthusiast currently pursuing my Bachelor of Technology in Computer Science from VIT-AP University. Driven by a passion for technology and web development, I have immersed myself in the ever-evolving world of software development, honing my skills through hands-on projects and participation in prestigious programs like Google Cloud Arcade.
        </p>

        <br />

        <p className="text-xl">
        My journey in web development has led me to create projects using React JS and Node JS, allowing me to develop a strong foundation in building dynamic and user-friendly web applications. Beyond technical expertise, I am a dedicated team player and leader. I have actively engaged in extracurricular activities throughout my academic journey, serving as the Vice President for Audit in Be a Nerd Club and as an Events Chair in the Microsoft Student Chapter. These experiences have nurtured my leadership skills, teamwork abilities, and event management expertise.
        </p>
      </div>
    </div>
  );
};

export default About;
