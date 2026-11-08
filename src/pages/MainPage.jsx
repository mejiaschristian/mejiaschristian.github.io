import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";

function MainPage() {
    const { pathname } = useLocation();
    const [showSplash, setShowSplash] = useState(
        () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );

    useEffect(() => {
        if (!showSplash) {
            return;
        }

        const timeout = window.setTimeout(() => setShowSplash(false), 1500);

        return () => window.clearTimeout(timeout);
    }, [showSplash]);

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
            {showSplash && (
                <div className="intro-splash" aria-hidden="true">
                    <div className="intro-splash-content">
                        <span className="intro-splash-greeting">
                            ᜉᜄ᜔ᜊᜆᜒ!
                        </span>
                        <span className="intro-splash-translation">
                            Greetings!
                        </span>
                        <span className="intro-splash-rule" />
                    </div>
                </div>
            )}
            <Navbar />

            <main data-reveal>
                <Outlet />
            </main>
        </div>
    );
}

export default MainPage;
