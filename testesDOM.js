if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', iniciado)
}else{
    iniciado()
}

function iniciado(){
    let novaLinha = document.createElement('div');

    const itemBotao = document.getElementsByClassName("item-botao-compra")
    for(let i = 0; i < 4; i++){
        let item = itemBotao[i].parentElement;
        item.addEventListener("click", comprarItem);
    }
}

function comprarItem(event){
    let item = event.target.parentElement;
    let itemNome = item.getElementsByClassName("item-nome")[0];
    let itemImagem = item.getElementsByClassName("item-imagem")[0];

    let Item = event.target.parentElement;
    let itemValor = Item.getElementsByClassName("item-preço")[0];
    let valor = parseFloat(itemValor.innerText.replace(" GP", ""));
    let seuCredito = document.getElementsByClassName("dinheiro")[0];
    let credito = parseFloat(seuCredito.innerText.replace(" GP", ""));

    if((credito - valor) < 0){
        alert('obrigado e volte sempre!')
        window.location.replace(window.location.pathname + window.location.search + window.location.hash);
        return;
    }
    adicionarItemParaInventario(itemNome, itemImagem);
    total(credito, valor);
    return;
}

function adicionarItemParaInventario(itemNome, itemImagem){
    nome = itemNome.innerText;
    imagem = itemImagem.src;
    let novaLinha = document.createElement('div');
    let inventario = document.getElementsByClassName("inventario")[0];
    novaLinha.classList.add("item-comprado");
    novaLinha.innerHTML = 
    `            
    <div class="item-comprado-titulo">
        <img class="item-comprado-imagem" src=${imagem} alt="">
        <span class="item-comprado-nome">${nome}</span>
    </div>
    `
    inventario.append(novaLinha);
}

function total(credito, valor){
    document.getElementsByClassName("dinheiro")[0].innerText = (credito - valor) + " GP";
}