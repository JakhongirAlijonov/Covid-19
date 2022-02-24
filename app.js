const countryName = document.getElementById('countName')
const main = document.querySelector('.main-cont')
const loader = document.querySelector('#loader')
if (navigator.onLine) {
    console.log('You are online use our web site !');
} else {
    alert('You are ofline');
}


const api = 'https://covid19.mathdro.id/api/countries/'

$("#form").submit(function(event) {
    event.preventDefault();
    const value = $("#input").val()
    countryName.innerHTML = value
    requestApi(`${api}${value}`)
    main.classList.add('hidden')
})

async function requestApi(url) {
    loader.classList.remove('hidden')
    try {
        const req = await fetch(url)

        if (!req.ok) {

            if (!(req.status == 200)) {
                alert('Davlat nomini tekshiring')
                loader.classList.add('hidden')
                main.classList.remove('hidden')

            }
            throw new Error('Xatolik mavjud')

        }
        const data = await req.json()
        console.log(data);
        getDatas(data)
    } catch (err) {
        console.log(err.message);

    }
}

requestApi(api)
const death = document.getElementById('death')
const heal = document.getElementById('heal')
const confirmed = document.getElementById('confirmed')

function getDatas(data) {
    loader.classList.add('hidden')
    main.classList.remove('hidden')
    confirmed.innerHTML = data.confirmed.value
    death.innerHTML = data.deaths.value
    heal.innerHTML = data.recovered.value
}