import { useEffect, useState } from "react";

const Carousel = () => {
  const slides = [
    {
      src: "https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      caption: "Slide 1",
    },
    {
      src: "https://images.unsplash.com/photo-1454793781512-0fafb38dce83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      caption: "Slide 2",
    },
    {
      src: "https://images.unsplash.com/photo-1512400930990-e0bc0bd809df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Slide 3",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1673356302169-574db56b52cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Slide 4",
    },
    {
      src: "https://images.unsplash.com/photo-1618333258404-f509733839c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1329&q=80",
      caption: "Slide 5",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="relative">
      <div className="flex h-96 items-center justify-center bg-gray-200">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute flex h-full w-full items-center justify-center transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.caption}
              className="h-96"
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        <button
          className="rounded-l bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
          onClick={goToPrevSlide}
        >
          Previous
        </button>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 ${
              index === currentSlide ? "bg-gray-900" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="rounded-r bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700"
          onClick={goToNextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
