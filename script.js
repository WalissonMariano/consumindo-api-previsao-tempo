

btn = document.querySelector('#pesquisar');

btn.addEventListener("click", function(){
    let cidade = document.getElementById("cidade").value.toLowerCase();
    let apiKey = '48210c19576d6d517298d87dfeb34c9c';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}&lang=pt-br`;

    fetch(url)
    .then(res=>res.json())
    .then(function(dados){
        let resultado = document.getElementById('resultado')

        if(dados.erro){
            resultado.innerHTML = "Erro, tente novamente."
        }else {
            resultado.innerHTML = `<br><p><div class="nomeCidade" id="nomeCidade"><b>${dados.name}</b></div>` +
            `<div class="temperatura" id="temperatura"><p><b>${parseInt(dados.main.temp)}ºC</b></div>`
           
        }
    })


    console.log(url);
    
})