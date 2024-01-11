function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simples validação de usuário e senha
    if (username === 'seuUsuario' && password === 'suaSenha') {
      alert('Login bem-sucedido!');
    } else {
      alert('Usuário ou senha incorretos. Tente novamente.');
    }
  }