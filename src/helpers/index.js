export const toggleModal = (type, onClose) => {
    var modal = document.getElementById(type + "-modal");
    var modalContent = document.getElementById(type + "-modal-content");

    modal.classList.toggle("pointer-events-none");
    modal.classList.toggle("opacity-0");
    modal.classList.toggle("opacity-1");
    modalContent.classList.toggle("-translate-y-10");
    document.body.classList.toggle("overflow-hidden");

    if (modal.classList.contains("opacity-0") && onClose != undefined) {
        onClose();
    }
};
