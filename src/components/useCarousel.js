import Carousel from "./Carousel"
export default function UseCarousel(){
    const images = [
        'https://saintgermain.uy/cdn/shop/files/pocitos1_1400x.jpg?v=1668002764',
        'https://infonegocios.info/content/images/2022/07/21/129521/conversions/800x453-saint-germain-cafe-parisien-2-medium-size.jpg',
        'https://saintgermain.uy/cdn/shop/files/divino-home_1400x.jpg?v=1667568207',
      ]
      const imagesTitle = [
        'BOULANGERIE',
        'CAFE PARISIEN',
        'CAFE BISTROT',
      ]
      const imageText = [
        '- POCITOS -',
        '- CARRASCO -',
        '- DIVINO CENTRAL -',
      ]
    return (
        <Carousel autoSlide={true} autoSlideInterval={10000}>
            {images.map((image, index) => (
                <div key={index} className="relative w-full h-full flex flex-col text-center">
                <div className="absolute w-full h-full bg-black bg-opacity-30"></div>
                <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-[#6080fa5e]"></div>
                <img className="w-full h-full object-cover" src={image} alt={`Slide ${index + 1}`} /> 
                <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[60%]">
                    <h2 className="opacity-0 z-20 text-[36px] group-[.slide-active]:opacity-100 transition-all duration-[2000ms] md:text-[72px] md:-tracking-tighter">{imagesTitle[index]}</h2>
                    <p className="opacity-0 z-20 text-[24px] group-[.slide-active]:opacity-100 transition-all duration-[3000ms] md:[48px] md:-tracking-tighter">{imageText[index]}</p>
                </div>
                </div>
            ))}
        </Carousel>
    )
}