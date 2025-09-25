// app/page.js
"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const slides = ["/hero1.webp", "/hero2.webp", "/hero3.png"];

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance required
  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  // Touch handlers for mobile
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse handlers for desktop
  const [mouseStart, setMouseStart] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setMouseStart(e.clientX);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    if (mouseStart && touchEnd) {
      const distance = mouseStart - touchEnd;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      if (isLeftSwipe) {
        nextSlide();
      } else if (isRightSwipe) {
        prevSlide();
      }
    }
    
    setMouseStart(null);
    setTouchEnd(null);
  };

  // Prevent image drag (optional)
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <main className="relative min-h-screen">
      <div className="relative h-screen w-full overflow-hidden">
        {slides.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="Oceanman Hero"
              fill
              className="object-cover select-none"
              priority={i === 0}
              draggable={false}
              onDragStart={preventDragHandler}
            />
          </div>
        ))}
        
       
        <div
          className="absolute inset-0 z-10"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        />
        
       
        
     
        
        
      </div>
    </main>
  );
}