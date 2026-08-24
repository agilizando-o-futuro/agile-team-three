function verificar() {
    var nome = document.getElementById('nome')
    var idade = document.getElementById('idade')
    var resultado = document.getElementById('resultado')

    if (nome.value.length == 0 || idade.value.length == 0) {
        resultado.innerHTML = 'Preencha todos os campos!'
        return
    }  

    if (!/^\d+$/.test(idade.value)) {
        resultado.innerHTML = 'A idade deve ser um número!'
        return
    }

    if (idade.value >= 18)
        resultado.innerHTML = `${nome.value}, você é maior de idade!`
    else
        resultado.innerHTML = `${nome.value}, você é menor de idade!`

    }
  
