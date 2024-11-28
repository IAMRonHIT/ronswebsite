import React from 'react';
import { Carousel } from './ui/Carousel';

const About = () => {
  const carouselItems = [
    {
      title: "The Problem",
      content: "Healthcare faces critical challenges in administrative burden, prior authorization delays, and fragmented communication, leading to inefficiencies and reduced patient care quality.",
      gradientFrom: "#FF4136",
      gradientTo: "#FF851B"
    },
    {
      title: "The Solution",
      content: "Ron AI addresses these challenges head-on with innovative AI solutions, automating administrative tasks and streamlining communication between all healthcare stakeholders.",
      gradientFrom: "#2ECC40",
      gradientTo: "#01FF70"
    },
    {
      title: "Our Vision",
      content: "A future where AI seamlessly integrates into healthcare, enhancing efficiency, reducing costs, and improving patient outcomes across the entire healthcare ecosystem.",
      gradientFrom: "#7FDBFF",
      gradientTo: "#39CCCC"
    },
    {
      title: "Our Mission",
      content: "To revolutionize healthcare delivery by creating an intelligent, integrated ecosystem that empowers providers, payers, and patients to achieve optimal health outcomes.",
      gradientFrom: "#B10DC9",
      gradientTo: "#F012BE"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#001f3f]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Carousel items={carouselItems} />
          </div>
          
          <div className="relative">
            <div className="relative rounded-xl overflow-hidden h-[500px]">
              <img
                src="https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=800&q=80"
                alt="Healthcare Professional"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001f3f]/80 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;