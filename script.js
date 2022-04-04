//SELECÃO DO PRATO
let nomeprato, nomebebida, nomesobremesa,valor, valorx, valory, valorz, valor1, valor2, valor3,nome,endereco;
const pedido = document.querySelector(".fundo");

function selecionarPrato(prato) {
//BUSCO A DIV SELECIONADO
    const selecionado = document.querySelector(".selecionado");
    if (selecionado !== null) {
//REMOVE A CLASSE SELECIONADO
        selecionado.classList.remove("selecionado");
    }

//ADICIONO A CLASSE SELECIONADO
    prato.classList.add("selecionado");
    nomeprato = prato.innerHTML;

    const check = document.querySelector(".check");
    if (check !== null) {
        check.classList.toggle("check");
    }

    prato.classList.add("check");

    //VALOR
    valorx = document.querySelector(".selecionado .preco").innerHTML.replace(',','.').replace('R$ ','');
    valor1 = Number.parseFloat(valorx);

    if (nomeprato && nomebebida && nomesobremesa) {
        document.querySelector(".botao-finalizar").classList.add("escondido");
        document.querySelector(".confirmar").classList.remove("escondido");
        
    }
}

//SELECÃO DA BEBIDA
function selecionarBebida(bebida) {

    const selecionadob = document.querySelector(".selecionadob");
    if (selecionadob !== null) {
        selecionadob.classList.remove("selecionadob");
    }

    bebida.classList.add("selecionadob");
    nomebebida = bebida.innerHTML;

    const check = document.querySelector(".checkb");
    if (check !== null) {
        check.classList.toggle("checkb");
    }

    bebida.classList.add("checkb");

    valory = document.querySelector(".selecionadob .preco").innerHTML.replace(',','.').replace('R$ ','');
    valor2 = Number.parseFloat(valory);

    if (nomeprato && nomebebida && nomesobremesa) {
        document.querySelector(".botao-finalizar").classList.add("escondido");
        document.querySelector(".confirmar").classList.remove("escondido");
        
    }
}

//SELECÃO DA SOBREMESA
function selecionarSobremesa(sobremesa) {
    const selecionadoc = document.querySelector(".selecionadoc");
    if (selecionadoc !== null) {
        selecionadoc.classList.remove("selecionadoc");
    }

    sobremesa.classList.add("selecionadoc");
    nomesobremesa = sobremesa.innerHTML;

    const check = document.querySelector(".checkc");
    if (check !== null) {
        check.classList.toggle("checkc");
    }

    sobremesa.classList.add("checkc");

    valorz = document.querySelector(".selecionadoc .preco").innerHTML.replace(",",".").replace("R$ ","");
    valor3 = Number.parseFloat(valorz);

    if (nomeprato && nomebebida && nomesobremesa) {
        document.querySelector(".botao-finalizar").classList.add("escondido");
        document.querySelector(".confirmar").classList.remove("escondido");
    }
}

//Botão Finalizar
function finalizarPedido() {    
    if (nomeprato && nomebebida && nomesobremesa) {
        document.querySelector(".botao-finalizar").classList.add("escondido");
        document.querySelector(".confirmar").classList.remove("escondido");
        valor = valor1+valor2+valor3;
        nome = "\nNome: " + prompt("Digite seu nome");
        endereco = "\nEndereço: " + prompt("Digite seu endereço");
        pedido.classList.remove("escondido");
    }else {
        alert("Você deve marcar todas as opções");
    }

    document.querySelector(".prato-esc .nome").innerHTML = `${document.querySelector(".selecionado h4").innerHTML}`;
    document.querySelector(".prato-esc .price").innerHTML = `${document.querySelector(".selecionado .preco").innerHTML.replace("R$ ", '')}`;

    document.querySelector(".bebida-esc .nome").innerHTML = `${document.querySelector(".selecionadob h4").innerHTML}`;
    document.querySelector(".bebida-esc .price").innerHTML = `${document.querySelector(".selecionadob .preco").innerHTML.replace("R$ ", '')}`;

    document.querySelector(".sobremesa-esc .nome").innerHTML = `${document.querySelector(".selecionadoc h4").innerHTML}`;
    document.querySelector(".sobremesa-esc .price").innerHTML = `${document.querySelector(".selecionadoc .preco").innerHTML.replace("R$ ", '')}`;
}

function confirmar() {
    let mensagem = "Olá, gostaria de fazer o pedido: \n" + "- Prato: " + document.querySelector(".selecionado h4").innerHTML + 
    "\n- Bebida: " + document.querySelector(".selecionadob h4").innerHTML + 
    "\n- Sobremesa: " + document.querySelector(".selecionadoc h4").innerHTML + 
    "\nTotal: R$ " + valor.toFixed(2).replace(".",",") + "\n" + nome + "\n" + endereco;

    let encode = encodeURIComponent(mensagem);
    window.open("https://wa.me/+5598984060181?text= " + encode);
}

function cancelar() {
    pedido.classList.add("escondido");
}
