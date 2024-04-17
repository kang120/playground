import { useEffect, useState } from "react";
import { domData } from "./data";

const ScrollAnimation = () => {
    const [scrollYStart, setScrollYStart] = useState(null);

    const doms = domData;

    useEffect(() => {
        const playground = document.getElementById("playground");
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
            const playground = document.getElementById("playground");
            const playgroundTop = playground.getBoundingClientRect().top;
            const scrollY = window.scrollY - (window.scrollY % 100);

            if (playgroundTop >= window.innerHeight) {
                return;
            }

            const containerHeight = container.getBoundingClientRect().height;
            const containerTop = container.getBoundingClientRect().top;

            //const scrollPercentage = Math.round(((window.innerHeight - containerTop) / containerHeight) * 100);

            //console.log(window.innerHeight);
            //console.log(containerHeight);

            const scrollIndex = scrollY / 100;
            console.log(scrollIndex);

            doms.forEach((dom) => {
                if (scrollIndex < dom.startIndex) {
                    return;
                }

                const index = scrollIndex - dom.startIndex;

                if (index >= dom.classLists.length) {
                    return;
                }

                const element = document.getElementById(dom.id);
                element.className = dom.defaultClass + " " + dom.classLists[index];
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

            {/*
            <div id="container" className="h-screen2">
                <div id="playground" className="sticky top-0 bg-black h-screen overflow-hidden">
                    {doms.map((dom, index) => (
                        <div key={index} id={dom.id} className={dom.classList}>
                            {dom.type == "image" ? <img className="w-full" src={dom.src} /> : null}
                            {dom.type == "text" ? <div className={dom.textClassList}>{dom.text}</div> : null}
                        </div>
                    ))}
                </div>
            </div> */}

            <div id="container" className="h-screen2">
                <div id="playground" className="sticky top-0 bg-black h-screen overflow-hidden">
                    {doms.map((dom, index) => (
                        <div key={index} id={dom.id}>
                            {dom.type == "image" ? <img className="w-full" src={dom.src} /> : null}
                            {dom.type == "text" ? <div className={dom.textClassList}>{dom.text}</div> : null}
                        </div>
                    ))}
                </div>
            </div>

            <div className="h-screen"></div>
        </div>
    );
};

export default ScrollAnimation;
