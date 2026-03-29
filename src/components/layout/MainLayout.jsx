import { Outlet } from "react-router-dom";
import { Logo } from "../common/Logo";
import { Header } from "../ui/Header";
import { NavigationMenu } from "../ui/NavigationMenu";
import { Footer } from "../ui/Footer";
import { ScrollAnimationWrapper } from "../common/ScrollAnimationWrapper";
import { ScrollToTopButton } from "../common/ScrollToTopButton";

export function MainLayout({children}) {
    return (
        <>
            {/* TOP */}
            <Header />
            <NavigationMenu />

            {/*BODY*/}
            <main className="body">
                <Outlet />
            </main>

            {/* FOOTER */}
            <Footer />

            {/* SCROLL TO TOP BUTTON */}
            <ScrollToTopButton />
        </>
    )
}