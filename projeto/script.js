function toggleMode(){
    const html = document.documentElement; /* The html element */
    const img = document.querySelector('#profile img');

    if(html.classList.contains('light')){
        html.classList.remove('light')
        img.setAttribute('src', './img/img-dark.png')
        img.setAttribute('alt','foto otavio criança')
    }else{
        html.classList.add('light')
        img.setAttribute('src','./img/avatar.png')
        img.setAttribute('alt','foto do otavio no habibs')
    }

}