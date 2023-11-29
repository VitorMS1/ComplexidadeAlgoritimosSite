const tempoDeAnimacao = 500;

function obterListaDeItens()
{
    return document.querySelector(".listaDeItens");
}

function pegaOsElementosDaLista(lado)
{   
    let lista = obterListaDeItens();
    let quantidadeDeElemntosNaLista = lista.childElementCount;

    for(let i = 0; i < quantidadeDeElemntosNaLista; i++)
    {
        if (!lista.children[i].classList.contains("esconde"))
        {
            lista.children[i].classList.add("esconde");

            if (lado === 'esquerda')
            {
                i === 0 ? lista.children[quantidadeDeElemntosNaLista - 1].classList.remove("esconde") : lista.children[i - 1].classList.remove("esconde");
                lista.children[i].style.animation = "";
                break;
            }
            else (lado === 'direita') 
            {
                i === (quantidadeDeElemntosNaLista - 1) ? lista.children[0].classList.remove("esconde") : lista.children[i + 1].classList.remove("esconde");
                lista.children[i].style.animation = "";
                break;
            }
        }
    }
}

function obterElemento()
{
    return Array.from(obterListaDeItens().children).filter(c => !c.classList.contains("esconde"))[0];
}

function esquerda()
{
    let elemento = obterElemento();
    elemento.style.animation = "moveToRight 1s linear"
    elemento.style.animationDelay = tempoDeAnimacao;
    setTimeout(() => pegaOsElementosDaLista("esquerda"), tempoDeAnimacao);
}

function direita()
{
    let elemento = obterElemento();
    elemento.style.animation = "moveToLeft 1s linear"
    elemento.style.animationDelay = tempoDeAnimacao;
    setTimeout(() => pegaOsElementosDaLista("direita"), tempoDeAnimacao);
}