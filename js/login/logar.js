const logar = async () => {
  const login = document.getElementById("usuario").value;
  const password = document.getElementById("senha").value;

  const apiResponse = await fetch("http://localhost:3000/login");
  const users = await apiResponse.json();

  let persons = users.filter((perso) => {
    return perso.login == login;
  });

  let senha = users.filter((perso) => {
    return perso.senha == password;
  });

  if (persons.length == 1 && senha.length == 1) {
    location.href = "pages/tarefas.html";
  } else if (persons.length == 1 && senha.length == 0) {
    document.getElementById("msgError").innerHTML = "Digite sua senha! ";
  } else if (persons.length == 0 && senha.length == 0) {
    document.getElementById("msgError").innerHTML = "Digite seu usuario e senha";
  }


};

const limparCampo = () => {
  document.getElementById("usuario").value = "";
  document.getElementById("senha").value = "";
  setTimeout(() => {
    document.getElementById("msgError").innerHTML = "";
  }, 2000);
};


