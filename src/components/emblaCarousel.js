import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
export default function EmblaCarousel({images}){
    const [emblaRef] = useEmblaCarousel({ loop: true}, [Autoplay({delay : 2000})]);
     return(
        <div className="embla w-full h-[250px]" ref={emblaRef}>
            <div className="embla__container w-full h-full">
                {images.map((index, i) => (
                    <div key={i} className="embla__slide">
                        <img className="cursor-grab w-full h-full object-cover" src={index}></img>
                    </div>
                ))}
            </div>
        </div>
    )
}