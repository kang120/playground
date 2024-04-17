const Button1 = () => {
    return (
        <button className="btn btn-sm relative z-20 overflow-hidden">
            <div className="relative z-30">Click me</div>
            <div className="absolute top-1/2 left-1/2 w-full h-full z-0 bg-blue-300 origin-top-left animate-spin"></div>
            <div
                style={{ width: "calc(100% - 6px)", height: "calc(100% - 6px)", top: "3px", left: "3px" }}
                className="absolute bg-blue-300 z-10 rounded"
            ></div>
        </button>
    );

    /*
    return (
        <div className="btn btn-sm flex items-center justify-center">
            <button className="button-1 px-6 py-3 bg-blue-300 hover:after:bg-blue-200 z-10 rounded relative overflow-hidden">
                Click me
            </button>
        </div>
    );
    */

    /*

.button-1::after {
    @apply bg-blue-100;
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: calc(100% - 2 * 3px);
    height: calc(100% - 2 * 3px);
    border-radius: inherit;
    z-index: -1;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
    */
};

export default Button1;
