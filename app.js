var YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3/search";

function getApiData(searchString, callback){
	var query = {
		part: 'snippet',
		key: "AIzaSyA5QeQ8p-HVejb-MHAp6HP2rvEULL-XvtM",
		q: searchString
	}
	$.getJSON(YOUTUBE_BASE_URL, query, callback)
}

function searchByKeyword(data) {
 	var listHTML = data
 		.items
 		.map(pic => 
 			pic
 			.snippet
 			.thumbnails
 			.default
 			.url
 		).map(url =>
 			"<li> <img src='" + url + "'></li>"
 		)
 		
 	//console.log(listHTML);
 	$("ul").html(listHTML);
}

function submitHandler() {
	$("form").submit(function(e){
		e.preventDefault();
		var searchString = $("input[name='js-vidSearch'").val();
		getApiData(searchString, searchByKeyword);
	});	
}



$(submitHandler());

