import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faChartLine, faCity, faMoneyBill, faSquareMinus } from "@fortawesome/free-regular-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";

export const BASE_URL = "http://localhost:3000";
export const PERSONAL_WEBSITE = "https://lwk20.com";

export const PAGE_SIZES = [10, 25, 50, 100];
export const DEFAULT_PAGE_SIZE = 10;

export const NAV_DATA = [
    {
        text: "Buttons",
        path: "/buttons",
        activePaths: ["/", "/buttons"],
        icon: faSquareMinus,
    },
    {
        text: "Playgrounds",
        activePaths: ["/playground_1"],
        children: [
            {
                text: "Playground 1",
                path: "/playground_1",
                activePaths: ["/playground_1"],
            }
        ],
        icon: faCube,
    },
];

export const BUTTON_SECTIONS = [
    {
        sectionCategory: "Tailwind Buttons",
        subSections: [
            {
                sectionName: "Small buttons",
                sectionId: "#btn-sm",
            },
            {
                sectionName: "Medium buttons",
                sectionId: "#btn-md",
            },
            {
                sectionName: "Large buttons",
                sectionId: "#btn-lg",
            },
        ],
    },
    {
        sectionCategory: "Custom Buttons",
        subSections: [
            {
                sectionName: "Build with color pallete",
                sectionId: "#btn-custom",
            },
        ],
    },
    {
        sectionCategory: "Special Buttons",
        subSections: [
            {
                sectionName: "Special Buttons",
                sectionId: "#btn-special",
            },
        ],
    },
];
