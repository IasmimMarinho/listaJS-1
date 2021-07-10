function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manhaimg.png'
        document.body.style.background = '#fdca7a'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tardeimg.png'
        document.body.style.background = '#fb9a3f'
    } else  {
        //BOA NOITE!
        img.src = 'noiteimg.png'
        document.body.style.background = '#5c5854'
    }
}