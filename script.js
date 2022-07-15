let listFigure = []
let listPainting = []


function createActionItem(img, name, value) {
    let item = {
        imagem: img,
        nome: name,
        valor: value
    }
    listFigure.push(item)
    return listFigure
}
console.log(listFigure)

createActionItem('./assets/img/actions/darthvader.jpg','Darth Vader','R$ 679,90')
createActionItem('./assets/img/actions/animewoman.jpg','Asuka','R$ 169,64')
createActionItem('./assets/img/actions/dragonballpersonagem.jpg','Goku','R$ 549,00')
createActionItem('./assets/img/actions/starwarspersonagem.jpg','Baby Yoda','R$ 399,90')

for(let i = 0; i < 3; i++){
    createActionItem('./assets/img/sem imagem.jpg','Nome do item','Valor do item')
}

function createPaintingItem(img, name, value) {
    let item = {
        imagem: img,
        nome: name,
        valor: value
    }
    listPainting.push(item)
    return listPainting
}
console.log(listPainting)

createPaintingItem('./assets/img/painting/darthvader.jpg','Darth Vader','R$ 599,90')
createPaintingItem('./assets/img/painting/clock.jpg','Relógio Analógico','R$ 299,90')
createPaintingItem('./assets/img/painting/gamepad.jpg','Joystick','R$ 189,99')
createPaintingItem('./assets/img/painting/personagem.jpg','C-3PO','R$ 499,90')

for(let i = 0; i < 3; i++){
    createPaintingItem('./assets/img/sem imagem.jpg','Nome do item','Valor do item');
}

let secaoPainting = document.getElementsByClassName('painting')[0]
let secaoFigures = document.getElementsByClassName('figure')[0]

function listarItem (listaProduto, seletor){
    for (let i = 0; i < listaProduto.length;i++){
        criarItem(listaProduto[i], seletor)
    }
}

function criarItem (objeto, seletor){
    let elementoLista = document.createElement('li')
    let imagem = document.createElement('img')
    let nome = document.createElement('h2')
    let valor = document.createElement('p')
    elementoLista.className = 'produto'
    imagem.className = 'imagem_Produto'
    imagem.src = objeto.imagem
    nome.className = 'name'
    nome.innerText = objeto.nome
    valor.className = 'value'
    valor.innerText = objeto.valor
    elementoLista.appendChild(imagem)
    elementoLista.appendChild(nome)
    elementoLista.appendChild(valor)
    if(seletor.toLowerCase() == 'painting'.toLowerCase()){
        secaoPainting.appendChild(elementoLista)
    }if(seletor.toLowerCase() == 'figure'.toLowerCase()){
        secaoFigures.appendChild(elementoLista)
    }
}

listarItem(listPainting, 'painting')
listarItem(listFigure, 'figure')
