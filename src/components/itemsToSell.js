import classNames from "classnames";
export default function ItemsToSell({verificating}){
    const mainImageLink =[
        'https://saintgermain.uy/cdn/shop/collections/Viennoiserie-categoria_900x.jpg',
        "https://saintgermain.uy/cdn/shop/collections/panes-categoria_900x.jpg",
        "https://saintgermain.uy/cdn/shop/collections/Painsuisse_1080x.jpg",
        "https://saintgermain.uy/cdn/shop/collections/Quichequesodecabra_1080x.jpg",
    ]
    const textTypeProduct = ['VIENNOISERIES', 'PANES', 'PATISSERIE', 'ALMUERZOS']; 
    const imageStyle = [
        "h-[150px] w-full object-cover"
    ]
    const firstContainerStyle = classNames(
        "flex flex-col items-center gap-0", {"gap-[20px]": verificating}
    )
    const fatherStyle = classNames(
        "flex flex-col w-[90%] h-[50%] items-center justify-center gap-0", {"gap-[20px]": verificating}
    )
    const sonStyle = [
        "relative w-full h-full group cursor-pointer transition-all duration-100"
    ]
    const textStyle = [
        "absolute bottom-0 left-0 text-[24px] font-bold ml-3 mb-3 group-hover:border-b-2 group-hover:border-solid group-hover:border-white"
    ]
    return(
        <div className={firstContainerStyle}>
            <div className={fatherStyle}>
                <a href="/tienda/viennoiseries" className={sonStyle}>
                    <div className="absolute w-full h-full bg-black bg-opacity-10 group-hover:bg-opacity-30"></div>
                    <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-[#a1b5ff5e]"></div>
                    <img className={imageStyle} src={mainImageLink[0]}/>
                    <h3 className={textStyle}>VIENNOISERIES</h3>
                </a>    
                <a href="/tienda/panes" className={sonStyle}>
                    <div className="absolute w-full h-full bg-black bg-opacity-10 group-hover:bg-opacity-30"></div>
                    <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-[#a1b5ff5e]"></div>
                    <img className={imageStyle} src={mainImageLink[1]}></img>
                    <h3 className={textStyle}>PANES</h3>
                </a>
            </div>
            <div className={fatherStyle}>
                <a href="/tienda/patisserie" className={sonStyle}>
                    <div className="absolute w-full h-full bg-black bg-opacity-10 group-hover:bg-opacity-30"></div>
                    <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-[#a1b5ff5e]"></div>
                    <img className={imageStyle} src={mainImageLink[2]}></img>
                    <h3 className={textStyle}>PATISSERIE</h3>
                </a>
                <a href="tienda/almuerzos" className={sonStyle}>
                    <div className="absolute w-full h-full bg-black bg-opacity-10 group-hover:bg-opacity-30"></div>
                    <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-[#a1b5ff5e]"></div>
                    <img className={imageStyle} src={mainImageLink[3]}></img>
                    <h3 className={textStyle}>ALMUERZOS</h3>
                </a>
            </div>
        </div>
    )
}