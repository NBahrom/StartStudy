import Footer from "./footer/Footer";
import Header from "./header/Header";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Layout({children}: {children: React.ReactNode   }) {
    return(
        <>
            <Header />
                <main className="main">
                    {children}
                </main>
            <Footer />
        </>
    )
}