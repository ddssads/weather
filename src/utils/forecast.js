const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=fbf81d59c3eb737570e95efd096fb987&query=' + latitude + ',' + longitude + '&units=m'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', null)
    } else if (body.error) {
      callback('Unable to find loaction', null)
    } else {
      const { temperature, feelslike, weather_descriptions: weather } = body.current
      callback(null, 'weather:' + weather + '\ntemperature:' + temperature + ' degree\nfeelslike:' + feelslike + ' degree')
    }
  })
}

module.exports = forecast
