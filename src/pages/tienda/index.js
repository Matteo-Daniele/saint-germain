import Footer from "../../components/footer";
import ItemsToSell from "../../components/itemsToSell";

export default function Tienda(){
    return (
        <>
            <section className="mb-6">
                <ItemsToSell verificating={true}></ItemsToSell>
            </section>
            <Footer></Footer>
        </>
    )
}