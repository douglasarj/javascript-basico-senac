document.getElementById('cadastroForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  
  // ERRO: Está tentando pegar um campo telefone que ainda não existe
  const telefone = document.getElementById('telefone').value;

  const lista = document.getElementById('listaUsuarios');
  const item = document.createElement('li');
  item.textContent = `Nome: ${nome} | Email: ${email} | Telefone: ${telefone}`;
  lista.appendChild(item);

  // Limpar formulário
  document.getElementById('cadastroForm').reset();
});
