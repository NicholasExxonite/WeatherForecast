// Access-Control-Allow-Origin: *;
const key = 'C3LmZN5Fnz3b8clzFaVaJNgcCWeQYW1j';
const weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
const cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';



// const getCity = async(city) =>{
//   const url = 'http://dataservice.accuweather.com/locations/v1/cities/search';
//   const query = `?apikey=${key}&q=${city}`;
//
// //fetch returns a promise - we use await to wait for it to be resloved
//   const response = await fetch(url+query);
//   const data = await response.json();
//   // we return index 0, because first result is the most accurate
//   return data[0];
// }
//
//
// const getForecast = async(id) =>{
//   // const url = 'http://dataservice.accuweather.com/currentconditions/v1/';
//   const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/{locationKey}';
//   const query = `${id}?apikey = ${key}`
//
// //fetch returns a promise - we use await to wait for it to be resloved
//   const response = await fetch(url+query,
//   {
//     mode: 'no-cors'
//   });
//   const data = await response.json();
//
//   return data[0];
// }

const getCity = async(city) =>{
  const query= `?apikey=${key}&q=${city}`
  const response = await fetch(cityUrl+query)
  const data= await response.json()
  return data[0]
}

const getForecast = async(id) =>{
  const query= `${id}?apikey=${key}`
  const response = await fetch(weatherUrl +query)
  const data= await response.json()
  return data[0]
}
