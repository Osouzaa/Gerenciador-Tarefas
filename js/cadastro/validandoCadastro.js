const validaSenha = () => {
  const senha = document.getElementById("senha").value.trim();
  const confirmSenha = document.getElementById("confirm-senha").value.trim();

  if (senha !== confirmSenha) {
    document.querySelector("#validacaoSenha").innerText =
      "As senhas devem ser iguais!";
    document.getElementById("btt-cadastrar").disabled = true;
  } else {
    document.querySelector("#validacaoSenha").innerText = "";
    document.getElementById("btt-cadastrar").disabled = false;
  }
};

const validaUser = async () => {
  const login = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msgUser = document.getElementById("user");

  const apiResponse = await fetch("http://localhost:3000/login");
  const users = await apiResponse.json();

  let user = users.filter((user) => {
    return user.login === login;
  });

  let endereço = users.filter((user) => {
    return user.email === email;
  });


  if (user.length > 0) {
    document.querySelector("#validacaoSenha").innerText =
      "Este usario já esta sendo utilizado!";
    document.getElementById("btt-cadastrar").disabled = true;
  } else if (endereço.length > 0) {
    document.querySelector("#validacaoSenha").innerText = "Email já cadastrado!";
    document.getElementById("btt-cadastrar").disabled = true;
  } else {
    document.querySelector("#validacaoSenha").innerText = "";
    document.getElementById("btt-cadastrar").disabled = false;
  }

  msgUser.innerHTML = login;
};
