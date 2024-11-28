import React from 'react';
import { Linkedin } from 'lucide-react';

const TeamMember = ({ name, role, image, linkedin }: { name: string, role: string, image: string, linkedin?: string }) => (
  <div className="text-center">
    <div className="relative mb-4 rounded-xl overflow-hidden group">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] to-transparent opacity-60" />
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      )}
    </div>
    <h3 className="text-xl font-semibold mb-1">{name}</h3>
    <p className="text-gray-400">{role}</p>
  </div>
);

const Team = () => {
  const team = [
    {
      name: "Tim Hunter",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      linkedin: "#"
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      linkedin: "#"
    },
    {
      name: "David Rodriguez",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      linkedin: "#"
    },
    {
      name: "Emily Thompson",
      role: "Healthcare Operations Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      linkedin: "#"
    }
  ];

  return (
    <section id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#39CCCC] to-[#01FF70]">
              Meet Our Team
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Led by healthcare and technology experts committed to transforming patient care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;