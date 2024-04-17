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
            const playgroundTop = document.getElementById("playground").getBoundingClientRect().top;
            const scrollY = window.scrollY - (window.scrollY % 100);
            const windowThreshold = window.innerHeight;

            if (playgroundTop >= windowThreshold) {
                return;
            }

            //console.log(scrollY);

            const index = (scrollY - scrollYStart) / 100;
            console.log(index);

            doms.forEach((dom) => {
                const element = document.getElementById(dom.id);

                const { SIZE, TRANSLATE_X, TRANSLATE_Y, OPACITY, FONT_SIZE } = dom.styles;
                const size = getStyles(SIZE, index);
                const translateX = getStyles(TRANSLATE_X, index);
                const translateY = getStyles(TRANSLATE_Y, index);
                const opacity = getStyles(OPACITY, index);
                const fontSize = getStyles(FONT_SIZE, index);

                element.style.width = size;
                element.style.height = size;
                element.style.transform = `translate(${translateX},${translateY})`;
                element.style.opacity = opacity;
                element.style.fontSize = fontSize;
            });

            //console.log(scrollY);

            //element.style.transform = "translateX(" + value[scrollY] + ")";
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
            <div style={{ height: "1500px" }} className="">
                <div id="playground" className="sticky top-0 bg-black h-screen overflow-hidden">
                    {doms.map((dom, index) => (
                        <div key={index} id={dom.id} className={dom.classList}>
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
