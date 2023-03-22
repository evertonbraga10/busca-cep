(() =>{
    //api do ibge para achar os estados//
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(res => res.json())
        .then(estados => {
            estados.forEach(item => {
                estado.innerHTML += `<option value="${item.sigla}">${item.nome}</option>`;
            });
        })
    })()
    
    function buscaCEP()
    {
        if(cep.value.length == 8){
    //api do viacep para logradouro//
            fetch(`https://viacep.com.br/ws/${cep.value}/json`)
            .then(function(response){
                return response.json();
            })
            .then(dados => {
                endereco.value = dados.logradouro;
                bairro.value = dados.bairro;
                cidade.value = dados.localidade;
                estado.value = dados.uf;
            })
        }
    }