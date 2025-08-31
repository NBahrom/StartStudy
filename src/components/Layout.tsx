import Footer from "./footer/Footer";
import Header from "./header/Header";

export default function Layout({children}: {children: React.ReactNode   }) {
    return(
        <>
            <Header />
                {children}
            <Footer />
        </>
    )
}