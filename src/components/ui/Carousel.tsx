import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../utils/cn';

interface CarouselProps {
  items: {
    title: string;
    content: string;
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
    <div className="relative overflow-hidden rounded-xl flex flex-col md:flex-row max-w-[1200px] mx-auto">
      <div className="relative overflow-hidden rounded-xl w-full min-h-[400px] bg-[#001B29]/90">
        <div className="absolute top-6 right-6 text-[#39CCCC] text-sm">
          {currentIndex + 1} / {items.length}
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-6 z-10">
          <button
            onClick={prevSlide}
            className="bg-[#001B29]/80 hover:bg-[#001B29] p-4 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="text-[#39CCCC] w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-[#001B29]/80 hover:bg-[#001B29] p-4 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="text-[#39CCCC] w-6 h-6" />
          </button>
        </div>

        <div 
          className="transition-transform duration-500 ease-in-out flex h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="min-w-full p-12 flex flex-col justify-center items-center text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-[#39CCCC]">
                {item.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentIndex === index 
                  ? "bg-[#39CCCC] w-8" 
                  : "bg-[#39CCCC]/30 hover:bg-[#39CCCC]/50"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};