function finalizar(){
    var resultado = document.getElementById('resultado')
    var total = adicionados.length
    var maior = adicionados[0]
    var menor = adicionados[0]
    var soma = 0
    var media = 0

    for(var c = 0; c < total; c++){
        soma += adicionados[c]
        if(adicionados[c] > maior){
            maior = adicionados[c]
        }else if(adicionados[c] < menor){
            menor = adicionados[c]
        }
    }
    media = soma / total
    
    resultado.innerHTML += `<br>Ao todo temos ${total} números cadastrados <br>`  
    resultado.innerHTML += `<br>O mair valor informado foi: ${maior}<br>`
    resultado.innerHTML += `<br>O menor valor informado foi: ${menor}<br>`
    resultado.innerHTML += `<br>Somando todos os valores, temos: ${soma}<br>`
    resultado.innerHTML += `<br>A média dos valores digitados é: ${media}<br>`
}
    