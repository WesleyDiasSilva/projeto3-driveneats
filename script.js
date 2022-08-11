const itensAlmoço = document.querySelectorAll('.itens-comida')
const itensBebida = document.querySelectorAll('.itens-bebida')
const itenssobremesa = document.querySelectorAll('.itens-sobremesa')
const arrayAlmoco = Array.from(itensAlmoço)
const arrayBebida = Array.from(itensBebida)
const arraySobremesa = Array.from(itenssobremesa)
const botao = document.querySelector('.botao')
const modal = document.querySelector('.modal-off')
const botaoPedir = document.getElementById('pedir')
const botaoCancelar = document.getElementById('cancelar')

let modalComida = document.getElementById('modalComida');
let modalComidaPreco = document.getElementById('modalComidaPreco');

let modalBebida = document.getElementById('modalBebida');
let modalBebidaPreco = document.getElementById('modalBebidaPreco');

let modalSobremesa = document.getElementById('modalSobremesa');
let modalSobremesaPreco = document.getElementById('modalSobremesaPreco');

let modalTotalValor = document.getElementById('modalTotalValor')


const comida = ''
const bebida = ''
const sobremesa = ''



let carrinhoComida = []
let carrinhoBebida = []
let carrinhoSobremesa = []


function selecionadoComida(){
  arrayAlmoco.forEach(item => {
    if(item.className.includes('active')){
      item.classList.remove('active')
    }
  })
  this.classList.add('active')

  //Até aqui eu só troquei a classe do css para modificar a aparencia do elemento

  var valorComida = this.childNodes[7].innerText
  valorComida = valorComida.replace('R$','')
  valorComida = valorComida.replace(',','.')
  valorComida = Number(valorComida)
  carrinhoComida.push({
    nome:this.childNodes[3].innerText,
    valor:valorComida,
    tipo:'comida'
  })
  if(carrinhoComida.length > 1){
    carrinhoComida.shift()
  }
  console.log(carrinhoComida)

  //Aqui eu to colocando o produto selecionado num array

  if(carrinhoComida[0] !== undefined && carrinhoBebida[0] !== undefined && carrinhoSobremesa[0] !== undefined){
    botao.innerHTML = 'Fechar pedido'
    botao.classList.remove('disable')
    botao.classList.add('botao-ativo')
  }
}

function selecionadoBebida(){
  arrayBebida.forEach(item => {
    if(item.className.includes('active')){
      item.classList.remove('active')
    }
  })
  this.classList.add('active')

  // Até aqui eu só troquei a classe do css para modificar a aparencia do elemento

  
  let valorBebida = this.childNodes[7].innerText
  valorBebida = valorBebida.replace('R$','')
  valorBebida = valorBebida.replace(',','.')
  valorBebida = Number(valorBebida)
  carrinhoBebida.push({
    nome:this.childNodes[3].innerText,
    valor: valorBebida,
    tipo:'bebida'})

    if(carrinhoBebida.length > 1){
      carrinhoBebida.shift()
    }
  console.log(carrinhoBebida)



  if(carrinhoComida[0] !== undefined && carrinhoBebida[0] !== undefined && carrinhoSobremesa[0] !== undefined){
    botao.innerHTML = 'Fechar pedido'
    botao.classList.remove('disable')
    botao.classList.add('botao-ativo')
  }
}

function selecionadoSobremesa(){
  arraySobremesa.forEach(item => {
    if(item.className.includes('active')){
      item.classList.remove('active')
    }
  })
  this.classList.add('active')
  carrinhoSobremesa.push('sobremesa')

  
  let valorSobremesa = this.childNodes[7].innerText
  valorSobremesa = valorSobremesa.replace('R$','')
  valorSobremesa = valorSobremesa.replace(',','.')
  valorSobremesa = Number(valorSobremesa)
  carrinhoSobremesa.push({
    nome:this.childNodes[3].innerText,
    valor:valorSobremesa,
    tipo:'sobremesa'})

    if(carrinhoSobremesa.length > 1){
      carrinhoSobremesa.shift()
    }

  console.log( carrinhoSobremesa)


  if(carrinhoComida[0] !== undefined && carrinhoBebida[0] !== undefined && carrinhoSobremesa[0] !== undefined){
    botao.innerHTML = 'Fechar pedido'
    botao.classList.remove('disable')
    botao.classList.add('botao-ativo')
  }
}

arraySobremesa.forEach(item => {
  item.addEventListener('click', selecionadoSobremesa)
})

arrayAlmoco.forEach(item => {
  item.addEventListener('click', selecionadoComida)
})

arrayBebida.forEach(item => {
  item.addEventListener('click', selecionadoBebida)
})

function confirmacao(){
  modal.classList.remove('modal-off');
  modal.classList.add('modal-container')

  modalComida.innerText = carrinhoComida[0].nome
  modalBebida.innerText = carrinhoBebida[0].nome
  modalSobremesa.innerText = carrinhoSobremesa[0].nome

  modalComidaPreco.innerText = carrinhoComida[0].valor.toFixed(2)
  modalBebidaPreco.innerText = carrinhoBebida[0].valor.toFixed(2)
  modalSobremesaPreco.innerText = carrinhoSobremesa[0].valor.toFixed(2)

  let valorTotal = carrinhoBebida[0].valor + carrinhoComida[0].valor + carrinhoSobremesa[0].valor
  valorTotal = valorTotal.toFixed(2)
  valorTotal = 'R$ ' + valorTotal.replace('.',',')
  modalTotalValor.innerText = valorTotal

  

  let modalComidaPrecoOk = 'R$ ' + modalComidaPreco.innerText.replace('.',',')
  modalComidaPreco.innerText = modalComidaPrecoOk

  let modalBebidaOk = 'R$ ' + modalBebidaPreco.innerText.replace('.',',')
  modalBebidaPreco.innerText = modalBebidaOk

  let modalSobremesaOk = 'R$ ' + modalSobremesaPreco.innerText.replace('.',',')
  modalSobremesaPreco.innerText = modalSobremesaOk

  
}


function whatsApp(){

  const nome = prompt('Qual o seu nome?')
  const endereco = prompt('Qual o seu endereço?')

  

  const valorComida = carrinhoComida[0].valor
  const valorBebida = carrinhoBebida[0].valor
  const valorSobremesa = carrinhoSobremesa[0].valor
  let valorPedido = valorComida + valorBebida + valorSobremesa
  valorPedido = valorPedido.toFixed(2)
  valorPedido = ''+valorPedido.replace('.',',')
  console.log(valorComida)

  const linha1 = 'Olá, gostaria de fazer o pedido:'
  const linha2 = '- Prato: ' + carrinhoComida[0].nome
  const linha3 = '- Bebida: ' + carrinhoBebida[0].nome
  const linha4 = '- Sobremesa: ' + carrinhoSobremesa[0].nome
  const linha5 = 'Total: R$ ' + valorPedido
  const linha6 = 'Nome: ' + nome
  const linha7 = 'Endereço: ' + endereco

  const msg = linha1 + '\n' + '\n' + linha2 + '\n' + linha3 + '\n' + linha4 + '\n' + linha5 + '\n' + '\n'+ linha6 + '\n' + linha7


  const url = encodeURIComponent(msg)
  console.log(url)

  botaoPedir.href = 'https://wa.me/5511959631890?text='+url
}

function fecharModal(){
  modal.classList.remove('modal-container')
  modal.classList.add('modal-off')
}

botaoCancelar.addEventListener('click', fecharModal)
botaoPedir.addEventListener('click', whatsApp)
botao.addEventListener('click', confirmacao)