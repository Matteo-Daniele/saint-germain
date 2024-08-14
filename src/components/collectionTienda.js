import { useState } from "react";
import Item from "./item";
export default function CollectionTienda({pageTitle, mainImage, products}){
    const [searchOpen, setSearchOpen] = useState(false);
    const [sortBy, setSortBy] = useState('more-sold');
    const [rightBarOpen, setRightBarOpen] = useState(false);
    const [shoppingOpen, setShoppingOpen] = useState(false); 
    const [showProducts, setShowProducts] = useState(products);
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        if(event.target.value === 'alfabetic-order'){
            const auxProducts = products.map(a => a);
            setShowProducts(auxProducts.sort((a,b) => a.name.localeCompare(b.name)));
        }else if(event.target.value === 'more-sold'){
            setShowProducts(products);
        }else if(event.target.value === 'most-price-to-less-price'){
            const auxProducts = products.map(a => a);
            setShowProducts(auxProducts.sort((a,b) => a.price - b.price));
        }
        console.log("Selected sort option:", event.target.value);
    }

    const textStyle = [
        "absolute bottom-0 left-0 text-[28px] font-solid ml-3 mb-3 tracking-[0.3em]"
    ]
    return(
        <>
            <div className="relative md:h-[40%] md:w-full">
                <div className="absolute w-full h-full bg-black bg-opacity-20 group-hover:bg-opacity-30 tracking"></div>
                <img className="h-[250px] w-full object-cover md:h-full" src={mainImage}></img>
                <h3 className={textStyle}>{pageTitle.toUpperCase()}</h3>
            </div>
            <section>
                <div className="flex flex-col p-6 gap-5">
                    <div className="flex flex-row justify-between w-full h-[50px]">
                        <a href="/tienda" className="text-[#344a80] tracking-widest h-6 hover:bg-white">← VOLVER</a>
                        <label htmlFor="sortBy" className="hidden" >Mas vendidos</label>
                        <select className="text-[#344a80] bg-transparent border-solid border-[#344a80] border-[1px] w-[150px] h-[40px]" name="sortBy" id="sortBy" data-value="more-sold" onChange={handleSortChange}>
                            <option className="w-20 h-20" value="more-sold">MÁS VENDIDOS</option>
                            <option value="alfabetic-order">ALFABETICO A-Z</option>
                            <option value="most-price-to-less-price">PRECIO MENOR A MAYOR</option>
                        </select>
                    </div>
                    <div className="text-[16px] text-[#344a80] tracking-wider">
                        <p className="text-center">IMPORTANTE: LOS PEDIDOS SE PUEDEN REALIZAR CON UN MINIMO DE 48 HORAS DE ANTICIPACION.</p> 
                    </div>
                </div>
                <div className="flex w-full justify-center items-center">
                    <Item showProduct={showProducts} pageTitle={pageTitle} carousel={true}></Item>
                </div>
            </section>
        </>
    )
}