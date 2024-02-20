const { query } = require('../bancodedados/conexao');

const cadastrarProduto = async (req, res) => {
    const { nome, descricao, link_afiliado, imagem_path } = req.body;
  
    // Validações básicas
    if (!nome || !descricao || !link_afiliado || !imagem_path) {
      return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
    }
  
    try {
      // Insere o novo produto na tabela 'produtos'
      const queryInsert = 'INSERT INTO produtos (nome, descricao, link_afiliado, imagem_path) VALUES ($1, $2, $3, $4) RETURNING *';
      const values = [nome, descricao, link_afiliado, imagem_path];
  
      const { rows } = await query(queryInsert, values);
  
      return res.status(201).json(rows[0]);
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
  };
  
  module.exports = {cadastrarProduto}


// const { query } = require('../bancodedados/conexao');
// const uploadImagem = require('../servicos/upload');

// const cadastrarProduto = async (req, res) => {
//     try {
//         // Função de upload
//         const imagemPath = await uploadImagem(req, res);

//         // Se o upload falhar, a função uploadImagem já terá enviado a resposta
//         if (!imagemPath) {
//             return;
//         }

//         // Se o upload for bem-sucedido, continue com o cadastro do produto
//         const { nome, descricao, link_afiliado } = req.body;

//         // Validações básicas
//         if (!nome || !descricao || !link_afiliado || !imagemPath) {
//             return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
//         }

//         // Insere o novo produto na tabela 'produtos'
//         const queryInsert = 'INSERT INTO produtos (nome, descricao, link_afiliado, imagem_path) VALUES ($1, $2, $3, $4) RETURNING *';
//         const values = [nome, descricao, link_afiliado, imagemPath];

//         const { rows } = await query(queryInsert, values);

//         return res.status(201).json(rows[0]);
//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).json({ mensagem: "Erro interno do servidor" });
//     }
// };

// module.exports = { cadastrarProduto };
