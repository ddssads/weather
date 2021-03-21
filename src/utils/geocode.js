const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZGRzc2FkcyIsImEiOiJja21hNmF3bmwxb256Mm5zM3h5cHhrbXphIn0.b_i68bNJIGvVvqgjriOrqw&limit=1'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to geocode service!', null)
    } else if (!body.features.length) {
      callback('Unable to find location. Try another search!', null)
    } else {
      callback(null, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      })
    }
  })
}

module.exports = geocode