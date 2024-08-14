import Footer from "../components/footer";
import HistoryItems from "../components/historyItems";

export default function OurHistory(){
    return (
        <>
            <section className="w-full flex flex-col items-center">
                <HistoryItems></HistoryItems>
            </section>
            <Footer></Footer>
        </>
    )
}