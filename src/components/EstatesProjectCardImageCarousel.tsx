import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
interface ImageCarouselProps {
  images: string[];
  autoSlideInterval?: number;
}

const EstatesProjectCardImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  autoSlideInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Auto-slide functionality
  useEffect(() => {
    let slideInterval: number | undefined;
    
    if (isAutoPlaying) {
      slideInterval = window.setInterval(() => {
        goToNext();
      }, autoSlideInterval);
    }
    
    return () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };
  }, [isAutoPlaying, goToNext, autoSlideInterval]);

  // Pause auto-play when user interacts
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  // Touch events handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    pauseAutoPlay();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) {
      return;
    }
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // If swipe distance is significant (> 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left, go to next
        goToNext();
      } else {
        // Swipe right, go to previous
        goToPrevious();
      }
    }
    
    setTouchStart(null);
    resumeAutoPlay();
  };
    useEffect(() => {
      AOS.init({ duration: 800, mirror: true });
    }, []);

  return (
    <div 
      data-aos="fade-left"
      className="relative w-full h-[500px] md:h-[600px]"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Image container with smooth transition */}
      <div 
        className="w-full h-full overflow-hidden"
      >
        <div 
        
          className="w-full h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, display: 'flex' }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ minWidth: '100%' }}
            />
          ))}
        </div>
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
          pauseAutoPlay();
          setTimeout(resumeAutoPlay, 3000);
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition duration-300"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
          pauseAutoPlay();
          setTimeout(resumeAutoPlay, 3000);
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition duration-300"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
              pauseAutoPlay();
              setTimeout(resumeAutoPlay, 3000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-white scale-110' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default EstatesProjectCardImageCarousel;