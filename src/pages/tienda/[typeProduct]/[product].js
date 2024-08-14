import ShowProducts from "@/components/showProducts";
import { products } from "@/lib/products";
import { useRouter } from "next/router";
export default function ProductPage(){
    
    const router = useRouter();
    const productName = router.query.product;
    const pageProducts = products[router.query.typeProduct];
    if(!pageProducts){
            return (
                <div><p className="text-white">Loading...</p></div>
            )       
    }
    
    return (
       <ShowProducts name={productName} products={pageProducts} pageTitle={router.query.typeProduct}></ShowProducts>
    )
}