'use strict';
const elShowModals =document.querySelectorAll(".show-modal");
const elModal =document.querySelector(".modal");
const elCloseModal = document.querySelector(".close-modal");
const elOverlay = document.querySelector(".overlay");

function openModal(){
    elModal.classList.remove("hidden");
    elOverlay.classList.remove("hidden");
}
function closeModal(){
    elModal.classList.add("hidden");
    elOverlay.classList.add("hidden");
}

elShowModals.forEach(elShowModal => { 
    elShowModal.addEventListener("click",openModal);
});

elCloseModal.addEventListener("click", closeModal);
elOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function(evt){
    if(evt.key==='Escape' && !elModal.classList.contains('hidden')){
        closeModal();
    }
});