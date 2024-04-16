import { useEffect, useLayoutEffect, useRef } from "react";
import { toggleModal } from "../../helpers";

const Modal = ({ type, children, onClose, isStatic = false }) => {
    const modalRef = useRef(null);
    const modalContentRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!modalRef.current || !modalContentRef.current) {
                return;
            }

            // when the modal is not opened yet
            if (modalRef.current.classList.contains("opacity-0") || !modalRef.current.contains(e.target)) {
                return;
            }

            if (!modalContentRef.current.contains(e.target)) {
                if (isStatic) {
                    modalContentRef.current.classList.add("vibrate");

                    setTimeout(() => {
                        modalContentRef.current.classList.remove("vibrate");
                    }, 1000);
                } else {
                    toggleModal(type, onClose);
                }
            }
        };

        const handleKeydown = (e) => {
            if (e.ctrlKey && e.key === "a" && document.body.classList.contains("overflow-hidden")) {
                e.preventDefault(); // Prevent default behavior (selecting all text)
                const selection = window.getSelection();
                const range = document.createRange();
                range.selectNodeContents(modalContentRef.current);
                selection.removeAllRanges();
                selection.addRange(range);
            }
        };

        document.addEventListener("click", handleClickOutside);
        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("click", handleClickOutside);
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <div
            ref={modalRef}
            id={`${type}-modal`}
            className="pointer-events-none opacity-0 fixed top-0 left-0 w-full h-full center px-4 bg-gray-950/50 rounded z-50 transition-all ease-in-out duration-500"
        >
            <div
                ref={modalContentRef}
                id={`${type}-modal-content`}
                className="min-w-full md:min-w-96 w-fit max-w-3xl -translate-y-10 bg-white rounded transition-all ease-in-out duration-1000"
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
