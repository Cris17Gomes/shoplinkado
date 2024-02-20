
const { query } = require('../bancodedados/conexao');

const listarProdutos = async (req, res) => {
    try {
      // Obtenha a lista de produtos da tabela 'produtos' incluindo a coluna 'imagem_path'
      const querySelect = 'SELECT nome, descricao, link_afiliado, imagem_path FROM produtos';
      const { rows } = await query(querySelect);
  
      // Filtrar produtos com caminhos de imagem válidos
      const produtosComImagens = rows.filter(produto => produto.imagem_path);
  
      return res.status(200).json(produtosComImagens);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
  };
  
  module.exports = {
    listarProdutos,
  };
  