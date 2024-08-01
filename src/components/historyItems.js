'use client'
import useEmblaCarousel from 'embla-carousel-react';
import EmblaCarousel from './emblaCarousel';
export default function HistoryItems(){
    const image = [
        [   
            'https://saintgermain.uy/cdn/shop/files/pocitos1_1400x.jpg?v=1668002764',
            'https://infonegocios.info/content/images/2022/07/21/129521/conversions/800x453-saint-germain-cafe-parisien-2-medium-size.jpg',
            'https://saintgermain.uy/cdn/shop/files/divino-home_1400x.jpg?v=1667568207',
        ],
        [
            'https://saintgermain.uy/cdn/shop/files/pocitos1_1400x.jpg?v=1668002764',
            'https://infonegocios.info/content/images/2022/07/21/129521/conversions/800x453-saint-germain-cafe-parisien-2-medium-size.jpg',
        ],
        [
            'https://saintgermain.uy/cdn/shop/files/pocitos1_1400x.jpg?v=1668002764',
            'https://infonegocios.info/content/images/2022/07/21/129521/conversions/800x453-saint-germain-cafe-parisien-2-medium-size.jpg',
            'https://saintgermain.uy/cdn/shop/files/divino-home_1400x.jpg?v=1667568207',
        ],
    ]
    const [emblaRef] = useEmblaCarousel();
    const imagesCarousel = [
        [
            "aasdasd"
        ],
        [
            "aasdasd"
        ],
        [
            "aasdasd"
        ],
    ]
    const imagePlace = [
        "https://cdn.shopify.com/s/files/1/0515/8453/2641/t/20/assets/boulangerie.svg",
        "https://cdn.shopify.com/s/files/1/0515/8453/2641/t/20/assets/cafe-parisien.svg",
        "https://cdn.shopify.com/s/files/1/0515/8453/2641/t/20/assets/cafe-bistrot.svg",
    ]
    const places = [
        [
            [
                "POCITOS ",
                "/ GESTIDO Y MASINI",
            ],
            [
                "CARRASCO ",
                "/ RIVERA Y AROCENA",
            ],
            [
                "DIVINO CENTRAL ",
                "/ IRLANDA Y AV.ITALIA",
            ],
        ]
        
    ]
    const longText = [
        "EN ABRIL 2020 EMPEZAMOS A HACER EL PAN COMO EN FRANCIA. BOULANGERIE Y PATISSERIE FRANCESA CON GRAN VARIEDAD DE PANES HORNEADOS A LA VISTA, ADEMÁS DE BOLLERÍA Y PASTELERÍA TRADICIONALES DE CUIDADA ELABORACIÓN ARTESANAL Y SÁNDWICHES PREPARADOS EN EL MOMENTO. NUESTRO FOCO ESTÁ EN LA CALIDAD DE LO QUE HACEMOS, POR ESO IMPORTAMOS NUESTRA HARINA DE FRANCIA PARA OFRECER SABORES AUTÉNTICAMENTE FRANCESES E INIGUALABLES.",
        "UN ESPACIO PARA QUE TE SIENTES A TOMAR UN CAFÉ EN PARÍS, EN UN AMBIENTE ÍNTIMO LEJOS DEL RUIDO DE LA CALLE. CAFETERÍA CON DESAYUNOS, BRUNCHS Y MERIENDAS ESPECIALES, ADEMÁS DE ALMUERZOS FRESCOS, DEGUSTACIONES PARA COMPARTIR Y TRAGOS.",
        "UN LUGAR PARA HACER UNA PAUSA Y DISFRUTAR DE LO MEJOR DE LA GASTRONOMÍA FRANCESA EN UN AMBIENTE CÓMODO Y RELAJADO. EL BOCADO PERFECTO PARA CADA MOMENTO DEL DÍA EN FORMA DE MERIENDAS ESPECIALES, CAFÉ DE ESPECIALIDAD, DELICIOSOS SÁNDWICHES Y PLATOS PREPARADOS.",
    ]
    const info = [
        [
            [
                "LUNES A DOMINGOS DE 8 A 20 HS",
                "CAFE Y PRUDCOTS PARA LLEVAR",
                "SOLO MESAS AFUERA / SIN RESERVAS",
                "CONSULTAS: 096 288 777",
            ],
            [
                "LUNES A VIERNES DE 11 A 20 HS",
                "SABADOS Y DOMINGOS DE 9 A 21 HS",
                "CAFE / ALMUERZOS - MENU EJECUTIVO / TRAGOS",
                "TERRAZA AL AIRE LIBRE / PRODUCTOS PARA LLEVAR",
                "RESERVAS: 096 236 744 (SE PUEDE IR SIN RESERVA)",
            ],
            [
                "LUNES A DOMINGOS DE 11.30 A 20.30 HS",
                "CAFE / ALMUERZOS - MENU EJECUTIVO / PRODUCTOS PARA LLEVAR",
                "RESERVAS: 097 903 545 (SE PUEDE IR SIN RESERVA)",
            ],
        ]
    ]
    const email = [
        "CONTACTO@SAINTGERMAIN.UY",
        "CARRASCO@SAINTGERMAIN.UY",
        "DIVINO@SAINTGERMAIN.UY"
    ]
    return(
        <div className="w-full h-600px text-[#344a80] flex flex-col gap-3">
            {imagePlace.map((index, i) => (
                <div key={i} className="flex flex-col gap-4 items-center">
                    <EmblaCarousel images={image[i]}>
                    </EmblaCarousel>
                    <img className="mt-[30px] mb-[30px]" src={index}></img>
                    <div className="w-[90%] flex flex-col gap-4">
                        <h2 className="text-[18px] text-red-500 font-semibold tracking-widest">
                            {places[0][i][0]}
                            <span className="font-normal">{places[0][i][1]}</span>
                        </h2>
                        <p className="border-b-2 border-b-red-500 pb-5 text-[16px]">{longText[i]}</p>
                        <div className="tracking-widest">
                            {info[0][i].map((insideText, j) => (
                                <div key={j}>
                                    <p className="text-[11px] font-semibold">{insideText}</p>
                                </div>
                            ))}
                            <p className="text-[11px]">{email[i]}</p>
                        </div>
                    </div>
                    <img className="w-[70%] h-2/6" src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"></img>
                    <img className="mb-[20px]" src="https://cdn.shopify.com/s/files/1/0515/8453/2641/t/20/assets/pedidos-ya.svg"></img>
                </div>
            ))}
        </div>
    )
}