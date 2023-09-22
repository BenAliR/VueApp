import { Modal } from "bootstrap";
const hideModal = (modalEl) => {
    if (!modalEl) {
        return;
    }
    const myModal = Modal.getInstance(modalEl);
    myModal?.hide();
};
const removeModalBackdrop = () => {
    if (document.querySelectorAll(".modal-backdrop.fade.show").length) {
        document.querySelectorAll(".modal-backdrop.fade.show").forEach((item) => {
            item.remove();
        });
    }
};
export { removeModalBackdrop, hideModal };
