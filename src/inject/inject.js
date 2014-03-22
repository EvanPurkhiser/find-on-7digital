var TRACK_SEARCH_URL = 'http://us.7digital.com/search/track?q='

var details = $('.track-detail-view')

var title   = $('.primary-title h2', details).contents().first().text(),
    mix     = $('.primary-title h2 span', details).text(),
    artists = $('.artists .artists-value', details).first().text()

// Build out the title from the title, mix, and artists
query = artists + ' - ' + title

if (mix !== null)
{
	query += ' (' + mix + ')'
}

console.log(query)
