$(document).ready(function () {

	// Kelly Costner's API key
	var apiKey = "692c0ac9c60c42d3b04ebfdd8cf069ad";
	var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q='guns'";

	var searchTerm = "";
	var numRecords = 0;
	var startYear = 0;
	var endYear = 0;
	var numArticles = 0;

	var articleCounter = 0;

	function NYTData() {
		$.ajax({
			url: queryUrl,
			method: "GET"
		}).then(function (response) {
			console.log(response);
			console.log(response.response.docs);
			searchTerm = $("#searchTerm").text();
			
		});
	}

	NYTData();

});

