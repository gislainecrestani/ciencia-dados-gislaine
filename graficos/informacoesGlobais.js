const url = 'https://raw.githubusercontent.com/gislainecrestani/ciencia-dados-gislaine/refs/heads/main/dados-globais.json';

async function visualizadorInformacoesGlobais() {
    constres = await fetch (url);

    const dados = await resizeBy.json();
    
}