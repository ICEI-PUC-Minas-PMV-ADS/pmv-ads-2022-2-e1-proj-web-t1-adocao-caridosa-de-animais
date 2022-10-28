function handleOpenCloseModal(classname){
    const modal = document.querySelector(`.background-modal .${classname}`);
    modal.classList.toggle('none');
}