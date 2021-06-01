
'use strict';
const getCityForm = document.querySelector('form');
const degree = document.querySelector('.centegrate span');
const condition = document.querySelector('.condition');
// const icon = document.querySelector('.icon img');
const curTime = document.querySelector('.curTime');
const curCity = document.querySelector('.curCity');
const curMeridiem = document.querySelector('.curMeridiem');
const wDetail = document.querySelector('.weather-detail')
const cityTime = document.querySelector('.time')

// function counter() {
//   let seconds = 0;
//   setInterval(() => {
//     seconds += 1;
//     document.getElementById('app').innerHTML = `<p>You have been here for ${seconds} seconds.</p>`;
//   }, 1000);
// };
//
// counter();

let updateCity = async(city) =>{
  const cityName = await getCity(city);

  console.log(cityName);
  console.log(cityName.Key);

  const forecastDetails = await getForecast(cityName.Key);

  console.log(forecastDetails);
  return{cityName, forecastDetails};
}


getCityForm.addEventListener('submit', e =>{
  e.preventDefault();

  const city = getCityForm.city.value.trim();
  getCityForm.reset();

  console.log(city);
  updateCity(city).then(data => updateUI(data))
    .catch(err => {
      console.log(alert('City name not valid.'))
      console.log("Could not fetch data", err);
    })
})

const updateUI = (data) =>{
  wDetail.classList.remove('d-none')
  cityTime.classList.remove('d-none')

  const cityDetail = data.cityName;
  const forecastDetails = data.forecastDetails;
  console.log(cityDetail);
  console.log(forecastDetails);

  degree.textContent = forecastDetails.Temperature.Metric.Value;
  condition.textContent = forecastDetails.WeatherText;
  const weatherIconNumber = forecastDetails.weatherIcon

  //icon.setAttribute('src', `icons/`)
  const timestamp = forecastDetails.LocalObservationDateTime;
  const now = new Date(timestamp);

  curTime.textContent = now.toLocaleDateString()
  curCity.textContent = cityDetail.EnglishName

  if(forecastDetails.isDayTime){
    curMeridiem.textContent = "Day";
  }else {
    curMeridiem.textContent = "Night";
  }
}