SC.initialize({
  client_id: '5674633ed2c579ff191eaa6e9f9de6b5'
});

function getSoundCloud(searchTerm, callback) {

  var query = {
    q: searchTerm, license: 'cc-by-sa'
  }

  // find all sounds of buskers licensed under 'creative commons share alike'
  SC.get('/tracks', query).then( function(tracks) {
    callback(tracks[0])
  });
}

getSoundCloud("drake", function (singleTrack) {

  console.log(singleTrack)
})

//module.exports = getSoundCloud
// console.log(tracks[0]);
// function getSoundcloud(req,res) {

  //gets the users input and replaces "q" with the term.





