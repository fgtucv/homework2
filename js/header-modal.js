(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-open-modal2]"),
    closeModalBtn: document.querySelector("[data-close-modal2]"),
    backdrop: document.querySelector("[data-backdrop2]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
    refs.backdrop.classList.toggle("is-hidden2");
}

function logBackdropClick() {
    console.log("Це клік в бекдроп");
}
})()