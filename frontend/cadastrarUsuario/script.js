function cadastrarUsuario() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
  try {
    axios.post('http://localhost:3000/usuarios', {
      nome: nome,
      email: email,
      senha: senha
    })
    .then(function (response) {
      console.log('Usuário cadastrado:', response.data);
      alert('Usuário cadastrado com sucesso!');
       window.location.href = '../index.html';
    })
    .catch(function (error) {
      console.error('Erro ao cadastrar usuário:', error.response.data.mensagem);
      alert('Erro ao cadastrar usuário. Verifique os campos e tente novamente.');
  });
   
  } catch(error) {
      console.error('Erro ao cadastrar usuário:', error.response.data.mensagem);
      alert('Erro ao cadastrar usuário. Verifique os campos e tente novamente.');
    };
}
  async function fazerLogin() {
    const email = document.getElementById('loginEmail').value;
    const senha = document.getElementById('loginSenha').value;

    try {
        const response = await axios.post('http://localhost:3000/login', {
            email: email,
            senha: senha
        });

        const token = response.data.token;
        localStorage.setItem('token', token);

        // Redirecionar para a página do dashboard
        window.location.href = '../dashboard/dashboard.html';
    } catch (error) {
        console.error('Erro ao fazer login:', error.response.data.mensagem);
        alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
    }
}
