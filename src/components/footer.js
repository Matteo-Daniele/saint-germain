export default function Footer(){
    const city = [
        "POCITOS",
        "CARRASCO",
        "DIVINO CENTRAL"
    ]
    const direction = [
        "GESTIDO Y MASINI",
        "RIVERA Y AROCENA",
        "IRLANDA Y AV.ITALIA",
    ]
    const number = [
        "096 288 777",
        "096 236 744",
        "097 903 545",
    ]
    const email = [
        "CONTACTO@SAINTGERMAIN.UY",
        "CARRASCO@SAINTGERMAIN.UY",
        "DIVINO@SAINTGERMAIN.UY",
    ]
    return (
        <footer className="w-full h-[750px] bg-[#344a80] flex flex-col items-center">
            <a className="w-5/6 h-1/5 flex flex-col items-center justify-center border-b-solid border-b-[#BFAF82] border-b-[1px]" href="./">
                <img className="w-[60%] h-[60%] " src="https://cdn.shopify.com/s/files/1/0515/8453/2641/files/logofooter.png"></img>
            </a>
            {city.map((index, i) => (
                <ul key={i} className="w-5/6 h-1/6 flex flex-col items-center justify-center border-b-solid border-b-[#BFAF82] border-b-[1px] text-[14px]">
                    <li className="text-[#BFAF82] font-semibold">{index}</li>
                    <li>{direction[i]}</li>
                    <li>{number[i]}</li>
                    <li>{email[i]}</li> 
                </ul>
            ))}
            <ul className="w-full h-2/5 flex flex-col items-center justify-evenly text-[14px]">
                <li className="flex flex-row items-center gap-2">
                    <img className="w-[16px] h-[16px]" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png"></img>
                    <img className="w-[16px] h-[16px]" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-app-round-white-icon.png"></img>
                    <p>@SAINTGERMAIN.UY</p>
                </li>
                <li className="text-[#BFAF82] font-semibold cursor-pointer">SUSCRIBITE AL NEWSLETTER</li>
                <li className="">RAZON SOCIAL: PRODUITS DE FRANCE S.A.S</li>
            </ul>
        </footer>
    )
}