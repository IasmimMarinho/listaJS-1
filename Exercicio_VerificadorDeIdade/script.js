function verificar() {
    var data = new Date;
    var ano = data.getFullYear() //ano com os 4 dígitos
    var formAno = document.getElementById('txtano') //pega ano dígitado
    var res = document.querySelector('div#res')

    if(formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO!] Verifique os dados e tente novamente.')
    } else{
        var formSex = document.getElementsByName('radsex')
        var idade = ano - Number(formAno.value)
        var genero = ''
        //ciar imagem dinamica
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(formSex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                //criança

                img.setAttribute('src', 'homemCrianca.png')

            } else if (idade <= 22) {
                //jovem
                img.setAttribute('src', 'homemJovem.png')

            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'homemAdulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homemIdoso.png')
            }
        } else if (formSex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'mulherCrianca.png')
            } else if (idade <= 22) {
                //jovem
                img.setAttribute('src', 'mulherJovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'mulherAdulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulherIdosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // mostra o elemento img
        document.body.style.background = '#f8bc7e' // muda cor de fundo
    }


}