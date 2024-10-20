
// https://api.weatherbit.io/v2.0/current?key=${apiKey}&city=${city}&state=${state}&country=${country}&units=I`
// let apiKey = `018b81049be54c6297ebbdf8c94d4016`
// document.querySelector('#tempBtn').addEventListener('click', getMyTemp)
// function getMyTemp(){
// const city = document.querySelector('#city').value 
// const url = `https://api.weatherbit.io/v2.0/current?lat=35.7796&lon=-78.6382&key=API_KEY&include=minutely`
// fetch(url)
//     .then(res => res.json()) // parse response as JSON 
//     .then(data => {
//         console.log(data)
//         console.log()
//         // console.log(data.explanation)
//         // console.log(data.url)
//     });
// }

document.querySelector('#tempBtn').addEventListener('click', getMyTemp)

function getMyTemp() {
const city = document.querySelector('#city').value
const key = apiKey
const country = document.querySelector('#country').value

const url = `https://api.weatherbit.io/v2.0/current?key=${key}&city=${city}&country=${country}&units=I`
fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => {
        // console.log(data)
        // console.log(data.data)
        // console.log(data.count)
        // console.log(data.data[0].temp)
        // console.log(data.data[0].weather.description)
        // const parentItem = document.querySelector('.resultSection')
        // const childItem = document.createElement('h3')
        // parentItem.appendChild(childItem)
        // childItem.textContent

        const weather = data.data[0].weather.description
        const temp = data.data[0].temp

        document.querySelector('#placetoPutTemp').innerText = `Current Weather in ${city} : ${weather}. Current temperature : ${temp} °F`
        // console.log(data.explanation)
        // console.log(data.url)
    }) .catch(err => {
        console.log(`error ${err}`)
    });

    //don't forget about catch for error
}