import { useEffect, useState } from "react";
import MainWrapper from "../components/MainWrapper";
import useAppStore from "../stores/AppStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Section from "../components/MainWrapper/Section";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import Switch from "../components/FormComponents/Switch";
import { toggleModal } from "../helpers";

const ButtonsView = () => {
    const { sidebarAlwaysOpen, setTitle, setCodeBlock } = useAppStore();

    const [customColor, setCustomColor] = useColor("rgb(74, 222, 128)");
    const [customWhiteText, setCustomWhiteText] = useState(false);

    const tailwindColors = [
        "red",
        "orange",
        "amber",
        "yellow",
        "lime",
        "green",
        "emerald",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "fuchsia",
        "pink",
        "rose",
        "slate",
        "gray",
        "zinc",
        "neutral",
        "stone",
    ];
    const values = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"];

    useEffect(() => {
        setTitle("Buttons");
    }, []);

    const showCode = (e, size, color, value) => {
        var tailwindCode = ".btn {\n    @apply text-sm px-3 py-2 rounded transition-all duration-300;\n}\n\n";

        tailwindCode += `.btn-${color}-${value} {\n    @apply bg-${color}-${value};\n}\n\n`;

        if (size == "sm") {
            tailwindCode += ".btn-sm {\n    @apply text-sm px-3 py-2;\n}";
        } else if (size == "md") {
            tailwindCode += ".btn-md {\n    @apply text-base px-5 py-2;\n}";
        } else {
            tailwindCode += ".btn-lg {\n    @apply text-lg px-7 py-2;\n}";
        }

        const style = window.getComputedStyle(e.target);

        var cssCode = ".btn {\n";
        cssCode += "    font-size: " + style.fontSize + ";\n";
        cssCode += "    line-height: " + style.lineHeight + ";\n";
        cssCode += "    padding: " + style.padding + ";\n";
        cssCode += "    border-radius: " + style.borderRadius + ";\n";
        cssCode += "    transition-duration: " + style.transitionDuration + ";\n";
        cssCode += "    background-color: " + style.backgroundColor + ";\n";
        cssCode += "}";

        setCodeBlock({
            codeList: {
                tailwindcss: tailwindCode,
                css: cssCode,
            },
            optionList: [
                {
                    label: "tailwindcss",
                    language: "css",
                },
                {
                    label: "css",
                    language: "css",
                },
            ],
            selectedCode: tailwindCode,
            selectedOption: {
                label: "tailwindcss",
                language: "css",
            },
        });
        toggleModal("code");
    };

    return (
        <MainWrapper>
            <div className="md:me-60">
                <Section id="btn-sm">
                    <div className="text-xl text-center font-bold">Small Buttons</div>

                    <div className="mt-10 flex flex-col gap-y-7">
                        {tailwindColors.map((color, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-11 gap-x-2 gap-y-4"
                            >
                                {values.map((value, index2) => (
                                    <div key={index2} className="flex flex-col items-center">
                                        <button
                                            className={`btn btn-sm btn-${color}-${value}`}
                                            onClick={(e) => showCode(e, "sm", color, value)}
                                        >
                                            Click me
                                        </button>
                                        <div className="text-xs">
                                            {color}-{value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="btn-md">
                    <div className="text-xl text-center font-bold">Medium Buttons</div>

                    <div className="mt-10 flex flex-col gap-y-7">
                        {tailwindColors.map((color, index) => (
                            <div
                                key={index}
                                className={`grid ${
                                    sidebarAlwaysOpen
                                        ? "grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-9"
                                        : "lg:grid-cols-6 xl:grid-cols-9 2xl:grid-cols-11"
                                } gap-x-2 gap-y-4`}
                            >
                                {values.map((value, index2) => (
                                    <div key={index2} className="flex flex-col items-center">
                                        <button
                                            className={`btn btn-md btn-${color}-${value}`}
                                            onClick={(e) => showCode(e, "md", color, value)}
                                        >
                                            Click me
                                        </button>
                                        <div className="text-xs">
                                            {color}-{value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="btn-lg">
                    <div className="text-xl text-center font-bold">Large Buttons</div>

                    <div className="mt-10 flex flex-col gap-y-7">
                        {tailwindColors.map((color, index) => (
                            <div
                                key={index}
                                className={`grid ${
                                    sidebarAlwaysOpen
                                        ? "grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-8"
                                        : "lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9"
                                } gap-x-2 gap-y-4`}
                            >
                                {values.map((value, index2) => (
                                    <div key={index2} className="flex flex-col items-center">
                                        <button
                                            className={`btn btn-lg btn-${color}-${value}`}
                                            onClick={(e) => showCode(e, "lg", color, value)}
                                        >
                                            Click me
                                        </button>
                                        <div className="text-xs">
                                            {color}-{value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </Section>

                <Section id="btn-custom">
                    <div className="text-xl text-center font-bold">Custom Button</div>
                    <div className="mt-3 text-center text-sm">Build the button with color pallete</div>

                    <div className="mt-16">
                        <div className="flex flex-col lg:flex-row items-stretch">
                            <div className="flex flex-col gap-y-4 lg:gap-y-0 lg:w-1/2">
                                <div className="center">
                                    <div className="w-10">
                                        <Switch value={customWhiteText} onChange={setCustomWhiteText} />
                                    </div>
                                    <div className="ms-3">White Text</div>
                                </div>

                                <div className="grow flex flex-row lg:flex-col items-center justify-evenly">
                                    <button
                                        style={{ background: customColor.hex, color: customWhiteText ? "white" : "black" }}
                                        className="btn btn-sm"
                                    >
                                        Click Me
                                    </button>
                                    <button
                                        style={{ background: customColor.hex, color: customWhiteText ? "white" : "black" }}
                                        className="btn btn-md"
                                    >
                                        Click Me
                                    </button>
                                    <button
                                        style={{ background: customColor.hex, color: customWhiteText ? "white" : "black" }}
                                        className="btn btn-lg"
                                    >
                                        Click Me
                                    </button>
                                </div>
                            </div>

                            <div className="grow mt-6 lg:mt-0">
                                <ColorPicker color={customColor} onChange={setCustomColor} />
                            </div>
                        </div>
                    </div>
                </Section>

                <Section id="btn-special">
                    <div className="text-xl text-center font-bold">Special Button</div>

                    <div className="mt-10 flex flex-col gap-y-7">
                        <div className="btn btn-sm flex items-center justify-center">
                            <button className="button-1 px-6 py-3 bg-blue-300 hover:after:bg-blue-200 z-10 rounded relative overflow-hidden">
                                Click me
                            </button>
                        </div>
                    </div>
                </Section>
            </div>

            <div className="hidden md:block md:fixed top-12 right-0 w-60 pe-10 pt-10 text-sm">
                <div className="font-medium">On this page</div>

                <div className="flex flex-col gap-y-2 mt-5">
                    <div className="font-medium">Tailwind Buttons</div>

                    <a href="#btn-sm" className="relative ms-4 flex text-gray-500 hover:text-gray-900 hover:font-medium cursor-pointer">
                        <FontAwesomeIcon className="fa-xs absolute left-0 top-0 translate-y-1/2" icon={faAngleRight} />
                        <div className="ms-4">Small buttons</div>
                    </a>

                    <a href="#btn-md" className="relative ms-4 flex text-gray-500 hover:text-gray-900 hover:font-medium cursor-pointer">
                        <FontAwesomeIcon className="fa-xs absolute left-0 top-0 translate-y-1/2" icon={faAngleRight} />
                        <div className="ms-4">Medium buttons</div>
                    </a>

                    <a href="#btn-lg" className="relative ms-4 flex text-gray-500 hover:text-gray-900 hover:font-medium cursor-pointer">
                        <FontAwesomeIcon className="fa-xs absolute left-0 top-0 translate-y-1/2" icon={faAngleRight} />
                        <div className="ms-4">Large buttons</div>
                    </a>
                </div>

                <div className="flex flex-col gap-y-2 mt-5">
                    <div className="font-medium">Custom Buttons</div>

                    <a href="#btn-custom" className="relative ms-4 flex text-gray-500 hover:text-gray-900 hover:font-medium cursor-pointer">
                        <FontAwesomeIcon className="fa-xs absolute left-0 top-0 translate-y-1/2" icon={faAngleRight} />
                        <div className="ms-4">Build with color pallete</div>
                    </a>
                </div>

                <div className="flex flex-col gap-y-2 mt-5">
                    <div className="font-medium">Special Buttons</div>

                    <a
                        href="#btn-special"
                        className="relative ms-4 flex text-gray-500 hover:text-gray-900 hover:font-medium cursor-pointer"
                    >
                        <FontAwesomeIcon className="fa-xs absolute left-0 top-0 translate-y-1/2" icon={faAngleRight} />
                        <div className="ms-4">Special Buttons</div>
                    </a>
                </div>
            </div>
        </MainWrapper>
    );
};

export default ButtonsView;
