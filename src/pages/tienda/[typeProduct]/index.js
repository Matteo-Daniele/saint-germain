import CollectionTienda from "@/components/collectionTienda";
import { pageContent } from "@/lib/productPages";
import { products } from "@/lib/products";
import { useRouter } from "next/router";
export default function Page(){
    const router = useRouter();
    const page = pageContent[router.query.typeProduct];
    const pageProducts = products[router.query.typeProduct]; 
    if(!page){
        return(
            <p>Loading...</p>
        )
    } 
    return (
        <CollectionTienda pageTitle={router.query.typeProduct} mainImage={page.mainImage} products={pageProducts}/>
    )
}