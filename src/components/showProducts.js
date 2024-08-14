import classNames from "classnames";
import Image from "next/image";
import { useMemo, useState } from "react";
import myImage from '../images/searchIcon.png';
import ScrollCarousel from "./scrollCarousel";
export default function ShowProducts({name, products, pageTitle}){
    const [reviewButton, setReviewButton] =  useState(false);
    function openReview(){
        if(reviewButton){
            setReviewButton(false);
        }else{
            setReviewButton(true);
        }
    }
    const chevronStyle = classNames(
        "w-[8px]  h-[8px] border-t-[2px] border-r-[2px] border-[#344a80] transform rotate-[135deg]", {"rotate-[-45deg]" : reviewButton}
    )
    const reviewFatherStyle = classNames(
        "min-h-[40px] border-t-[1px] border-b-[1px] border-[#344a80] flex flex-col justify-start gap-0 transition-all duration-500 ease-out", {"gap-4" : reviewButton}, {"pb-[15px]" : reviewButton}
    )
    const opinionStyle = classNames(
        "tracking-widest w-[40%] bg-[#bfaf82] h-[25px] text-[12px]", {"hidden" : !reviewButton}, {"opacity-0" : !reviewButton},
    )
    const product = useMemo(() => {
            if(name){
                return products.find(item => item.name === name);
            }else{
                return products[0];
            }
        },[name,products]
    );
    const [number, setNumber] = useState(1);
    function add(){
        setNumber(number+1);
    }
    function less(){
        if(number > 1){
            setNumber(number-1);
        }
    }
    return (
        <>
            <section className="mb-6 w-full flex flex-col justify-center items-center md:border-t-solid md:border-[1px] border-t-[#344a80]">
                <div className="min-h-[400px] w-[90%] flex flex-col gap-6 md:mt-10 md:items-center md:gap-36">
                    <div className="flex flex-col items-center justify-center md:flex-row md:items-start md:w-full md:gap-14">
                        <div className="w-full h-[55%] relative md:w-[20%]">
                            <img className="w-full h-full object-cover" src={product.link}></img>
                            <div className="absolute bottom-[10px] cursor-pointer right-[10px] w-[30px] h-[30px] bg-[#dadada] rounded-[50%] flex justify-center items-center">
                                <Image className="w-[50%] h-[50%]" src={myImage} alt="magnifying glass icon"></Image>
                            </div>
                        </div>
                        <div className="w-[90%] flex flex-col gap-6 item md:w-[40%]">
                            <p className="text-[#344a80] tracking-widest text-[16px] md:text-[60px] md:text-[#bfaf82]">{product.name}</p>
                            <div className="w-7 h-1 border-b-[1px] border-[#db2217]"></div>
                            <p className="text-[#344a80] font-light mt-4 text-[20px] md:text-[#db2217]">${product.price},00</p>
                            <div className="text-[#344a80] flex flex-row gap-1 mt-5 font-light">
                                <button onClick={less} className="text-[18px]">-</button>
                                <p className="w-[60px] text-center border-l-[1px] border-r-[1px] border-[#344a801a]">{number}</p>
                                <button onClick={add} className="text-[18px]">+</button>
                            </div>
                            <button className="uppercase w-full bg-[#bfaf82] h-[50px] tracking-widest">Añadir al carrito</button>
                            <ul className="list-disc ml-4 pl-5 text-[#344a80]">
                                {product.description.map((desc, i) =>(
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                            { product.weight !== null ? (
                                <p className="text-[#344a80] font-light text-[16px]">{product.weight}</p>
                            ) : (
                                null
                            )}
                            <h3 className="text-[#344a80] tracking-wider"><span className="font-bold">IMPORTANTE:</span> LOS PEDIDOS SE PUEDEN REALIZAR CON UN MINIMO DE 48 HORAS DE ANTICIPACION.</h3>
                            <div className={reviewFatherStyle}>
                                <div onClick={openReview} className="w-full h-[40px] text-[#344a80] flex items-center justify-between tracking-widest text-[12px]">
                                    <p>REVIEWS</p>
                                    <div className={chevronStyle}/>
                                </div>
                                <a href="#header">
                                    <button className={opinionStyle}>DEJA TU OPINION</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <ScrollCarousel products={products} pageTitle={pageTitle}></ScrollCarousel>
                </div>
                
            </section>
        </>
    )
}