export default function MainImage(){
    const style={
        backgroundImage: `url('https://saintgermain.uy/cdn/shop/t/20/assets/guarda.svg')`,
        width: '100%',
      }
    return (
        <div className="w-[100%] h-[65vw] flex flex-col md:h-[54vw]">
            <div className="w-full h-[80%] md:h-full">
                <img className="size-full" src="https://saintgermain.uy/cdn/shop/files/home-sin-guarda_1600x.jpg?v=1669395143"></img>
            </div>
            <div className="w-full relative h-[20%] bg-cover md:h-[80px] md:w-full md:bg-contain" style={style}>
            </div>
        </div>
    )
}