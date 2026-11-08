import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";

function MainPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const revealItems = document.querySelectorAll("[data-reveal]");

        if (!("IntersectionObserver" in window)) {
            revealItems.forEach((item) => item.classList.add("is-visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
        );

        document.documentElement.classList.add("motion-ready");
        revealItems.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, [pathname]);

    return (
        <div className="container">
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainPage;
