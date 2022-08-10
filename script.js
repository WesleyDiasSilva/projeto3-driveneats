const itensAlmoço = document.querySelectorAll('.itens-comida')
const itensBebida = document.querySelectorAll('.itens-bebida')
const itenssobremesa = document.querySelectorAll('.itens-sobremesa')
const arrayAlmoco = Array.from(itensAlmoço)
const arrayBebida = Array.from(itensBebida)
const arraySobremesa = Array.from(itenssobremesa)
const item = document.querySelectorAll('.item')
let produto = 0
const itens = Array.from(item)
console.log(itens)

itens.forEach(item => {
  if(item.className.includes('active')){
    produto++
  }
})



function selecionadoComida(){
  arrayAlmoco.forEach(item => {
    if(item.className.includes('active')){
      item.classList.remove('active')
    }
  })
  this.classList.add('active')
}

function selecionadoBebida(){
  arrayBebida.forEach(item => {
    if(item.className.includes('active')){
      item.classList.remove('active')
    }
  })
  this.classList.add('active')
}

function selecionadoSobremesa(){
  arraySobremesa.forEach(item => {
    if(item.className.includes('active')){
      item.classList.remove('active')
    }
  })
  this.classList.add('active')
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