const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const data = document.getElementById('calendario')

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let day = dateToday.getDate();
    let week = dateToday.getDay();
    let month = dateToday.getMonth();
    let year = dateToday.getFullYear();

    switch (week) {

        case 0:
            week = 'Domingo'
            break

        case 1:
            week = 'Segunda-Feira'
            break

        case 2:
            week = 'Terça-Feira'
            break

        case 3:
            week = 'Quarta-Feira'
            break

        case 4:
            week = 'Qunta-Feira'
            break

        case 5:
            week = 'Sexta-Feira'
            break

        case 6:
            week = 'Sábado'
            break
    }

    switch (month) {
        case 0:
            month = 'Janeiro'
            break

        case 1:
            month = 'Fevereiro'
            break

        case 2:
            month = 'Março'
            break

        case 3:
            month = 'Abril'
            break

        case 4:
            month = 'Maio'
            break

        case 5:
            month = 'Junho'
            break

        case 6:
            month = 'Julho'
            break

        case 7:
            month = 'Agosto'
            break

        case 8:
            month = 'Setembro'
            break

        case 9:
            month = 'Outubro'
            break

        case 10:
            month = 'Novembro'
            break

        case 11:
            month = 'Dezembro'
            break
    }


    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (sec < 10) sec = '0' + sec;



    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    data.innerHTML = `${week}, ${day} de ${month} de ${year}`
})