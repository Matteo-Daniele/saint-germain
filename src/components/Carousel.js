import { useEffect, useState } from "react";

export default function Carousel({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    const goToSlide = (index) => {
        setCurr(index);
    };
    
    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, curr]);

    return (
        <div className="w-full h-full relative overflow-hidden">
            <div className="w-full h-full flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }}>
                {slides.map((slide, index) => (
                    <a href="./aboutUs" key={index} className={`min-w-full min-h-full group ${curr === index ? "slide-active" : ""}`}>
                        {slide}
                    </a>
                ))}
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            onClick={() => goToSlide(i)}
                            className={`z-10 transition-all w-2 h-2 bg-white rounded-full cursor-pointer md:w-3 md:h-3 ${
                                curr === i ? "p-1" : "bg-opacity-50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
