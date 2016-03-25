var getFlickr = require('./flickr.js')

document.getElementById("searchBtn").addEventListener("click", function() {
  var searchTerm = document.getElementById("searchTerm").value
  console.log(searchTerm)
  putImageOnPage(searchTerm)
  putSoundCloudOnPage(searchTerm)
})

function putImageOnPage(searchTerm) {
  getFlickr(searchTerm, function(err, imgLink) {
    var image = '<img src=' + imgLink + '>'
    document.getElementById("imgHere").innerHTML = image
  })
}

function putSoundCloudOnPage(searchTerm) {
  getSoundCloud(searchTerm, function (trackURL) {
    renderSoundCloudPlayer(trackURL, function (err, scIframe) {
      document.getElementById('scHere').innerHTML = scIframe
    })
  })
}

SC.initialize({
  client_id: '5674633ed2c579ff191eaa6e9f9de6b5'
});

function getSoundCloud(searchTerm, callback) {
  var query = { q: searchTerm, license: 'cc-by-sa'}

  SC.get('/tracks', query).then( function(tracks) {
    callback(tracks[0].permalink_url)
  });
}


function renderSoundCloudPlayer(trackURL, callback) {

  SC.oEmbed( trackURL, { auto_play: true }).then( function(oEmbed) {
    var htmlElement = oEmbed.html
    callback(null, htmlElement)
  })
}

