import { useEffect, useState } from "react";

const Test = () => {
    const [scrollYStart, setScrollYStart] = useState(null);

    const doms = [
        {
            id: "element-1",
            styles: {
                size: ["40px", "50px", "60px", "70px", "80px", "90px"],
                translateX: ["-60px", "-80px", "-100px", "-120px", "-140px", "-300px"],
            },
        },
        {
            id: "element-2",
            styles: {
                size: ["40px", "50px", "60px", "70px", "80px", "90px"],
                translateX: ["-60px", "-80px", "-100px", "-120px", "-140px", "-160px"],
            },
        },
    ];

    useEffect(() => {
        const playground = document.getElementById("playground");
        const top = playground.scrollHeight;
        const playgroundTop = top - (top % 100);

        const windowThreshold = Math.round((window.innerHeight * 4) / 5);
        const threshold = windowThreshold - (windowThreshold % 100);

        setScrollYStart(playgroundTop - threshold);
    }, []);

    useEffect(() => {
        const update = () => {
            const playgroundTop = document.getElementById("playground").getBoundingClientRect().top;
            const scrollY = window.scrollY - (window.scrollY % 100);
            const windowThreshold = Math.round((window.innerHeight * 4) / 5);

            if (playgroundTop >= windowThreshold) {
                return;
            }

            //console.log(scrollY);

            const index = (scrollY - scrollYStart) / 100;
            console.log(index);

            doms.forEach((dom) => {
                const element = document.getElementById(dom.id);

                const size = dom.styles.size[index];
                const translateX = dom.styles.translateX[index];

                element.style.width = size;
                element.style.height = size;
                element.style.transform = "translateX(" + translateX + ")";
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
        <div id="playground" className="sticky top-0 bg-slate-800 h-screen">
            <div id="element-1" className="absolute left-1/3 top-1/2 w-10 h-10 rounded-lg bg-orange-500 transition-all duration-100"></div>
            <div id="element-2" className="absolute left-1/4 top-1/4 w-10 h-10 rounded-lg bg-orange-300 transition-all duration-100"></div>
            <div id="main-logo" className="absolute left-1/2 top-1/2 w-10 h-10 rounded-lg bg-orange-300 transition-all duration-100"></div>
        </div>
    );
};

export default Test;
