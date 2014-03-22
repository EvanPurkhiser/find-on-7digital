var TRACK_SEARCH_URL = 'http://us.7digital.com/search/track?q='

// The title of the track is in a meta element
var track = $('meta[name=title]').attr('content'),
    link  = TRACK_SEARCH_URL + encodeURIComponent(track)

// Setup the link button
var linkElement = $('<a>')
	.attr('href', link)
	.attr('target', '_blank')
	.addClass('ex7digital-small-button')
	.text(track)

$('#flat-share-container:parent').before(linkElement)
