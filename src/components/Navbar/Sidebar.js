import {
    faAngleRight,
    faBars,
    faChartLine,
    faCity,
    faDroplet,
    faNewspaper,
    faTable,
    faUser,
    faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { NAV_DATA } from "../../constant";
import useAppStore from "../../stores/AppStore";

const Sidebar = () => {
    const { sidebarAlwaysOpen, sidebarOpen, toggleSidebarOpen, setSidebarAlwaysOpen, setSidebarOpen } = useAppStore();

    const [urlPath, setUrlPath] = useState("");

    const navData = NAV_DATA;

    useEffect(() => {
        const baseUrl = window.location.origin;
        const currentUrl = window.location.href.split("#")[0];

        const path = currentUrl.replace(baseUrl, "");

        setUrlPath(path);
    }, [window]);

    useEffect(() => {
        if (window.innerWidth < 1024) {
            return;
        }

        if (sidebarAlwaysOpen) {
            setSidebarOpen(true);
        } else {
            setSidebarOpen(false);
        }
    }, [sidebarAlwaysOpen]);

    useEffect(() => {
        if (sidebarOpen) {
            openCurrentPathCollapse();
        } else {
            closeAllCollapse();
        }

        const handleResize = () => {
            if (window.innerWidth < 1024 && sidebarOpen) {
                setSidebarOpen(false);
            } else if (window.innerWidth >= 1024 && !sidebarOpen) {
                setSidebarAlwaysOpen(true);
                setSidebarOpen(true);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [sidebarOpen]);

    const toggleNavbar = () => {
        if (sidebarAlwaysOpen || window.innerWidth < 1024) {
            return;
        }

        toggleSidebarOpen();
    };

    const closeAllCollapse = () => {
        const collapses = document.getElementsByClassName("navbar-collapse");
        const icons = document.getElementsByClassName("navbar-icon");

        for (let i = 0; i < collapses.length; i++) {
            const collapse = collapses[i];
            const icon = icons[i];

            if (!collapse.classList.contains("h-0")) {
                collapse.style.height = 0;
                collapse.classList.add("h-0");
                icon.classList.remove("rotate-90");
            }
        }
    };

    const openCurrentPathCollapse = () => {
        const collapses = document.getElementsByClassName("navbar-collapse");
        const icons = document.getElementsByClassName("navbar-icon");

        const collapseNavs = navData.filter((dat) => "children" in dat);

        for (let i = 0; i < collapses.length; i++) {
            if (collapseNavs[i]["activePaths"].includes(urlPath)) {
                const collapse = collapses[i];
                const icon = icons[i];

                if (collapse.classList.contains("h-0")) {
                    collapse.style.height = "auto";
                    const { height } = collapse.getBoundingClientRect();
                    collapse.style.height = 0;
                    const temp = collapse.offsetHeight;
                    collapse.style.height = height + "px";

                    collapse.classList.toggle("h-0");
                    icon.classList.toggle("rotate-90");
                }
            }
        }
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    return (
        <>
            <div
                id="sidebar"
                className={`${
                    sidebarOpen ? "w-64" : "w-12 -left-12 lg:left-0"
                } h-full fixed overflow-hidden py-6 bg-gray-700 shadow-lg text-sm text-nowrap transition-all duration-200 z-30`}
                onMouseEnter={toggleNavbar}
                onMouseLeave={toggleNavbar}
            >
                {sidebarOpen ? <div className="px-4 text-white text-3xl text-center italic">Playground</div> : null}

                <div className="mt-6 py-6">
                    <NavItem navData={navData} urlPath={urlPath} />
                </div>
            </div>

            <div
                onClick={closeSidebar}
                className={`${sidebarOpen ? "" : "hidden"} lg:hidden fixed top-0 left-0 w-full h-full bg-gray-950/50 z-20`}
            ></div>
        </>
    );
};

export default Sidebar;
