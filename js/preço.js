var produto = document.querySelector('.produto')

var tdQuantidade = produto.querySelector('.info-quantidade')
var quantidade = tdQuantidade.textContent
var quantidadeValida = true

var tdPreco = produto.querySelector('.info-preço')
var preco = tdPreco.textContent
var precoValido = true

var tdPeso = produto.querySelector('.info-peso')
var peso = tdPeso.textContent
var pesoValido = true

if (preco <= 0 ) {
    console.log('Preço inválido. Favor verificar os valores.')
    precoValido = false
}

if (quantidade <= 0 ) {
    console.log('Quantidade inválida. Favor verificar os valores.')
    quantidadeValida = false
}

if (peso <= 0 ) {
    console.log('Peso inválido. Favor verificar os valores.')
    pesoValido = false
}

if (precoValido && quantidadeValida) {
var custoQuantidade = preco / quantidade
var precoFinalQuantidade = custoQuantidade.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
var tdCusto = produto.querySelector('.info-custo')
tdCusto.textContent = precoFinalQuantidade
}

if (precoValido && pesoValido) {
    var custoPeso = (preco * 100) / peso
    var precoFinalPeso = custoPeso.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    var tdCusto = produto.querySelector('.info-custo')
    tdCusto.textContent = precoFinalPeso
}