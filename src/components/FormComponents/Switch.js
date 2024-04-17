import { useEffect, useState } from "react";

const Switch = ({ checked, onChange, label, inputId, disabled = false }) => {
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
        <div className="flex items-center">
            <div
                className={`w-10 h-5 p-0.5 rounded-full ${isChecked ? "bg-blue-500" : "bg-gray-200"} ${
                    disabled ? "" : "cursor-pointer"
                } transition-all duration-300`}
                onClick={toggleSwitch}
            >
                <div className="relative w-full h-full">
                    <div
                        className={`absolute ${
                            isChecked ? "right-0 left-full -translate-x-full" : "left-0 right-full"
                        } top-0 h-full aspect-square rounded-full bg-white transition-all duration-300`}
                    ></div>
                </div>
            </div>

            <input id={inputId} className="hidden" type="checkbox" value={isChecked} onChange={toggleSwitch} />

            {label != null ? (
                <label className="ms-3 cursor-pointer" htmlFor={inputId}>
                    {label}
                </label>
            ) : null}
        </div>
    );
};

export default Switch;
