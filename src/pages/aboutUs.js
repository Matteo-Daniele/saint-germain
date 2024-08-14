import classNames from "classnames";
import { Aboreto, Inter } from "next/font/google";
import ClientsReview from "../components/clientsReview";
import History from "../components/history";
import UseCarousel from "../components/useCarousel";
const inter = Inter({ subsets: ["latin"] });
const aboreto = Aboreto({subsets: ["latin"], weight: ["400"] });

export default function AboutAs(){
    const logoImagesStyle = classNames(
        "h-full w-[35%]"
    )
    const style={
        backgroundImage: `url('https://saintgermain.uy/cdn/shop/t/20/assets/guarda.svg')`,
        width: '100%',
      }
    return (
        <>
            <section className="flex flex-col items-center w-full">
                <video className="md:w-full md:h-[650px] md:object-cover" src="/videoSaintGermain.mp4" loop autoPlay muted/>
                <History></History>
                <div className="w-full relative h-[40px] bg-cover md:h-[80px] md:w-full md:bg-contain md:mt-28" style={style}/>
                <section className="min-h-400px flex flex-col items-center mt-5 gap-5 md:relative md:flex-row md:h-[800px] md:justify-evenly md:">
                    <div className="flex flex-col items-center md:w-[42%] md:items-start md:gap-5">
                        <div className="w-[90%] flex flex-col gap-6">
                            <h2 className="text-[#BFAF82] text-[32px] font-semibold tracking-widest leading-tight md:tracking-widest">HACER EL PAN COMO EN FRANCIA: EN ESO CREEMOS</h2>
                            <p className="text-[16px] text-[#344a80] tracking-widest md:tracking-widest">NUESTROS PRODUCTOS SON ELABORADOS CON <span className="font-semibold">HARINAS GRAND MOULINS DE PARIS,</span> HECHAS DE SELECCIONADOS TRIGOS RANCESES Y SIN ADITIVOS, ACORDE A LA ESTRICTA DENOMINACION: <span  className="font-semibold">PAIN DE TRADITION FRANÇAISE</span></p>                    
                        </div>
                        <div className="w-full h-[70%] flex flex-col items-center md:items-start">
                            <div className="flex flex-row w-[90%] mb-5 gap-10 h-[120px] items-start md:h-[100px] md:w-[300px] md:items-start">
                                <img className={logoImagesStyle} src="https://cdn.shopify.com/s/files/1/0515/8453/2641/files/St-Germain-logo_220x@2x.png"></img>
                                <img className={logoImagesStyle} src="https://cdn.shopify.com/s/files/1/0515/8453/2641/files/grand-moulins.png"></img>
                            </div>
                        </div>
                    </div>
                    <img className="w-[90%] h-[450px] md:w-[20%]" src="https://cdn.shopify.com/s/files/1/0515/8453/2641/files/about-us-2.jpg"></img>
                    <a className="flex items-center justify-center border-solid border-[1px] border-[#DB2217] w-[95%] h-[45px] text-[15px] text-[#DB2217] mb-5
                    md:absolute md:bg-white md:bottom-[-50px] md:z-50 md:w-[400px] md:h-[60px]" href="./ourHistory">CONOCE NUESTROS LOCALES</a>
                </section>
                <section className="relative w-[400px] h-[300px] md:w-full md:h-[550px]">
                   <UseCarousel></UseCarousel>
                </section>
                <ClientsReview></ClientsReview>
            </section>
        </>
    )
}