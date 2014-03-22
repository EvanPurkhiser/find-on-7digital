var SEVEN_DIGITAL_URLS = {
	'track':   'http://us.7digital.com/search/track?q=',
	'artist':  'http://us.7digital.com/search/artist?q=',
	'release': 'http://us.7digital.com/search/release?q=',
	'other':   'http://us.7digital.com/search?q=',
}

var setupBeatportButton = function()
{
	var context = $('#flat-share-container');

	// Get information on what we're searching
	var title = context.data('title'),
		query = encodeURIComponent(title),
	    type  = context.data('context').toLowerCase(),
	    link  = SEVEN_DIGITAL_URLS[type] + query;

	// Handle unkown context types (Labels.. etc)
	if ( ! (link in SEVEN_DIGITAL_URLS))
	{
		link = SEVEN_DIGITAL_URLS['other'] + query;
	}

	// Setup the link button
	var linkElement = $('<a>')
		.attr('href', link)
		.attr('target', '_blank')
		.attr('title', 'Find this on 7digital')
		.addClass('ex7digital-small-button')
		.text(title)

	context.before(linkElement)
};

document.addEventListener('DOMNodeInserted', function(e)
{
	if(e.relatedNode.id !== 'flat-share-container') return;

	setupBeatportButton();
},
false);
