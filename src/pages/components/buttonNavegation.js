import classNames from "classnames"

export default function ButtonNavegation () {
    const stylesButton = classNames(
        "bg-slate-100/25 w-[12px] h-[12px] m-[10px] rounded-[50%] cursor-pointer"
    )
    return (
        <div className="z-30 absolute flex bottom-6 left-[50%] translate-x-[-50%]">
            <div className={stylesButton}></div>
            <div className={stylesButton}></div>
            <div className={stylesButton}></div>
        </div>
    )
}