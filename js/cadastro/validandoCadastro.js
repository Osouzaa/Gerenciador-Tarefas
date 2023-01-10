const validandoCadastro = () => {
  const login = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirm-senha").value;
  const msgUser = document.getElementById('user')

  if (login !== "" && email !== "" && senha !== "" && confirmarSenha !== "") {
    document.getElementById("btt-cadastrar").disabled = false;
    return;
  }
  document.getElementById("btt-cadastrar").disabled = true;

  msgUser.innerHTML = login
  
};
