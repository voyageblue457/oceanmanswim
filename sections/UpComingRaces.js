"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const races = [
  {
    id: 1,
    image: "/images/image-1.jpg",
    date: "15th-16th November, 2025",
    location: "MIAMI · USA",
    link: "#",
  },
  {
    id: 2,
    image: "/images/image-2.jpg",
    date: "15th-16th November, 2025",
    location: "PHANG-NGA · THAILAND",
    link: "#",
  },
  {
    id: 3,
    image: "/images/image-3.jpg",
    date: "20th-21st December, 2025",
    location: "BALI · INDONESIA",
    link: "#",
  },
  {
    id: 4,
    image: "/images/image-4.jpg",
    date: "5th-6th January, 2026",
    location: "BARCELONA · SPAIN",
    link: "#",
  },
  {
    id: 5,
    image: "/images/image-5.jpg",
    date: "10th-11th February, 2026",
    location: "CAPE TOWN · SOUTH AFRICA",
    link: "#",
  },
  {
    id: 6,
    image: "/images/image-6.jpg",
    date: "22nd-23rd March, 2026",
    location: "RIO · BRAZIL",
    link: "#",
  },
];

const UpComingRaces = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const slidesToShow = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(races.length / slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const getVisibleRaces = () => {
    const start = currentIndex * slidesToShow;
    return races.slice(start, start + slidesToShow);
  };

  return (
    <section className="bg-[#0b1d3b] text-white py-12 relative">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide">
          Upcoming Races
        </h2>
        <p className="text-sm text-gray-300 mt-2">
          _ Your journey starts today _
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="overflow-hidden">
          {/* Carousel Container */}
          <div className="flex justify-center">
            <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8 max-w-4xl w-full`}>
              {getVisibleRaces().map((race) => (
                <div
                  key={race.id}
                  className="relative overflow-hidden rounded-lg h-[400px] group"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={race.image}
                      alt={race.location}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <p className="text-yellow-400 font-semibold text-lg mb-2">
                      {race.date}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                      {race.location}
                    </h3>
                    <a
                      href={race.link}
                      className="text-yellow-400 font-semibold text-lg inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                    >
                      MORE INFO
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-4 h-4"
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>

                  {/* Border effect */}
                  <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-lg group-hover:border-yellow-400/50 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

     
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full transition shadow z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 18l-6-6 6-6"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full transition shadow z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 6l6 6-6 6"
          />
        </svg>
      </button>
    </section>
  );
};

export default UpComingRaces;