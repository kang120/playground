import { useState } from "react";
import Sidebar from "../Navbar/Sidebar";
import useAppStore from "../../stores/AppStore";
import Topbar from "../Navbar/Topbar";

const MainWrapper = ({ children }) => {
    const { sidebarAlwaysOpen, windowWidth } = useAppStore();

    return (
        <div className="w-full h-full">
            <div className="w-full h-full">
                <Topbar />
                <Sidebar />

                <div className={`${sidebarAlwaysOpen ? "lg:ms-64" : "lg:ms-12"}`}>
                    <div className="relative px-6 md:px-10 pb-8">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default MainWrapper;
