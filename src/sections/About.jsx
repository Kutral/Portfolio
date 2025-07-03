import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1: Summary */}
        <div className="flex flex-col items-start justify-center bg-[#282a36] rounded-2xl shadow-lg p-10 md:col-span-3 min-h-[18rem]">
          <p className="headtext">Summary</p>
          <p className="subtext">
            High-achieving and ambitious Computer Science & Engineering graduate with a specialization in Networking and Cyber Security. Possesses strong foundational knowledge in Python, Bash, SQL, and web development, complemented by hands-on project experience in automated testing, machine learning applications, and web systems.
          </p>
        </div>
        {/* Grid 2: Projects */}
        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#232946] to-[#6c63ff] rounded-2xl shadow-lg p-10 md:col-span-3 min-h-[18rem]">
          <p className="headtext">Projects</p>
          <ul className="subtext list-disc ml-5">
            <li><b>Anomaly Detection in Financial Transactions Security</b> – Machine learning models for fraud detection. <a href="#projects" className="text-blue-200 underline">Read more</a></li>
            <li><b>Automated Testing Framework for Vehicle Control Systems</b> – Python-based framework for automated testing. <a href="#projects" className="text-blue-200 underline">Read more</a></li>
            <li><b>Online Voting System</b> – Secure online voting with Python and Flask. <a href="#projects" className="text-blue-200 underline">Read more</a></li>
          </ul>
        </div>
        {/* Grid 3: Education */}
        <div className="flex flex-col items-start justify-center bg-gradient-to-br from-[#8f5cff] to-[#a084ee] rounded-2xl shadow-lg p-10 md:col-span-3 min-h-[18rem]">
          <p className="headtext">Education</p>
          <p className="subtext">
            Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology, Chennai<br/>
            Bachelor of Technology in Computer Science and Engineering<br/>
            2020-2024<br/>
            CGPA: 8.18 (First Class with Distinction)
          </p>
        </div>
        {/* Grid 4: Certifications */}
        <div className="flex flex-col items-start justify-center bg-[#282a36] rounded-2xl shadow-lg p-10 md:col-span-3 min-h-[18rem]">
          <p className="headtext">Certifications</p>
          <ul className="subtext list-disc ml-5">
            <li>PCAP: Programming Essentials in Python - Cisco</li>
            <li>Cybersecurity Essentials - Cisco</li>
            <li>Fundamentals of Deep Learning - NVIDIA</li>
            <li>CCNAv7: Introduction to Networks - Cisco</li>
            <li>Introduction to Generative AI - AWS Educate</li>
            <li>Introduction to Cyber Security - Cisco</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
