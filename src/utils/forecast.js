const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=9e532413aab34a5147c5f77e3923acb7&query=' +
    latitude +
    ',' +
    longitude 
    // +'&units=f'

  request({ url, json: true }, (error, {body} = {}) => {
    if (error) {
      callback('Unable to connect to weather service', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          '. It is currently ' +
          body.current.temperature +
          ' degrees out. It feels like ' +
          body.current.feelslike +
          ' out. the humidity is ' + body.current.humidity + '%.'
      )
    }
  })
}

module.exports = forecast
