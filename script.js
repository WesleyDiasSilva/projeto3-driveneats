const itensAlmoço = document.querySelectorAll('.itens-comida')
const itensBebida = document.querySelectorAll('.itens-bebida')
const itenssobremesa = document.querySelectorAll('.itens-sobremesa')
const arrayAlmoco = Array.from(itensAlmoço)
const arrayBebida = Array.from(itensBebida)
const arraySobremesa = Array.from(itenssobremesa)
const botao = document.querySelector('.botao')
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

  carrinhoComida.forEach(item => {
    if(item.includes('comida')){
      carrinhoComida = []
    }
  })
  
  carrinhoComida.push(this.childNodes[3].innerText,'comida')
  var valorComida = this.childNodes[7].innerText
  valorComida = valorComida.replace('R$','')
  valorComida = valorComida.replace(',','.')
  valorComida = Number(valorComida)
  carrinhoComida.push(valorComida)
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
  carrinhoBebida.push('bebida')

  carrinhoBebida.forEach(item => {
    if(item.includes('bebida')){
      carrinhoBebida = []
    }
  })
  
  carrinhoBebida.push(this.childNodes[3].innerText,'bebida')
  let valorBebida = this.childNodes[7].innerText
  valorBebida = valorBebida.replace('R$','')
  valorBebida = valorBebida.replace(',','.')
  valorBebida = Number(valorBebida)
  carrinhoBebida.push(valorBebida)
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

  carrinhoSobremesa.forEach(item => {
    if(item.includes('sobremesa')){
      carrinhoSobremesa = []
    }
  })
  
  carrinhoSobremesa.push(this.childNodes[3].innerText, 'sobremesa')
  let valorSobremesa = this.childNodes[7].innerText
  valorSobremesa = valorSobremesa.replace('R$','')
  valorSobremesa = valorSobremesa.replace(',','.')
  valorSobremesa = Number(valorSobremesa)
  carrinhoSobremesa.push(valorSobremesa)
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

const valorComida = carrinhoComida[2]
const valorBebida = carrinhoBebida[2]
const valorSobremesa = carrinhoSobremesa[2]
const valorPedido = valorComida + valorBebida + valorSobremesa

const linha1 = 'Olá, gostaria de fazer o pedido:'
const linha2 = '- Prato: ' + carrinhoComida[0]
const linha3 = '- Bebida:' + carrinhoBebida[0]
const linha4 = '- Sobremesa:' + carrinhoSobremesa[0]
const linha5 = 'Total: R$' + valorPedido

const msg = linha1 + '\n' + linha2 + '\n' + linha3 + '\n' + linha4 + '\n' + linha5

const url = encodeURIComponent(msg)

botao.href = 'https://wa.me/5514996124147?text='+msg