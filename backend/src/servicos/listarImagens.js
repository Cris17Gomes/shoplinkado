const fs = require('fs');
const path = require('path');

const listarImagens = async () => {
    const directoryPath = path.join(__dirname, 'public');

    try {
        // Lê os arquivos no diretório 'public'
        const files = fs.readdirSync(directoryPath);

        // Filtra apenas os arquivos com extensão .webp e retorna seus caminhos completos
        const images = await files.filter(file => path.extname(file).toLowerCase() === '.webp')
                            .map(file => path.join(directoryPath, file));

        return images;
    } catch (err) {
        console.error('Erro ao listar imagens:', err);
        return [];
    }
};

module.exports = listarImagens;
