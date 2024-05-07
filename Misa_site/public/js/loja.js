var produtos = [
    { nome: 'Produto 1', preco: 10.0, quantidade: 5 },
    { nome: 'Produto 2', preco: 20.0, quantidade: 3 },
    // Adicione mais produtos conforme necessário
];

function atualizarProduto(index, nome, preco, quantidade) {
    produtos[index].nome = nome;
    produtos[index].preco = preco;
    produtos[index].quantidade = quantidade;
}

// Restante do seu JavaScript aqui...
