import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CarouselProps {
  items: {
    title: string;
    content: string;
    gradientFrom?: string;
    gradientTo?: string;
  }[];
}

export const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((current) => (current + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current - 1 + items.length) % items.length);
  };

  return (
    <div className="relative overflow-hidden rounded-xl flex flex-col md:flex-row">
      <img
        src="D:/Ron Official/website/Ronnyy/src/images/Assets/RunningHeatlhcare.png"
        alt="Running Healthcare"
        className="w-full md:w-1/3 h-48 md:h-auto object-cover"
      />
      <div className="relative overflow-hidden rounded-xl w-full md:w-2/3">
        <img
          src="D:/Ron Official/website/Ronnyy/src/images/Assets/The Ron AI Logo.png"
          alt="The Ron AI Logo"
          className="absolute top-4 md:top-8 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-auto"
        />
        <div className="absolute top-16 md:top-24 w-full flex justify-between px-4 z-10">
          <button
            onClick={prevSlide}
            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="text-[#39CCCC]" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="text-[#39CCCC]" />
          </button>
        </div>
        <div 
          className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full p-8 bg-[#39CCCC]/10 rounded-lg border border-[#39CCCC]/20"
            >
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs md:text-sm text-[#39CCCC]">
                {index + 1} / {items.length}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center text-[#39CCCC] px-2">
                {item.title}
              </h2>
              <p className="text-base md:text-lg text-gray-300 text-center px-4">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentIndex === index 
                  ? "bg-[#39CCCC] w-4" 
                  : "bg-[#39CCCC]/30 hover:bg-[#39CCCC]/50"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};