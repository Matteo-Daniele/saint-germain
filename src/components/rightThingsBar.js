import classNames from "classnames";

export default function RightThingsBar({isOpenRight, openRight}) {
    const rightBarStyle = classNames(
        "z-10 w-[280px] h-[100vh] fixed top-[0px] right-[-280px] bg-[#344a80] transition-all duration-500", {"right-[0px]": isOpenRight}
    )
    return (
        <div className={rightBarStyle}>
            <div className="flex justify-end">
                <div onClick={
                    () => {
                        openRight(false);
                    }
                    } className="w-[50px] h-[50px] text-white-800 items-center flex justify-center after:content-['\d7'] after:text-[25px]">
                </div>
            </div>
            <div className="h-[100%] text-[22px] flex flex-col justify-start items-center">
                <div className="w-[80%] h-[60%] flex flex-col justify-around">
                    <a href="./aboutUs">SOBRE NOSOTROS</a>
                    <a href="./ourHistory">LOCALES</a>
                    <a href="/tienda">TIENDA</a>
                    <a>AYUDA</a>
                    <a>CONTACTO</a>
                    <h3>INGRESAR</h3>
                </div>
                <div className="mt-3 w-[80%] flex flex-row justify-start gap-6">
                    <div className="w-[20px] h-[20px]">
                        <img src="https://static-00.iconduck.com/assets.00/facebook-icon-1024x1024-810kgvhg.png"></img>
                    </div>
                    <div className="w-[20px] h-[20px]">
                        <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"></img>
                    </div>
                </div>
            </div>
            
        </div>
    )
}