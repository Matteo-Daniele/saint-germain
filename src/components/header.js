export default function Header({open, openRight, openShopping}) {
    return (
        <header className="h-[180px] w-full bg-[#e9eae4x] flex flex-row items-center justify-center gap-7">
            <a className="w-3/5 h-3/5" href="./">
                <img className="size-full" src="https://saintgermain.uy/cdn/shop/t/20/assets/logo-stg.svg"></img>
            </a>
            <div className="flex flex-row gap-3 mr-3">
                <div className="w-[25px] cursor-pointer" onClick={
                    () => {
                        open(true);
                    }
                }>
                    <img className="" src="https://png.pngtree.com/png-vector/20220924/ourmid/pngtree-search-flat-orange-color-icon-pictogram-magnify-glass-vector-png-image_19940298.png"></img>
                </div>
                <div className="w-[25px] cursor-pointer" onClick={
                    () => {
                        openRight(true);
                    }
                }>
                    <img className="" src="https://cdn-icons-png.flaticon.com/256/10264/10264354.png"></img>
                </div>
                <div onClick={
                    () => {
                        openShopping(true);
                    }
                } className="w-[25px] cursor-pointer">
                    <img src="https://icones.pro/wp-content/uploads/2021/05/icone-de-panier-orange.png"></img>
                </div>
            </div>
        </header>
    )
}