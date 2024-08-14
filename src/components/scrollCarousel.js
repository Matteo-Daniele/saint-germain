import Item from "./item";

export default function ScrollCarousel({products, pageTitle}){
    return (
        <section className="flex flex-nowrap overflow-x-scroll scroll-smooth h-[300px] md:w-[70%]">
                <Item showProduct={products} pageTitle={pageTitle} carousel={false}></Item>
        </section>
    )
}