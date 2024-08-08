import { useRouter } from "next/router";

export default function ProductPage(){
    const router = useRouter();
    return (
        <div>
            <p>{router.query.product}</p>
            <p>{router.query.typeProduct}</p>
        </div>
    )

}