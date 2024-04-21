import logo from "./logo_dark_sm.png";

export const domData2 = [
    {
        id: "main-logo",
        classList:
            "absolute left-1/2 top-1/2 w-16 h-16 px-10 py-8 bg-gradient-to-r from-rose-400 to-red-200 rounded-3xl transition-all duration-300 flex items-center justify-center",
        styles: {
            SIZE: ["64px", "100px", "120px", "140px", "180px", "220px"],
            TRANSLATE_X: "-50%",
            TRANSLATE_Y: ["0px", "-80px", "-100px", "-120px", "-140px", "-180px", "-220px", "-280px", "-500px"],
            OPACITY: ["100%", "100%", "100%", "100%", "100%", "100%", "50%", "30%", "0"],
        },
        type: "image",
        src: "logo",
    },
    {
        id: "main-logo-text",
        classList: "absolute left-1/2 top-1/2 w-16 h-16 transition-all duration-300",
        styles: {
            SIZE: ["64px", "100px", "140px", "180px", "200px", "160px"],
            FONT_SIZE: ["20px", "20px", "20px", "30px", "40px", "50px", "60px", "70px", "70px", "100px"],
            TRANSLATE_X: "-50%",
            TRANSLATE_Y: ["90px", "50px", "70px", "70px", "90px", "80px", "40px", "-20px", "-140px", "-200px"],
            OPACITY: ["100%", "100%", "100%", "100%", "100%", "100%", "100%", "100%", "50%", "0"],
        },
        type: "text",
        text: "Tesss",
        textClassList: "text-white text-nowrap flex items-center justify-center",
    },
    {
        id: "element-1",
        classList: "absolute left-52 top-24 w-24 h-24 rounded-xl bg-orange-300 transition-all duration-100",
        styles: {
            SIZE: "96px",
            TRANSLATE_X: ["0px", "-20px", "-40px", "-60px", "-80px", "-100px", "-120px", "-160px", "-240px", "-500px"],
            TRANSLATE_Y: ["0px", "-10px", "-20px", "-30px", "-40px", "-60px", "-80px", "-100px", "-130px", "-160px"],
            OPACITY: "100%",
        },
    },
    {
        id: "element-2",
        classList: "absolute left-1/3 top-16 w-20 h-20 rounded-lg bg-orange-300 transition-all duration-100",
        styles: {
            SIZE: "80px",
            TRANSLATE_X: ["-10px", "-20px", "-30px", "-40px", "-50px", "-60px", "-80px"],
            TRANSLATE_Y: ["-10px", "-20px", "-40px", "-60px", "-80px", "-100px", "-160px"],
            OPACITY: "30%",
        },
    },
    {
        id: "element-3",
        classList: "absolute right-52 top-32 w-24 h-24 rounded-lg bg-orange-300 transition-all duration-100",
        styles: {
            SIZE: "96px",
            TRANSLATE_X: ["10px", "20px", "30px", "40px", "50px", "60px", "80px"],
            TRANSLATE_Y: ["-10px", "-20px", "-40px", "-60px", "-80px", "-100px", "-160px", "-300px"],
            OPACITY: "70%",
        },
    },
    {
        id: "element-4",
        classList: "absolute right-1/3 top-40 w-16 h-16 rounded-lg bg-orange-300 transition-all duration-100",
        styles: {
            SIZE: "64px",
            TRANSLATE_X: ["-30px", "-20px", "30px", "40px", "50px", "60px", "80px"],
            TRANSLATE_Y: ["-10px", "-20px", "-40px", "-60px", "-80px", "-100px", "-160px", "-220px"],
            OPACITY: "40%",
        },
    },
    {
        id: "element-5",
        classList: "absolute left-72 top-96 w-16 h-16 rounded-lg bg-orange-300 transition-all duration-100",
        styles: {
            SIZE: ["64px", "70px", "80px", "90px", "100px", "110px", "120px", "130px"],
            TRANSLATE_X: ["-10px", "-20px", "-30px", "-60px", "-90px", "-120px", "-150px", "-180px", "-220px", "-340px", "-500px"],
            TRANSLATE_Y: ["-10px", "-20px", "-30px", "-50px", "-80px", "-110px", "-140px", "-160px", "-190px", "-230px"],
            OPACITY: "80%",
        },
    },
    {
        id: "element-6",
        classList: "absolute left-1/3 top-72 w-8 h-8 rounded-lg bg-orange-300 transition-all duration-100",
        styles: {
            SIZE: ["32px", "32px", "32px", "40px", "50px", "60px"],
            TRANSLATE_X: ["-10px", "-20px", "-30px", "-60px", "-90px", "-120px", "-160px", "-180px", "-240px"],
            TRANSLATE_Y: ["-10px", "-20px", "-30px", "-50px", "-80px", "-110px", "-140px", "-160px", "-190px"],
            OPACITY: ["40%", "40%", "40%", "50%", "60%", "70%", "80%", "100%"],
        },
    },
];

