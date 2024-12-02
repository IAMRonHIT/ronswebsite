import React from 'react';
import { Linkedin } from 'lucide-react';

const TeamMember = ({ name, role, image, linkedin }: { name: string, role: string, image: string, linkedin?: string }) => {
  const handleLinkedInClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#1A1F2E] rounded-xl overflow-hidden border border-[#39CCCC]/20 hover:border-[#39CCCC]/40 transition-all duration-300">
      <div className="relative">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-[280px] sm:h-[320px] object-cover object-center transform scale-[1.1] hover:scale-[1.05] transition-transform duration-500 ease-out"
          />
        </div>
        {linkedin && (
          <a
            href={linkedin}
            onClick={(e) => handleLinkedInClick(e, linkedin)}
            className="absolute top-4 right-4 p-2 bg-[#1A1F2E]/80 rounded-full backdrop-blur-sm 
                     hover:bg-[#39CCCC]/20 transition-all duration-300 border border-[#39CCCC]/40
                     cursor-pointer z-10"
            aria-label={`Visit ${name}'s LinkedIn profile`}
          >
            <Linkedin className="h-5 w-5 text-[#39CCCC]" />
          </a>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2E] via-transparent to-transparent" />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm sm:text-base text-gray-400">{role}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const team = [
    {
      name: "Tim Hunter",
      role: "Founder & CEO",
      image: "/src/images/Team/Tim.png",
      linkedin: "https://www.linkedin.com/in/thesaasynurse"
    },
    {
      name: "Bill Philbrick",
      role: "Co-Founder and Chief Compliance Officer",
      image: "/src/images/Team/Bill.jpg",
      linkedin: "https://www.linkedin.com/in/william-philbrick-j-d-ll-m-3475ba94"
    },
    {
      name: "Nicole Zonin",
      role: "Chief Clinical Officer",
      image: "/src/images/Team/Nicole.jpeg",
      linkedin: "https://www.linkedin.com/in/nicole-zonin"
    },
    {
      name: "Abigail Mitchell",
      role: "Head of Research & Development",
      image: "/src/images/Team/Abigail Mitchell.jpg",
      linkedin: "https://www.linkedin.com/in/dr-abigail-mitchell-0a515939"
    },
    {
      name: "Natalie Schwartz",
      role: "Chief Medical Officer",
      image: "/src/images/Team/natalie.jpg",
      linkedin: "https://www.linkedin.com/in/natalie-schwartz-md-ms-face-cpe-7211b37"
    },
    {
      name: "Michael Thorn",
      role: "Strategic Advisor",
      image: "/src/images/Team/michael-thorn-jr-rochester-mn.jpg",
      linkedin: "https://www.linkedin.com/in/michaeljthorn"
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39CCCC] to-[#39CCCC]">
              Meet Our Team
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Led by healthcare and technology experts committed to transforming patient care
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;