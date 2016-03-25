// tool for making http requests
var request = require('request')
//tool for accessing .env files
var dotenv = require('dotenv')
dotenv.load()


function getFlickr(searchterm, callback) {
  //build our query using search term
  var query = [
  'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=',
  process.env.FLICKR_APP_KEY,
  '&tags=',
  searchterm,
  '&per_page=1&format=json&nojsoncallback=1'
  ].join('')

  //takes search term (query)
   request.get(query, function(err, response, body) {
    //finds related image on flickr(body)
    var onePhoto = JSON.parse(body).photos.photo[0]
    var img = [
    'https://farm',
    onePhoto.farm,
    '.staticflickr.com/',
    onePhoto.server,
    '/',
    onePhoto.id,
    '_',
    onePhoto.secret,
    '.jpg'
    ].join('')

    callback (null, img)
  })
}

module.exports = getFlickr
