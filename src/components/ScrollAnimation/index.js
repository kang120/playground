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
        const getStyles = (styles, index) => {
            if (Array.isArray(styles)) {
                const n = styles.length;

                if (index < n) {
                    return styles[index];
                } else {
                    return styles[n - 1];
                }
            } else {
                return styles;
            }
        };

        const update = () => {
            const container = document.getElementById("container");
            const animation = document.getElementById("animation");

            const animationTop = animation.getBoundingClientRect().top;
            const scrollY = window.scrollY - (window.scrollY % 100);

            const start = container.offsetTop;
            const end = container.offsetTop + container.offsetHeight;

            if (animationTop >= window.innerHeight || animationTop < 0) {
                return;
            }

            const containerHeight = container.getBoundingClientRect().height;
            const containerTop = container.getBoundingClientRect().top;

            const scrollPercentage = (window.innerHeight - containerTop) / containerHeight;
            console.log(scrollPercentage);


            doms.forEach((dom) => {
                const element = document.getElementById(dom.id);

                const scale =
                    (dom.animations.scale.targetValue * (scrollPercentage - dom.animations.scale.startPoint)) /
                    dom.animations.scale.endPoint;

                element.style.transform = `translateX(-50%) scale(${scale})`;
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
                <div id="animation" className="sticky top-0 bg-black h-screen overflow-hidden">
                    <div
                        id="main-logo"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-0 w-24 h-24 px-4 py-8 bg-gradient-to-r from-rose-400 to-red-200 rounded-3xl transition-all duration-300 center opacity-100"
                    >
                        <img className="w-full" src={logo} />
                    </div>
                </div>
            </div>

            <div className="h-screen"></div>
        </div>
    );
};

export default ScrollAnimation;
