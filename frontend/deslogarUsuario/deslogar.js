function deslogarUsuario() {
    // Limpar quaisquer dados de autenticação armazenados
    // Por exemplo, você pode limpar cookies ou remover tokens de acesso do armazenamento local
    // Aqui está um exemplo de como você pode limpar um token armazenado no localStorage
    localStorage.removeItem('token');

    // Redirecionar o usuário para a página de login ou página inicial
    window.location.href = '../index.html'; // Substitua 'pagina_de_login.html' pelo caminho da sua página de login
console.log(deslogarUsuario() );
}
    
