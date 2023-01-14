const validaUser = async () => {
  const email = document.getElementById("email").value.trim();
  const msgUser = document.getElementById("senha-rec");

  const apiResponse = await fetch("https://meu-json-server.vercel.app/login");
  const users = await apiResponse.json();

  let endereço = users.filter((user) => {
    return user.email === email;
  });

  if (endereço.length > 0) {
    msgUser.innerHTML = "Usuario: " + endereço[0].login + " <br>" + "" + "Senha: " + endereço[0].senha;
  } else if(email == "") {
    msgUser.innerHTML = "Digite seu e-mail!";
  } else if(endereço.length == 0) {
    msgUser.innerHTML = "Não encontramos o email digitado!";
  }
};
