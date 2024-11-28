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
    <div className="relative overflow-hidden rounded-xl">
      <div 
        className="transition-transform duration-500 ease-in-out flex"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-full p-8 bg-[#39CCCC]/10 rounded-lg border border-[#39CCCC]/20"
          >
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm text-[#39CCCC]/60">
              {index + 1} / {items.length}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
              <span className={cn(
                "bg-clip-text text-transparent bg-gradient-to-r",
                item.gradientFrom && item.gradientTo 
                  ? `from-[${item.gradientFrom}] to-[${item.gradientTo}]`
                  : "from-[#39CCCC] to-[#01FF70]"
              )}>
                {item.title}
              </span>
            </h2>
            <p className="text-gray-300 text-center text-lg">{item.content}</p>
          </div>
        ))}
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#39CCCC]/10 border border-[#39CCCC]/20 
                 hover:bg-[#39CCCC]/20 transition-all duration-300 group"
      >
        <ChevronLeft className="h-6 w-6 text-[#39CCCC] group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#39CCCC]/10 border border-[#39CCCC]/20 
                 hover:bg-[#39CCCC]/20 transition-all duration-300 group"
      >
        <ChevronRight className="h-6 w-6 text-[#39CCCC] group-hover:scale-110 transition-transform" />
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
  );
};