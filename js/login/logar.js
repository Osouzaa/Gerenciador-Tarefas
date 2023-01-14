const logar = async () => {
  const login = document.getElementById("usuario").value;
  const password = document.getElementById("senha").value;

  const border_Senha = document.getElementById("senha");
  const border_User = document.getElementById("usuario");

  const apiResponse = await fetch("https://meu-json-server.vercel.app/login");
  const users = await apiResponse.json();

  let persons = users.filter((perso) => {
    return perso.login === login;
  });

  let senha = users.filter((perso) => {
    return perso.senha === password;
  });

  if (persons.length == 1 && senha.length > 0) {
    location.href = "pages/tarefas.html";
  } else if (persons.length == 0 && senha.length > 0) {
    document.getElementById("msgError").innerHTML =
      "Usuario não encontrado!";
    border_User.classList.add("has-error");
    border_Senha.classList.add("has-error");
  } else if (persons.length == 1 && senha.length == 0) {
    document.getElementById("msgError").innerHTML =
      "Senha incorreta!";
    border_User.classList.remove("has-error");
    border_Senha.classList.add("has-error");
  } else if (persons.length == 0 && senha.length == 0) {
    document.getElementById("msgError").innerHTML =
      "Usuario não cadastrado!";
    border_User.classList.add("has-error");
    border_Senha.classList.add("has-error");
  }

};

const validandoUser = () => {
  const border_Senha = document.getElementById("senha");
  const border_User = document.getElementById("usuario");

  const login = document.getElementById("usuario").value;
  const password = document.getElementById("senha").value;

  if (login !== "" && password !== "") {
    border_User.classList.remove("has-error");
    border_Senha.classList.remove("has-error");
    document.getElementById("msgError").innerHTML = "";
  } else if (login !== "" && password == "") {
    border_User.classList.remove("has-error");
    border_Senha.classList.add("has-error");
    document.getElementById("msgError").innerHTML = "Digite sua senha! ";
  } else if (login == "" && password !== "") {
    border_User.classList.add("has-error");
    border_Senha.classList.remove("has-error");
  } else if (login == "" && password == "") {
    border_User.classList.add("has-error");
    border_Senha.classList.add("has-error");
    document.getElementById("msgError").innerHTML =
      "Digite seu usuario e senha";
  }
};

const limparCampo = () => {
  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";
  setTimeout(() => {
    document.getElementById("msgError").innerHTML = "";
  }, 2000);
};