export const domData3 = [
    {
        id: "main-logo",
        defaultClass: "absolute px-10 py-8 bg-gradient-to-r from-rose-400 to-red-200 rounded-3xl transition-all duration-300 center",
        classLists: [
            "left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 translate-y-0 opacity-100",
            "left-1/2 top-1/2 w-32 h-32 -translate-x-1/2 -translate-y-32 opacity-100",
            "left-1/2 top-1/2 w-36 h-36 -translate-x-1/2 -translate-y-32 opacity-100",
            "left-1/2 top-1/2 w-40 h-40 -translate-x-1/2 -translate-y-32 opacity-100",
            "left-1/2 top-1/2 w-44 h-44 -translate-x-1/2 -translate-y-32 opacity-100",
            "left-1/2 top-1/2 w-48 h-48 -translate-x-1/2 -translate-y-32 opacity-100",
            "left-1/2 top-1/2 w-56 h-56 -translate-x-1/2 -translate-y-60 opacity-100",
            "left-1/2 top-1/2 w-56 h-56 -translate-x-1/2 -translate-y-96 opacity-30",
            "left-1/2 top-0 w-56 h-56 -translate-x-1/2 -translate-y-96 opacity-0",
        ],
        startIndex: 4,
        type: "image",
        src: "logo",
    },
    {
        id: "main-logo-text",
        defaultClass: "absolute transition-all duration-300 text-center",
        classLists: [
            "left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 translate-y-0 mt-14 opacity-100 text-sm",
            "left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 translate-y-0 mt-16 opacity-100 text-2xl",
            "left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 translate-y-0 mt-20 opacity-100 text-3xl",
            "left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 translate-y-0 mt-24 opacity-100 text-4xl",
            "left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 translate-y-0 mt-28 opacity-100 text-5xl",
            "left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 translate-y-0 mt-12 opacity-100 text-5xl",
            "left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 -translate-y-24 mt-0 opacity-100 text-6xl",
            "left-1/2 top-1/2 w-16 h-16 -translate-x-1/2 -translate-y-72 mt-0 opacity-100 text-6xl",
            "left-1/2 top-0 w-16 h-16 -translate-x-1/2 -translate-y-96 mt-0 opacity-0 text-6xl",
        ],
        startIndex: 5,
        type: "text",
        text: "Tesss",
        textClassList: "text-white text-nowrap flex items-center justify-center font-mono",
    },
];

