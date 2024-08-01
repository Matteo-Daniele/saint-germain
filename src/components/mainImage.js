export default function MainImage(){
    return (
        <div className="w-[100%] h-[65vw] flex flex-col">
            <div className="w-full h-[80%]">
                <img className="size-full" src="https://saintgermain.uy/cdn/shop/files/home-sin-guarda_1600x.jpg?v=1669395143"></img>
            </div>
            <div className="w-full relative h-[20%]">
                <img className="absolute inset-0 w-full h-full object-cover" src="https://saintgermain.uy/cdn/shop/t/20/assets/guarda.svg"></img>
            </div>
        </div>
    )
}