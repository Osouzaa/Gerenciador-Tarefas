const modalConfirm = document.getElementById("modal-confirm");
const X = document.getElementById("time");

const openModal = () => {
  modalConfirm.style.display = "block";
};

const closeModal = () => {
  modalConfirm.style.display = "none";

  limpaCampo()
};

window.addEventListener("click", (event) => {
  if (event.target === modalConfirm) {
    closeModal();
  }
});


const limpaCampo = () => {
  document.getElementById('email').value = ""
  document.getElementById("senha-rec").innerHTML = ""
}
