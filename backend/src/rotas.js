const express = require("express");
const { cadastrarUsuario } = require("./controladores/usuario");
const { login } = require("./controladores/login");
const { listarProdutos } = require("./controladores/listarProdutos");
const { cadastrarProduto } = require("./controladores/cadastrarProduto");
const uploadImagem = require("./servicos/upload");
const listarImagens = require("./servicos/listarImagens");

const rotas = express();

rotas.post("/usuarios", cadastrarUsuario);
rotas.post("/login", login);
rotas.get("/produtos", listarProdutos);
rotas.post("/produtos", cadastrarProduto);
rotas.get("/imagens", listarImagens)

rotas.post("/upload", uploadImagem);
module.exports = rotas;
