function verificar(){
    var data = new Date ()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    var section = document.getElementById('section') // Transforma a id 'section' em objeto
    // var res = document.querySelector('div#res') Outra maneira de declarar a variavel "res" acima
     if (fAno.value.leght == 0 || fAno.value > ano) {
        alert('Verifique os dados e tente novamente!')
     } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number (fAno.value)
         var genero = ''
         var img = document.createElement('img') // Cria dinamicamente um elemento na pag HTML, nesse caso uma tag img 
         img.setAttribute('id', 'foto') // atributos da tag img criada dinamicamente pela varival acima ^^^
         if (fsex[0].checked) {
            genero = 'Homem'
            section.style.background = 'blue' // Muda o atributo background da section com id 'section'
            if (idade >= 0 && idade <=4){
                // Bebê
                img.setAttribute('src', 'homemb.png')
            } else if (idade >4 && idade <=12){
                //Criança
                img.setAttribute('src', 'homemc.png')
            }else if (idade >=13 && idade <=20){
                //Jovem
                img.setAttribute('src', 'homemj.png')
            }else if (idade >=21 && idade <= 59){
                //Adulto
                img.setAttribute('src', 'homema.png')
            }else if (idade >= 60){
                //Idoso
                img.setAttribute('src', 'homemi.png')
            }
         } else if (fsex[1].checked) {
            genero = 'Mulher'
            section.style.background = 'pink' // Muda o atributo background da section com id 'section'
            if (idade >= 0 && idade <=4){
                // Bebê
                img.setAttribute('src', 'mulherb.png')
            } else if (idade >=5 && idade <=12){
                //Criança
                img.setAttribute('src', 'mulherc.png')
            }else if (idade >=13 && idade <=20){
                //Jovem
                img.setAttribute('src', 'mulherj.png')
            }else if (idade >=21 && idade <= 59){
                //Adulto
                img.setAttribute('src', 'mulhera.png')
            }else if (idade >= 60){
                //Idoso
                img.setAttribute('src', 'mulheri.png')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
         res.appendChild(img) // Comando para criar filhos no HTML variavel
     }
}