var request = new XMLHttpRequest();
var output;
var data_json;

request.open('GET', 'https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function(){

	if((request.status==200) && (request.readyState==4)){
		data_json = JSON.parse(request.response);
		console.log(data_json);
		for(var movie in data_json.data){
			var data = data_json.data[movie];
			if(data[10] === "Golden Gate Bridge"){ 
				output = "<p>" + data[8] + ", " + data[9] + ", " + data[12] + "</p>";
				console.log(output);
				document.getElementById('result').innerHTML += output
			}
		}
	}
}

request.send();