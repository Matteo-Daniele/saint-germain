import classNames from "classnames";

export default function ShoppingCarBar({isOpenShopping, openShopping}){ 
    const shoppingThings = false;
    const shoppingCarEmpty = "SU CARRITO ACTUALMENTE ESTA VACIO.";
    const rightBarStyle = classNames(
        "z-10 w-[280px] h-[100vh] fixed top-[0px] right-[-280px] bg-[#344a80] transition-all duration-500 flex flex-col justify-between p-4", {"right-[0px]": isOpenShopping}
    )
    return (
        <div className={rightBarStyle}>
            <div className="h-[50%]">
                <div className="flex flex-row">
                    <h2 className="text-[25px] font-semibold w-[90%]">CARRITO DE COMPRA</h2>
                    <div onClick={
                        ()=>{
                            openShopping(false);
                    }
                    } className="w-[60px] h-[60px] text-white-800 items-center flex justify-center after:content-['\d7'] after:text-[30px]">
                    </div>
                </div>
                {!shoppingThings && <h3 className="text-[18px]">{shoppingCarEmpty}</h3>}
            </div>
            <div className="mb-3 text-[18px]">
                <h3><span className="font-bold">IMPORTANTE:</span>LOS PEDIDOS SE PUEDEN REALIZAR CON UN MINIMO DE 48 HORAS DE ANTICIPACION.</h3>
            </div>
        </div>
    )
}