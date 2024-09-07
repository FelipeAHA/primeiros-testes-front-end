let resultadoPesquisa = document.getElementById("resultados-pesquisa");
let botaoPesquisa = document.getElementById("campo-pesquisa")
botaoPesquisa.addEventListener('keypress', function(event)
{
    if (event.key == 'Enter')
    {
        pesquisar();
    }
});


function pesquisar(){


    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    if (!campoPesquisa)
        {
            resultadoPesquisa.innerHTML = "<p>Busca não informada.</p>"
            return
        };

    let resultados = ""
    
    for (let dado of dados)
    {
        if (dado.nome.toUpperCase().includes(campoPesquisa.toUpperCase()) || dado.descricao.toUpperCase().includes(campoPesquisa.toUpperCase()) || dado.tags.toUpperCase().includes(campoPesquisa.toUpperCase()))
        {
            resultados += `<div class="item-resultado">
                    <h2>
                        ${dado.nome}
                    </h2>
                    <h3>
                        ${dado.titulo}
                    </h3>
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                        <h3>
                            Personagens Principais
                        </h3>       
                        <p>
                            ${dado.personagens}
                        </p>
                        <p>
                            ${dado.imdb}
                        </p>
                    </div>`
        }
    }
    
    if (!resultados)
    {
        resultados = "<p>Nenhuma série encontrada com essa pesquisa.</p>"
    }

    resultadoPesquisa.innerHTML = resultados
};


