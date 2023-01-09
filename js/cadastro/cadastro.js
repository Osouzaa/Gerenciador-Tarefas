const form = document.getElementById("form-cadastro");
const modal = document.querySelector(".modal");


const openModal = () => {
  modal.style.display = "block";
  setTimeout(() => {
    voltarPage();
  }, 2000);
};

const closeModal = () => {
  modal.style.display = "none";
};

function voltarPage() {
  setTimeout(() => {
    location.href = "../index.html";
  }, 1000);
}

const salvarLogin = async (login) => {
  await fetch("https://meu-json-server.vercel.app/login", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: login.login,
      email: login.email,
      telefone: login.telefone,
      senha: login.senha,
      senha_Confirmada: login.confirm,
    }),
  });
};

const addLogin = async (login) => {
  await salvarLogin(login);
  document.getElementById("msgError").innerHTML = "Cadastrado com Sucesso!";
  voltarPage();
};

function voltarPage() {
  setTimeout(() => {
    location.href = "../index.html";
  }, 2000);
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const login = form.elements["name"].value.trim();
    const email = form.elements["email"].value.trim();
    const senha = form.elements["senha"].value.trim();
    const confirm = form.elements["confirm-senha"].value.trim();

    addLogin({ login, email, senha, confirm });
    
    openModal();
  });
}
