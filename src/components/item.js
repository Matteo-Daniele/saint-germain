import classNames from "classnames"

export default function Item({showProduct, pageTitle, carousel}){

    const itemFatherStyle = classNames (
        "flex gap-5", {"grid grid-flow-row grid-cols-2 gap-6 p-6" : carousel}, {"md:grid md:grid-flow-row md:grid-cols-4 md:items-center md:justify-center md:gap md:w-[70%]" : carousel}
    )
    const imageLinkStyle = classNames(
        {"w-[140px] h-[70%]" : !carousel}, {"md:w-[180px] h-[70%]" : !carousel}, {"w-full h-[80%]" : carousel},
    )
    const textSyle = classNames(
       {"w-full h-[30%]" : !carousel}, {"w-full h-[20%]" : carousel}
    )
    const imageStyle = classNames (
        "w-full h-full", {"object-cover" : carousel}, {"object-cover" : !carousel}
    )
  return (
    <ul className={itemFatherStyle}>
       { showProduct.map((product, index) => (
            <li key={product.name} className="flex flex-col text-center gap-1">
                <a className={imageLinkStyle} href={`/tienda/${pageTitle}/${product.name}`}>
                    <img className={imageStyle} src={product.link}></img>
                </a>
                <div className={textSyle}>
                    <h2 className="text-[#344a80] text-[14px]">{product.name.toUpperCase()}</h2>
                    <p className="text-[#344a80] text-[12px] font-light">${product.price},00</p>
                </div>
            </li>    
        ))}
    </ul>
  )
}