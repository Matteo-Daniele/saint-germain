import classNames from "classnames";
import { } from "next/font/google";

export default function ClientsReview(){
    const link = "https://app.testimonialhub.com/resources/public/imgs//stars_5_yellow.png";
    const reviewStyle = classNames(
        'w-[full] h-[260px] bg-white flex flex-row items-start justify-center gap-3 relative md:h-[220px]',
        'before:content-["“"] before:text-gray-400 before:text-[50px]',
        'after:content-[""] after:w-[0] after:h-[0]', 
        'after:border-r-[15px] after:border-r-solid after:border-r-transparent after:border-l-[15px] after:border-l-solid after:border-l-white after:border-b-[15px] after:border-b-solid after:border-b-transparent', 
        'after:border-t-[15px] after:border-t-solid after:border-t-white after:absolute after:bottom-[-29px] after:left-[50px]'
    )
    const fatherItems = classNames(
        "flex flex-col min-h-[250px] gap-[35px]"
    )
    return(
        <section className="w-[75%] flex flex-col gap-[80px] mt-[60px] mb-20 md:flex-row">
            <div className={fatherItems}>
                <div className={reviewStyle}>
                    <p className='text-gray-500 w-[70%] text-[15px] tracking-widest mt-3'>
                        <span className="inline-block w-[100px] h-[19px]">
                            <img src={link}/>
                        </span>
                        &nbsp;DELICOSO EL CROISSANT Y EL MILHOJAS DE CREMA. FELICITACIONES!!!
                        <br/>
                        LOS CONOCI DE CASUALIDAD PORQUE JUSTO PASABA POR EL LUGAR. TIENEN QUE HACERSE UNA CUENTA DE INSTRAGRAM!! 🤩
                    </p>
                </div>
                <h3 className="text-gray-700 text-[18px]">Matias Martinez</h3>
            </div>
            <div className={fatherItems}>
                <div className={reviewStyle}>
                    <p className='text-gray-500 w-[70%] text-[15px] tracking-widest mt-3'>
                        <span className="inline-block w-[100px] h-[19px]">
                            <img src={link}/>
                        </span>
                        &nbsp;DELICOSO EL CROISSANT Y EL MILHOJAS DE CREMA. FELICITACIONES!!!
                        <br/>
                        LOS CONOCI DE CASUALIDAD PORQUE JUSTO PASABA POR EL LUGAR. TIENEN QUE HACERSE UNA CUENTA DE INSTRAGRAM!! 🤩
                    </p>
                </div>
                <h3 className="text-gray-700 text-[18px]">Matteo Daniele</h3>
            </div>
            <div className={fatherItems}>
                <div className={reviewStyle}>
                    <p className='text-gray-500 w-[70%] text-[15px] tracking-widest mt-3'>
                        <span className="inline-block w-[100px] h-[19px]">
                            <img src={link}/>
                        </span>
                        &nbsp;DELICOSO EL CROISSANT Y EL MILHOJAS DE CREMA. FELICITACIONES!!!
                        <br/>
                        LOS CONOCI DE CASUALIDAD PORQUE JUSTO PASABA POR EL LUGAR. TIENEN QUE HACERSE UNA CUENTA DE INSTRAGRAM!! 🤩
                    </p>
                </div>
                <h3 className="text-gray-700 text-[18px]">Ignacio Lorenzo</h3>
            </div>
        </section>
    )
}