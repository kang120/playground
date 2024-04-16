import { useEffect, useRef, useState } from "react";

const Switch = ({ id, checked, onChange, label, disabled = false }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        setIsChecked(checked);
    }, [checked]);

    const toggleSwitch = () => {
        if (disabled) {
            return;
        }

        onChange(!isChecked);
        setIsChecked((prev) => !prev);
    };

    return (
        <div
            className={`w-full h-4 p-0.5 rounded-full ${isChecked ? "bg-blue-500" : "bg-gray-100"} ${
                disabled ? "" : "cursor-pointer"
            } transition-all duration-300`}
            onClick={toggleSwitch}
        >
            <div className="relative w-full h-full">
                <div
                    className={`absolute ${
                        isChecked ? "right-0 left-full -translate-x-full" : "left-0 right-full"
                    } top-0 h-full aspect-square rounded-full bg-white transition-all duration-500`}
                ></div>
            </div>

            <input id={id} className="hidden" type="checkbox" checked={isChecked} onChange={(e) => onChange(e.target.value)} />
        </div>
    );
};

export default Switch;
