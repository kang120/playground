import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const SectionNavbar = ({ sections }) => {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = null;

            sections.forEach((sec) => {
                sec.subSections.forEach((s) => {
                    const section = document.querySelector(s.sectionId);
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        currentSection = section.id;
                    }
                });
            });

            setActiveSection("#" + currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [sections]);

    return (
        <div className="hidden md:block md:fixed top-12 right-0 w-60 pe-10 pt-10 text-sm">
            <div className="font-medium">On this page</div>

            {sections.map((sec) => (
                <div className="flex flex-col gap-y-2 mt-5">
                    <div className="font-medium">{sec.sectionCategory}</div>
                    {sec.subSections.map((sub) => (
                        <a
                            href={sub.sectionId}
                            className={`relative ms-4 flex ${
                                sub.sectionId == activeSection ? "text-blue-500 font-bold" : "text-gray-500hover:text-gray-900 hover:font-medium"
                            } cursor-pointer`}
                        >
                            <FontAwesomeIcon className="fa-xs absolute left-0 top-0 translate-y-1/2" icon={faAngleRight} />
                            <div className="ms-4">{sub.sectionName}</div>
                        </a>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SectionNavbar;
