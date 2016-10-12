var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_hey=dc6zaT0xFJmzC";
var query = "&q=ryan+gosling";

function setup() {
    noCanvas();
    var url = api + apiKey + query;
    loadJSON(url, gotData);
}

fuction gotData(giphy){
    for (var i = 0; i < giphy.data.length; i++){
    createImg(giphy.data[i].images.original.url);
    }
}