


function build_table(schedule) {
	const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
	let lessons =  "<table class='table'><tr><td><b>Datum</b></td><td><b>Wochentag</b></td><td><b>von</b></td><td><b>Bis</b></td><td><b>Lehrer</b></td><td><b>Fach</b></td><td><b>Raum</b></td></tr>";
	$.each( schedule , function(index, value) {
		lessons +=
		"<tr><td>"+value["tafel_datum"]+"</td><td>"+
		days[value["tafel_wochentag"]-1]+"</td><td>"+ value["tafel_von"] +"</td><td>"+ 
		value["tafel_bis"] +"</td><td>"+ value["tafel_lehrer"] +"</td><td>" +
		value["tafel_longfach"] + "</td><td>"+ value["tafel_raum"] + "</td></tr>";
	});
	lessons +="</table>";

	
	$("#time_table").empty();
	$('#time_table').append(lessons);
	$('.btn-group').css('visibility', 'visible');
	$("#date").empty();
	$("#date").append(get_current_week());
}

