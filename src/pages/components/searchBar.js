import classNames from "classnames";

export default function SearchBar({isOpen, open}) {
    console.log(isOpen);
    const searchBarStyle = classNames(
        "h-[200px] w-full bg-white flex flex-row items-center justify-center gap-3 absolute top-[-200px] transition-all duration-500", {"top-[0px]": isOpen}
    )
    return (
        <div className={searchBarStyle}>
            <div className="w-[50px] h-[50px] flex items-center justify-center">
                <img className="w-2/4 h-2/4" src="https://cdn-icons-png.freepik.com/512/9135/9135995.png"></img>
            </div>
            <input className="w-3/5  text-blue-800 border border-solid border- border-blue-900" type="text" id="userInput" name="userInput" placeholder="BUSCAR EN NUESTRA"/>
            <div onClick={
                () => {
                    open(false);
                }
            } className="w-[50px] h-[50px] relative text-blue-800 items-center flex justify-center after:content-['\d7'] after:text-[25px]"></div>
        </div>
    )
}