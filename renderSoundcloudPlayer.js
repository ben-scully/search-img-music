function renderSoundCloudPlayer(trackURL, callback) {

  SC.oEmbed( trackURL, { auto_play: true }).then( function(oEmbed) {
    var htmlElement = oEmbed.html
    callback(null, htmlElement)
  })


}


module.exports = renderSoundCloudPlayer
