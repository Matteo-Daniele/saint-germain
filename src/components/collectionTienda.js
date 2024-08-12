import Footer from "@/components/footer";
import Header from "@/components/header";
import RightThingsBar from "@/components/rightThingsBar";
import SearchBar from "@/components/searchBar";
import ShoppingCarBar from "@/components/shoppingCarBar";
import classNames from "classnames";
import { useState } from "react";
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

    const mainStyle = classNames(
        "bg-[#e9eae4] overflow-x-hidden relative h-screen", {"overflow-hidden" : rightBarOpen || shoppingOpen}
    )
    const textStyle = [
        "absolute bottom-0 left-0 text-[28px] font-solid ml-3 mb-3 tracking-[0.3em]"
    ]
    return(
        <main className={mainStyle}>
            <header>
                <Header open={setSearchOpen} openRight={setRightBarOpen} openShopping={setShoppingOpen}></Header>
                <SearchBar isOpen={searchOpen} open={setSearchOpen}></SearchBar>
                <RightThingsBar isOpenRight={rightBarOpen} openRight={setRightBarOpen}></RightThingsBar>
                <ShoppingCarBar isOpenShopping={shoppingOpen} openShopping={setShoppingOpen}></ShoppingCarBar>
            </header>
            <div className="relative">
                <div className="absolute w-full h-full bg-black bg-opacity-20 group-hover:bg-opacity-30 tracking"></div>
                <img className="h-[250px] w-full object-cover" src={mainImage}></img>
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
                <ul className="grid grid-flow-row grid-cols-2 gap-6 p-6">
                    {
                        showProducts.map((product, index) => (
                            <li key={product.name} className="flex flex-col text-center gap-1">
                                <a className="w-full h-[80%]" href={`/tienda/${pageTitle}/${product.name}`}>
                                    <img className="w-full h-full object-contain" src={product.link}></img>
                                </a>
                                <div className="w-full h-[20%]">
                                    <h2 className="text-[#344a80] text-[14px]">{product.name.toUpperCase()}</h2>
                                    <p className="text-[#344a80] text-[12px] font-light">${product.price},00</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <Footer></Footer>
        </main>
    )
}