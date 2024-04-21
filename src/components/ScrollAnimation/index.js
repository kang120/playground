import { useEffect, useState } from "react";
import { domData } from "./data";
import logo from "./logo_dark_sm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
                return animation.startValue + animation.unit;
            }

            if (scrollY > endScrollY) {
                return animation.endValue + animation.unit;
            }

            const scrollPercentage = (scrollY - startScrollY) / (endScrollY - startScrollY);

            const value = animation.startValue + (animation.endValue - animation.startValue) * scrollPercentage;

            return value + animation.unit;
        };

        const update = () => {
            const container = document.getElementById("container");
            const animation = document.getElementById("animation");

            // const startScrollY = container.offsetTop - window.innerHeight;
            // const endScrollY = container.offsetTop + container.offsetHeight - window.innerHeight;

            const containerTop = container.getBoundingClientRect().top;
            const animationTop = animation.getBoundingClientRect().top;

            const scrollY = window.scrollY;

            /*
            if (animationTop >= window.innerHeight || animationTop < 0) {
                return;
            }
            */

            doms.forEach((dom) => {
                const element = document.getElementById(dom.id);

                if (animationTop >= 0 && containerTop >= 0) {
                    const startScrollY = container.offsetTop - window.innerHeight;
                    const endScrollY = startScrollY + animation.offsetHeight;

                    const scale = getStyles(scrollY, startScrollY, endScrollY, dom.animations.onScroll.scale);
                    const translateX = getStyles(scrollY, startScrollY, endScrollY, dom.animations.onScroll.translateX);
                    const translateY = getStyles(scrollY, startScrollY, endScrollY, dom.animations.onScroll.translateY);
                    const opacity = getStyles(scrollY, startScrollY, endScrollY, dom.animations.onScroll.opacity);

                    element.style.transform = `translate3d(${translateX}, ${translateY}, 0) scale(${scale})`;
                    element.style.opacity = `${opacity}`;
                } else {
                    const startScrollY = container.offsetTop - window.innerHeight + animation.offsetHeight;
                    const endScrollY = container.offsetTop + container.offsetHeight - animation.offsetHeight;

                    const scale = getStyles(scrollY, startScrollY, endScrollY, dom.animations.onSticky.scale);
                    const translateX = getStyles(scrollY, startScrollY, endScrollY, dom.animations.onSticky.translateX);
                    const translateY = getStyles(scrollY, startScrollY, endScrollY, dom.animations.onSticky.translateY);
                    const opacity = getStyles(scrollY, startScrollY, endScrollY, dom.animations.onSticky.opacity);

                    element.style.transform = `translate3d(${translateX}, ${translateY}, 0) scale(${scale})`;
                    element.style.opacity = `${opacity}`;
                }
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
            <div className="h-screen">
                <div className="pt-24 text-center">
                    <Link to="/">
                        <button className="btn btn-sm btn-blue-600">Back</button>
                    </Link>
                    <div className="mt-6 font-bold text-2xl">Scroll Down</div>
                    <FontAwesomeIcon icon={faArrowDown} className="mt-6 fa-xl" />
                </div>
            </div>
            <div className="h-96"></div>

            <div id="container" className="h-screen2">
                <div id="animation" style={{ perspective: "800px" }} className="sticky top-0 bg-black h-screen overflow-hidden">
                    <div
                        id="main-logo"
                        className="absolute left-1/2 top-1/2 w-24 h-24 px-4 py-8 bg-gradient-to-r from-rose-600 to-red-200 rounded-3xl center opacity-100"
                    >
                        <img className="w-full" />
                    </div>
                    <div id="main-text" className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-16 text-white">
                        Playground 123456
                    </div>
                    <div
                        id="element-1"
                        className="absolute left-1/3 top-20 w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-400 rounded-lg"
                    ></div>
                    <div
                        id="element-2"
                        className="absolute left-44 top-32 w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-400 rounded-lg"
                    ></div>
                    <div
                        id="element-3"
                        className="absolute right-1/3 top-14 w-16 h-16 bg-gradient-to-r from-blue-600 to-sky-400 rounded-lg"
                    ></div>
                    <div
                        id="element-4"
                        className="absolute left-1/3 top-44 w-16 h-16 bg-gradient-to-r from-cyan-500 to-sky-300 rounded-lg"
                    ></div>
                    <div
                        id="element-5"
                        className="absolute right-1/3 top-36 w-16 h-16 bg-gradient-to-r from-cyan-500 to-sky-300 rounded-lg"
                    ></div>
                    <div
                        id="element-6"
                        className="absolute right-96 top-56 w-16 h-16 bg-gradient-to-r from-cyan-500 to-sky-300 rounded-lg"
                    ></div>
                    <div
                        id="element-7"
                        className="absolute left-1/2 top-96 w-16 h-16 bg-gradient-to-r from-cyan-500 to-sky-300 rounded-lg"
                    ></div>
                </div>
            </div>

            <div className="h-screen"></div>
        </div>
    );
};

export default ScrollAnimation;
