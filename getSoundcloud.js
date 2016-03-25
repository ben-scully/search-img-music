SC.initialize({
  client_id: '5674633ed2c579ff191eaa6e9f9de6b5'
});

function getSoundCloud(searchTerm, callback) {

  var searchTerm = document.getElementById("scTest").val

  var query = {
    q: searchTerm, license: 'cc-by-sa'
  }

  // find all sounds of buskers licensed under 'creative commons share alike'
  SC.get('/tracks', query).then( function(tracks) {
    callback(tracks[0].permalink_url)
  });
}

getSoundCloud("justin timberlake", function () {

})


