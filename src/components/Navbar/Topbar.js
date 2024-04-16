import {
    faAngleRight,
    faArrowRightFromBracket,
    faArrowUpRightFromSquare,
    faBars,
    faChartLine,
    faCircleUser,
    faDroplet,
    faKey,
    faNewspaper,
    faTable,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppStore from "../../stores/AppStore";
import { PERSONAL_WEBSITE } from "../../constant";

const Topbar = () => {
    const { sidebarAlwaysOpen, title, toggleSidebarAlwaysOpen, toggleSidebarOpen } = useAppStore();

    const navigate = useNavigate();

    const onToggleSidebarAlwaysOpen = () => {
        if (window.innerWidth < 1024) {
            toggleSidebarOpen();
        } else {
            toggleSidebarAlwaysOpen();
        }
    };

    const gotoPersonalWebsite = () => {
        window.open(PERSONAL_WEBSITE, "_blank");
    };

    return (
        <div
            className={`${
                sidebarAlwaysOpen ? "lg:ps-64" : "lg:ps-12"
            } fixed flex items-center w-full h-12 bg-white z-20 text-sm shadow-lg`}
        >
            <div
                className="w-8 h-8 ms-4 center hover:bg-gray-200 hover:text-slate-950 rounded-full cursor-pointer"
                onClick={onToggleSidebarAlwaysOpen}
            >
                <FontAwesomeIcon className="fa-lg" icon={faBars} />
            </div>

            <div className="ms-6 flex items-center">
                <div className="ms-2 font-bold text-base">PLAYGROUND{" / " + title}</div>
            </div>

            <div className="flex items-center ms-auto me-4 md:me-10">
                <button className="btn btn-blue-600 flex items-center" onClick={gotoPersonalWebsite}>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    <div className="ms-4">Wei Kang</div>
                </button>
            </div>
        </div>
    );
};

export default Topbar;