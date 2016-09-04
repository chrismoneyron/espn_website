function load_date(xml) {
	var xml_doc = xml.responseXML;
	$(".day").html(xml_doc.getElementsByTagName("day")[0].childNodes[0].nodeValue);
	$(".month").html(xml_doc.getElementsByTagName("month")[0].childNodes[0].nodeValue);
	$(".year").html(xml_doc.getElementsByTagName("year")[0].childNodes[0].nodeValue);
}

function change_score(xml) {
	var xml_doc = xml.responseXML;
	var i, table = "";
	games = xml_doc.getElementsByTagName("game");
	for (i = 0; i < games.length; i++) {
		if (games[i].getElementsByTagName("away_score")[0].childNodes[0].nodeValue > games[i].getElementsByTagName("home_score")[0].childNodes[0].nodeValue) {

			table += "<tr><td><table><tr><td><strong>Game: " + (i + 1) + "</strong></td></tr><tr><td>" +
			games[i].getElementsByTagName("away_name")[0].childNodes[0].nodeValue + ": " +
			games[i].getElementsByTagName("away_score")[0].childNodes[0].nodeValue + "</td></tr><tr><td><font color='#b3b3b3'>" +
			games[i].getElementsByTagName("home_name")[0].childNodes[0].nodeValue + ": " + 
			games[i].getElementsByTagName("home_score")[0].childNodes[0].nodeValue + "</font></td></tr></table><td id = 'inning'>" +
			games[i].getElementsByTagName("inning")[0].childNodes[0].nodeValue + "</td></tr>";
		}

		else {

			table += "<tr><td><table><tr><td><strong>Game: " + (i + 1) + "</strong></td></tr><tr><td><font color='#b3b3b3'>" +
			games[i].getElementsByTagName("away_name")[0].childNodes[0].nodeValue + ": " +
			games[i].getElementsByTagName("away_score")[0].childNodes[0].nodeValue + "</font></td></tr><tr><td>" +
			games[i].getElementsByTagName("home_name")[0].childNodes[0].nodeValue + ": " + 
			games[i].getElementsByTagName("home_score")[0].childNodes[0].nodeValue + "</td></tr></table><td id = 'inning'>" +
			games[i].getElementsByTagName("inning")[0].childNodes[0].nodeValue + "</td></tr>";
		}
	}
	
	$("#scores").html(table);
}