export const domData = [
    {
        id: "main-logo",
        animations: {
            onScroll: {
                scale: {
                    startValue: 0,
                    endValue: 1.5,
                    unit: "",
                },
                translateX: {
                    startValue: -50,
                    endValue: -50,
                    unit: "%",
                },
                translateY: {
                    startValue: 400,
                    endValue: -100,
                    unit: "px",
                },
                opacity: {
                    startValue: 0,
                    endValue: 100,
                    unit: "%",
                },
            },
            onSticky: {
                scale: {
                    startValue: 1.5,
                    endValue: 5,
                    unit: "",
                },
                translateX: {
                    endValue: -50,
                    startValue: -50,
                    unit: "%",
                },
                translateY: {
                    startValue: -100,
                    endValue: -1300,
                    unit: "px",
                },
                opacity: {
                    startValue: 100,
                    endValue: -200,
                    unit: "%",
                },
            },
        },
    },
    {
        id: "main-text",
        animations: {
            onScroll: {
                scale: {
                    startValue: -1,
                    endValue: 2,
                    unit: "",
                },
                translateX: {
                    startValue: -50,
                    endValue: -50,
                    unit: "%",
                },
                translateY: {
                    startValue: 400,
                    endValue: 100,
                    unit: "px",
                },
                opacity: {
                    startValue: 0,
                    endValue: 100,
                    unit: "%",
                },
            },
            onSticky: {
                scale: {
                    startValue: 2,
                    endValue: 5,
                    unit: "",
                },
                translateX: {
                    startValue: -50,
                    endValue: -50,
                    unit: "%",
                },
                translateY: {
                    startValue: 100,
                    endValue: -800,
                    unit: "px",
                },
                opacity: {
                    startValue: 100,
                    endValue: 0,
                    unit: "%",
                },
            },
        },
    },

    {
        id: "element-1",
        animations: {
            onScroll: {
                scale: {
                    startValue: 1,
                    endValue: 1.5,
                    unit: "",
                },
                translateX: {
                    startValue: 0,
                    endValue: -200,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 70,
                    endValue: 70,
                    unit: "%",
                },
            },
            onSticky: {
                scale: {
                    startValue: 1.5,
                    endValue: 2.5,
                    unit: "",
                },
                translateX: {
                    startValue: -200,
                    endValue: -700,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 70,
                    endValue: 70,
                    unit: "%",
                },
            },
        },
    },
    {
        id: "element-2",
        animations: {
            onScroll: {
                scale: {
                    startValue: 1.5,
                    endValue: 2,
                    unit: "",
                },
                translateX: {
                    startValue: 100,
                    endValue: -100,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 50,
                    endValue: 50,
                    unit: "%",
                },
            },
            onSticky: {
                scale: {
                    startValue: 2,
                    endValue: 4,
                    unit: "",
                },
                translateX: {
                    startValue: -100,
                    endValue: -700,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 50,
                    endValue: 50,
                    unit: "%",
                },
            },
        },
    },
    {
        id: "element-3",
        animations: {
            onScroll: {
                scale: {
                    startValue: 0.8,
                    endValue: 1.2,
                    unit: "",
                },
                translateX: {
                    startValue: 0,
                    endValue: 200,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 20,
                    endValue: 40,
                    unit: "%",
                },
            },
            onSticky: {
                scale: {
                    startValue: 1.2,
                    endValue: 1.5,
                    unit: "",
                },
                translateX: {
                    startValue: 200,
                    endValue: 600,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: -100,
                    unit: "px",
                },
                opacity: {
                    startValue: 40,
                    endValue: 40,
                    unit: "%",
                },
            },
        },
    },
    {
        id: "element-4",
        animations: {
            onScroll: {
                scale: {
                    startValue: 0.5,
                    endValue: 1,
                    unit: "",
                },
                translateX: {
                    startValue: 100,
                    endValue: -50,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 40,
                    endValue: 40,
                    unit: "%",
                },
            },
            onSticky: {
                scale: {
                    startValue: 1,
                    endValue: 1.5,
                    unit: "",
                },
                translateX: {
                    startValue: -50,
                    endValue: -500,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 40,
                    endValue: 40,
                    unit: "%",
                },
            },
        },
    },
    {
        id: "element-5",
        animations: {
            onScroll: {
                scale: {
                    startValue: 0.3,
                    endValue: 0.5,
                    unit: "",
                },
                translateX: {
                    startValue: -100,
                    endValue: 50,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 20,
                    endValue: 20,
                    unit: "%",
                },
            },
            onSticky: {
                scale: {
                    startValue: 0.5,
                    endValue: 1.5,
                    unit: "",
                },
                translateX: {
                    startValue: 50,
                    endValue: 400,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: -100,
                    unit: "px",
                },
                opacity: {
                    startValue: 20,
                    endValue: 60,
                    unit: "%",
                },
            },
        },
    },
    {
        id: "element-6",
        animations: {
            onScroll: {
                scale: {
                    startValue: 1,
                    endValue: 1.5,
                    unit: "",
                },
                translateX: {
                    startValue: 0,
                    endValue: 300,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 70,
                    endValue: 70,
                    unit: "%",
                },
            },
            onSticky: {
                scale: {
                    startValue: 1.5,
                    endValue: 2.2,
                    unit: "",
                },
                translateX: {
                    startValue: 300,
                    endValue: 600,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: -100,
                    unit: "px",
                },
                opacity: {
                    startValue: 70,
                    endValue: 70,
                    unit: "%",
                },
            },
        },
    },
    {
        id: "element-7",
        animations: {
            onScroll: {
                scale: {
                    startValue: 0.2,
                    endValue: 0.8,
                    unit: "",
                },
                translateX: {
                    startValue: -100,
                    endValue: -400,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 70,
                    endValue: 70,
                    unit: "%",
                },
            },
            onSticky: {
                scale: {
                    startValue: 0.8,
                    endValue: 1,
                    unit: "",
                },
                translateX: {
                    startValue: -400,
                    endValue: -800,
                    unit: "px",
                },
                translateY: {
                    startValue: 0,
                    endValue: 0,
                    unit: "px",
                },
                opacity: {
                    startValue: 70,
                    endValue: 90,
                    unit: "%",
                },
            },
        },
    },
];
