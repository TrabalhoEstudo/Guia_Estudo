// Lista de usuários (simula um banco de dados)

const usuarios = [
  {
    id: 1,
    nome: "Gabriel",
    email: "gabriel@gmail.com",
    senha: "1234",
  },
];

// Retorna todos os usuários
export function listarUsuarios() {
  return usuarios;
}

// Procura um usuário pelo e-mail e senha
export function autenticar(email, senha) {
  return usuarios.find(
    (usuario) =>
      usuario.email === email &&
      usuario.senha === senha
  );
}

// Procura um usuário apenas pelo e-mail
export function buscarPorEmail(email) {
  return usuarios.find(
    (usuario) => usuario.email === email
  );
}

// Cadastra um novo usuário
export function criarUsuario(nome, email, senha) {

  // Verifica se o e-mail já existe
  const usuarioExistente = buscarPorEmail(email);

  if (usuarioExistente) {
    return {
      sucesso: false,
      mensagem: "Este e-mail já está cadastrado.",
    };
  }

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email,
    senha,
  };

  usuarios.push(novoUsuario);

  return {
    sucesso: true,
    usuario: novoUsuario,
  };
}