export default function ImageSlider({srcImage, nameShop, locationShop}){
    return (
        <div className="w-full h-full z-10 absolute">
            <img className="absolute inset-0 w-full h-full object-cover" src={srcImage}></img>
            <div className="flex flex-col text-center items-center justify-center w-[60%] absolute text-white text-[40px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h2>{nameShop}</h2>
                <p className="text-[24px]">- {locationShop} -</p>
            </div>
        </div>
    )
}