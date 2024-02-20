// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         console.log('Carregamento do Dashboard...');

//         const response = await axios.get('http://localhost:3000/produtos');

//         // Verifique se a resposta tem a propriedade 'data' e se 'data' é um array
//         if (response && response.data && Array.isArray(response.data)) {
//             const listarProdutos = document.getElementById('listarProdutos');
//             listarProdutos.innerHTML = '';

//             response.data.forEach((produto) => {
//                 console.log('Produto:', produto);

//                 const listItem = document.createElement('li');

//                 const imagem = document.createElement('img');
//                  //imagem.src = `./src/img/${produto.imagem_path}`;
//                 imagem.src = '/img/' + produto.imagem_path;
               
//                 imagem.onerror = () => {
//                     console.error('Erro ao carregar imagem para:', produto.nome);
//                     // Defina uma imagem padrão ou lógica de fallback aqui, se necessário
//                 };
                
//                 const link = document.createElement('a');
//                 link.href = produto.link_afiliado;
//                 link.textContent = produto.nome;

//                 link.target = "_blank";
//                 listItem.appendChild(imagem);
//                 listItem.appendChild(link);

//                 listarProdutos.appendChild(listItem);
//             });
//         } else {
//             console.error('Resposta da requisição inesperada:', response);
//         }
//     } catch (error) {
//         console.error('Erro ao obter a lista de produtos:', error.response?.data?.mensagem || error.message);
//     }
// });

// //rodar o front (live-server)


document.addEventListener('DOMContentLoaded', async () => {
    try {
        console.log('Carregamento do Dashboard...');

        const response = await axios.get('http://localhost:3000/produtos');

        // Verifique se a resposta tem a propriedade 'data' e se 'data' é um array
        if (response && response.data && Array.isArray(response.data)) {
            const listarProdutos = document.getElementById('listarProdutos');
            listarProdutos.innerHTML = '';

            response.data.forEach((produto) => {
                console.log('Produto:', produto);

                const listItem = document.createElement('li');

                const imagem = document.createElement('img');
                // Certifique-se de que a rota para as imagens esteja correta
                imagem.src = '/public/' + produto.imagem_path;
                 imagem.alt = produto.nome;
               
                imagem.onerror = () => {
                    console.error('Erro ao carregar imagem para:', produto.nome);
                    // Defina uma imagem padrão ou lógica de fallback aqui, se necessário
                };
                
                
                const link = document.createElement('a');
                link.href = produto.link_afiliado;
                link.textContent = produto.nome;

                link.target = "_blank";
                listItem.appendChild(imagem);
                listItem.appendChild(link);

                listarProdutos.appendChild(listItem);
            });
        } else {
            console.error('Resposta da requisição inesperada:', response);
        }
    } catch (error) {
        console.error('Erro ao obter a lista de produtos:', error.response?.data?.mensagem || error.message);
    }
});




// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         console.log('Carregamento do Dashboard...');

//         const response = await axios.get('http://localhost:3000/produtos');

//         // Verifique se a resposta tem a propriedade 'data' e se 'data' é um array
//         if (response && response.data && Array.isArray(response.data)) {
//             const listarProdutos = document.getElementById('listarProdutos');
//             listarProdutos.innerHTML = '';

//             response.data.forEach(async (produto) => {
//                 console.log('Produto:', produto);

//                 const listItem = document.createElement('li');

//                 const imagem = document.createElement('img');
//                 // Certifique-se de que a rota para as imagens esteja correta
//                 imagem.src = '/public/' + produto.imagem_path;

//                 imagem.onerror = () => {
//                     console.error('Erro ao carregar imagem para:', produto.nome);
//                     // Defina uma imagem padrão ou lógica de fallback aqui, se necessário
//                 };

//                 const link = document.createElement('a');
//                 link.href = produto.link_afiliado;
//                 link.textContent = produto.nome;

//                 link.target = "_blank";
//                 listItem.appendChild(imagem);
//                 listItem.appendChild(link);

//                 listarProdutos.appendChild(listItem);
//             });

//             // Obtém as informações do usuário logado e atualiza o cabeçalho
//             const usuario = await obterUsuarioLogado();
//             if (usuario && usuario.nome) {
//                 const welcomeMessage = document.getElementById('welcomeMessage');
//                 welcomeMessage.textContent = `Seja bem-vindo ao ShopLinkado ${usuario.nome}`;
//             }
//         } else {
//             console.error('Resposta da requisição inesperada:', response);
//         }
//     } catch (error) {
//         console.error('Erro ao obter a lista de produtos:', error.response?.data?.mensagem || error.message);
//     }
// });

// async function obterUsuarioLogado() {
//     try {
//         // Fazer uma requisição para obter informações do usuário logado
//         const response = await axios.get('localhost:3000/login');

//         if (response && response.data) {
//             return response.data; // Retorna os dados do usuário
//         } else {
//             console.error('Resposta da requisição de usuário logado inesperada:', response);
//             return null;
//         }
//     } catch (error) {
//         console.error('Erro ao obter informações do usuário logado:', error.response?.data?.mensagem || error.message);
//         return null;
//     }
// }
