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
        src="/src/images/Assets/RunningHeatlhcare.png"
        alt="Running Healthcare"
        className="w-full md:w-1/3"
      />
      <div className="relative overflow-hidden rounded-xl w-full md:w-2/3">
        <img
          src="/src/images/Assets/The Ron AI Logo.png"
          alt="The Ron AI Logo"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4"
        />
        <div 
          className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full p-4 md:p-8 bg-[#39CCCC]/10 rounded-lg border border-[#39CCCC]/20"
            >
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-xs md:text-sm text-[#39CCCC]/60">
                {index + 1} / {items.length}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-center">
                <span className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r",
                  item.gradientFrom && item.gradientTo 
                    ? `from-[${item.gradientFrom}] to-[${item.gradientTo}]`
                    : "from-[#39CCCC] to-[#01FF70]"
                )}>
                  {item.title}
                </span>
              </h2>
              <p className="text-gray-300 text-center text-sm md:text-lg">{item.content}</p>
            </div>
          ))}
        </div>
        
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 p-2 rounded-full"
          onClick={prevSlide}
        >
          <ChevronLeft className="text-white" />
        </button>
        
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 p-2 rounded-full"
          onClick={nextSlide}
        >
          <ChevronRight className="text-white" />
        </button>
        
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