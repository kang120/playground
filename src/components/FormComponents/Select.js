/*

data = [
    {
        text: 'All',
        value: '0',
        selected: true
    },
    ...
]

*/

import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

/*
options = {
    paddingY: 1,
    isSelectedBold: true
}
*/

const Select = ({ selectedText, selectedValue, data, onChange, defaultText, options }) => {
    const defaultOptionsValue = {
        paddingY: 1,
        maxHeight: "96",
        filterable: false,
        scrollAnimation: false,
    };

    const [defaultOptions, setDefaultOptions] = useState(defaultOptionsValue);

    const [filteredData, setFilteredData] = useState(data);
    const [filterValue, setFilterValue] = useState("");

    const ref = useRef(null);
    const collapseRef = useRef(null);
    const iconRef = useRef(null);

    useEffect(() => {
        const handleClick = (e) => {
            // to close the collapse
            if (ref.current && !ref.current.contains(e.target) && collapseRef.current && !collapseRef.current.classList.contains("h-0")) {
                toggleCollapse();
            }
        };

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    useEffect(() => {
        const newFilteredData = data.filter((dat) => dat.text.toUpperCase().includes(filterValue.toUpperCase()));
        setFilteredData(newFilteredData);
    }, [data, filterValue]);

    // ONLY CSS STYLE
    useEffect(() => {
        const newDefaultOptions = defaultOptions;

        if (options != null) {
            Object.keys(options).forEach((key) => {
                newDefaultOptions[key] = options[key];
            });
        }

        setDefaultOptions(newDefaultOptions);
    }, [options]);

    // ONLY CSS STYLE
    useEffect(() => {
        if (!collapseRef.current) {
            return;
        }

        const collapse = collapseRef.current;
        const windowHeight = window.innerHeight;

        collapse.style.height = "auto";
        const { top, height } = collapse.getBoundingClientRect();
        collapse.style.height = 0;

        if (top + height >= windowHeight) {
            collapse.classList.remove("bottom-0");
            collapse.classList.remove("translate-y-full");
            collapse.classList.add("top-0");
            collapse.classList.add("-translate-y-full");
        } else {
            collapse.classList.add("bottom-0");
            collapse.classList.add("translate-y-full");
            collapse.classList.remove("top-0");
            collapse.classList.remove("-translate-y-full");
        }
    }, [collapseRef]);

    const toggleCollapse = () => {
        if (!collapseRef.current || !iconRef.current) {
            return;
        }

        const collapse = collapseRef.current;
        const icon = iconRef.current;

        if (collapse.classList.contains("h-0")) {
            collapse.style.height = "auto";

            if (defaultOptions.scrollAnimation) {
                const { height } = collapse.getBoundingClientRect();
                collapse.style.height = 0;
                const temp = collapse.offsetHeight;
                collapse.style.height = height + "px";
            }
        } else {
            collapse.style.height = 0;
            setFilterValue("");
        }

        collapse.classList.toggle("h-0");
        //collapse.classList.toggle("border");
        //collapse.classList.toggle("border-gray-300");
        icon.classList.toggle("rotate-180");
    };

    const onClick = (dat) => {
        onChange(dat);
        toggleCollapse();
    };

    return (
        <div ref={ref} className="relative w-full h-full border border-gray-300 rounded">
            <div className={`px-3 py-${defaultOptions.paddingY} flex items-center cursor-pointer`} onClick={toggleCollapse}>
                <div>{selectedText != "" ? selectedText : defaultText}</div>
                <FontAwesomeIcon ref={iconRef} className="ms-auto text-slate-600 transition-all duration-200" icon={faCaretDown} />
            </div>

            <div
                ref={collapseRef}
                className={`max-h-${defaultOptions.maxHeight} h-0 overflow-hidden absolute left-0 bottom-0 translate-y-full w-full transition-all duration-200 z-50`}
            >
                <div className="w-full h-full flex flex-col border border-gray-300 bg-white rounded-b">
                    {defaultOptions.filterable ? (
                        <div className="p-2">
                            <input
                                className="w-full text-sm px-2 py-1"
                                type="text"
                                value={filterValue}
                                onChange={(e) => setFilterValue(e.target.value)}
                            />
                        </div>
                    ) : null}

                    {filteredData.length > 0 ? (
                        <div className={`h-full overflow-auto`}>
                            {filteredData.map((dat, index) => (
                                <div
                                    key={index}
                                    className={`px-3 py-2 hover:bg-slate-100 ${
                                        selectedValue == dat.value ? "bg-slate-100 font-bold" : "hover:text-sky-700"
                                    } cursor-pointer`}
                                    onClick={() => onClick(dat)}
                                >
                                    {dat.text}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="center py-2">No data</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Select;
