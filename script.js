var items = []; // array vazia

document.querySelector('input[type=submit]').addEventListener('click', () => { 
    // resgatar o nome e o valor do produto
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=price]');

    // cadastrar o array items 

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    // colocar o nome e o valor dinâmicamente na lista após cadastrar

    let listaProdutos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaProdutos.innerHTML = ''; // antes de ir para o loop iterativo abaixo, essa linha serve para limpar e não colocar duas vezes o mesmo item cadastrado
    items.map(function(val) {
        soma+=parseFloat(val.valor);
        listaProdutos.innerHTML += `<div class="lista-produto-single">
                                        <h3>`+val.nome+`</h3>
                                        <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
                                    </div>`; // adicionar contéudo dentro de listaProdutos
    })

    soma = soma.toFixed(2); // diz que quero só duas cadas decimais
    nomeProduto.value = "";
    precoProduto.value = "";

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$'+soma; // mostrará o total atualizado
});

// limpar elementos

document.querySelector('button[name=limpar]').addEventListener('click', () => {
    items = []; // aqui está indicando que ele volta a ser vazio
    
    document.querySelector('.lista-produtos').innerHTML = '';  // aqui está indicando que ele volta a ser vazio
    document.querySelector('.soma-produto h1').innerHTML = 'R$0'; // aqui está indicando que o valor voltará ao zero
})
