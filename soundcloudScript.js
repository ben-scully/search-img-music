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

function renderViaSearch(search) {

  getSoundCloud(search, function (url) {

    renderSoundCloudPlayer(url, function (err, htmlEl) {
      document.getElementById('scTest').innerHTML = htmlEl
    })
  })
}
