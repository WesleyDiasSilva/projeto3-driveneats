const itensAlmoço = document.querySelectorAll('.itens-comida')
const itensBebida = document.querySelectorAll('.itens-bebida')
const itenssobremesa = document.querySelectorAll('.itens-sobremesa')
const arrayAlmoco = Array.from(itensAlmoço)
const arrayBebida = Array.from(itensBebida)
const arraySobremesa = Array.from(itenssobremesa)
const botao = document.querySelector('.botao')

const carrinho = []


function selecionadoComida(){
  arrayAlmoco.forEach(item => {
    if(item.className.includes('active')){
      item.classList.remove('active')
    }
  })
  this.classList.add('active')
  carrinho.push('comida')

  if(carrinho.includes('comida') && carrinho.includes('bebida') && carrinho.includes('sobremesa')){
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
  carrinho.push('bebida')

  if(carrinho.includes('comida') && carrinho.includes('bebida') && carrinho.includes('sobremesa')){
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
  carrinho.push('sobremesa')

  if(carrinho.includes('comida') && carrinho.includes('bebida') && carrinho.includes('sobremesa')){
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

console.log(carrinho)