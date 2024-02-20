
const multer = require('multer');
const fs = require('fs');
const path = require('path');


const uploadImagem = (req, res) => {
    const destinationPath = path.join(__dirname,  'public');

    // Cria o diretório "public" se não existir
    if (!fs.existsSync(destinationPath)) {
        fs.mkdirSync(destinationPath);
    }

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, destinationPath);
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '.webp');
        }
    });

    const upload = multer({ storage }).single('file');

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).send(err);
        } else if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).json({ mensagem: 'Imagem enviada com sucesso' });
    });
};

module.exports = uploadImagem;
