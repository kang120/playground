import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import useAppStore from "../../stores/AppStore";

const NavItem = ({ navData, urlPath }) => {
    const { sidebarAlwaysOpen, sidebarOpen } = useAppStore();

    const toggleCollapse = (index) => {
        const collapse = document.getElementById("collapse_" + index);
        const icon = document.getElementById("icon_" + index);

        if (collapse.classList.contains("h-0")) {
            collapse.style.height = "auto";
            const { height } = collapse.getBoundingClientRect();
            collapse.style.height = 0;
            const temp = collapse.offsetHeight;
            collapse.style.height = height + "px";

            closeOtherCollapse(index);
        } else {
            collapse.style.height = 0;
        }

        collapse.classList.toggle("h-0");
        icon.classList.toggle("rotate-90");
    };

    const closeOtherCollapse = (index) => {
        const collapses = document.getElementsByClassName("navbar-collapse");

        for (let i = 0; i < collapses.length; i++) {
            const collapse = collapses[i];
            const collapse_index = collapse.id.split("_")[1];

            if (collapse_index == index) {
                continue;
            }

            if (!collapse.classList.contains("h-0")) {
                // if other collapses open, close them
                collapse.style.height = 0;

                const icon = document.getElementById("icon_" + collapse_index);

                collapse.classList.toggle("h-0");
                icon.classList.toggle("rotate-90");
            }
        }
    };

    return (
        <div className="flex flex-col">
            {navData.map((nav, index1) =>
                "children" in nav ? (
                    <div key={index1}>
                        <div
                            className={`navbar-item ${nav["activePaths"].includes(urlPath) ? "text-white" : ""} flex items-center`}
                            onClick={() => toggleCollapse(index1)}
                        >
                            <div className="w-12 flex-shrink-0 center">
                                <FontAwesomeIcon icon={nav["icon"]} />
                            </div>

                            <div>{nav["text"]}</div>

                            <FontAwesomeIcon
                                id={`icon_${index1}`}
                                className={`navbar-icon ${
                                    nav["activePaths"].includes(urlPath) ? "rotate-90" : ""
                                } ms-auto transition-all duration-300`}
                                icon={faAngleRight}
                            />
                        </div>

                        {nav["activePaths"].includes(urlPath) && !sidebarAlwaysOpen && !sidebarOpen ? (
                            <div className="h-0.5 mx-3 bg-orange-500"></div>
                        ) : null}

                        <div
                            id={`collapse_${index1}`}
                            className={`navbar-collapse ${
                                nav["activePaths"].includes(urlPath) ? "" : "h-0"
                            } overflow-hidden transition-all duration-200`}
                        >
                            <div className="flex flex-col">
                                {nav["children"].map((item, index2) => (
                                    <Link key={index2} to={item["path"]}>
                                        <div className={`navbar-item ${item.activePaths.includes(urlPath) ? "navbar-active" : ""} ps-12`}>
                                            {item["text"]}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div key={index1}>
                        <Link to={nav["path"]}>
                            <div
                                className={`navbar-item ${
                                    nav["activePaths"].includes(urlPath) ? "navbar-active" : ""
                                } flex items-center flex-nowrap`}
                            >
                                <div className="w-12 flex-shrink-0 center">
                                    <FontAwesomeIcon icon={nav["icon"]} />
                                </div>
                                <div>{nav["text"]}</div>
                            </div>
                        </Link>

                        {nav["activePaths"].includes(urlPath) && !sidebarAlwaysOpen && !sidebarOpen ? (
                            <div className="h-0.5 mx-3 bg-orange-500"></div>
                        ) : null}
                    </div>
                )
            )}
        </div>
    );
};

export default NavItem;
