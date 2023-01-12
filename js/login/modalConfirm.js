const modalConfirm = document.getElementById("modal-confirm");
const X = document.getElementById("time");

const openModal = () => {
  modalConfirm.style.display = "block";
  setTimeout (() =>{
  closeModal ()
}, 3000)

  
};

const closeModal = () => {
  modalConfirm.style.display = "none";
};

window.addEventListener("click", (event) => {
  if (event.target === modalConfirm) {
    closeModal();
  }
});


