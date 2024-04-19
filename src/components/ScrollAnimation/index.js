import { useEffect, useState } from "react";
import { domData } from "./data";
import logo from "./logo_dark_sm.png";

const ScrollAnimation = () => {
    const [scrollYStart, setScrollYStart] = useState(null);

    const doms = domData;

    useEffect(() => {
        const playground = document.getElementById("animation");
        const top = playground.scrollHeight;
        const playgroundTop = top - (top % 100);

        const windowThreshold = window.innerHeight;
        const threshold = windowThreshold - (windowThreshold % 100);

        setScrollYStart(playgroundTop - threshold);
    }, []);

    useEffect(() => {
        const getStyles = (scrollY, startScrollY, endScrollY, animation) => {
            if (scrollY < startScrollY) {
                return animation.startValue;
            }

            if (scrollY > endScrollY) {
                return animation.endValue;
            }

            const scrollPercentage = (scrollY - startScrollY) / (endScrollY - startScrollY);

            const value = animation.startValue + (animation.endValue - animation.startValue) * scrollPercentage;

            return value;
        };

        const update = () => {
            const container = document.getElementById("container");
            const animation = document.getElementById("animation");

            const animationTop = animation.getBoundingClientRect().top;

            const scrollY = window.scrollY;
            const startScrollY = container.offsetTop - window.innerHeight;
            const endScrollY = container.offsetTop + container.offsetHeight - window.innerHeight;

            /*
            if (animationTop >= window.innerHeight || animationTop < 0) {
                return;
            }
            */

            doms.forEach((dom) => {
                const element = document.getElementById(dom.id);

                const scale = getStyles(scrollY, startScrollY, endScrollY, dom.animations.scale);
                const translateY = getStyles(scrollY, startScrollY, endScrollY, dom.animations.translateY);

                element.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
            });
        };

        update();

        window.addEventListener("scroll", update);

        return () => {
            window.removeEventListener("scroll", update);
        };
    }, [scrollYStart]);

    return (
        <div>
            <div className="h-screen"></div>
            <div className="h-96"></div>

            <div id="container" className="h-screen2">
                <div id="animation" style={{ perspective: "800px" }} className="sticky top-0 bg-black h-screen overflow-hidden">
                    <div
                        id="main-logo"
                        className="absolute left-1/2 top-1/2 w-24 h-24 px-4 py-8 bg-gradient-to-r from-rose-400 to-red-200 rounded-3xl transition-all duration-300 center opacity-100"
                    >
                        <img className="w-full" />
                    </div>
                </div>
            </div>

            <div className="h-screen"></div>
        </div>
    );
};

export default ScrollAnimation;
