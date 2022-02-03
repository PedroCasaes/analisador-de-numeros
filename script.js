var adicionados = []
function calcular(){
    var numero = document.getElementById('txtnumero')
    var resultado = document.getElementById('resultado')
    var tab = document.getElementById('seltab')

    var num = Number(numero.value)
    var pos = adicionados.indexOf(num)

    document.getElementsByClassName("tabuada")[0].style.visibility = 'visible'
    
    if(num == 0 || num > 100){
        alert('Número inválido ')
    }else if(pos != -1){
          alert('Esse número ja foi digitado')
    }else{
        adicionados.push(num)
        var item = document.createElement('option')
        item.text= `O valor ${num} foi adcionado.`
        tab.appendChild(item)
        
    }
    resultado.innerHTML = ""


        
    

    

    

    
}