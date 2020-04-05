
//Funktion welche den Stundenplan effektive generiert.
function build_table(schedule) {
	
	const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
	//Der Stundenplan wird als String vorbereitet und in eine Variabel abgespeichert
	let lessons =  "<table class='table'><tr><td><b>Datum</b></td><td><b>Wochentag</b></td><td><b>von</b></td><td><b>Bis</b></td><td><b>Lehrer</b></td><td><b>Fach</b></td><td><b>Raum</b></td></tr>";
	//Für jede Lektion wird ein Eintrag zu der bereits vorerstellten Tabelle hinzugefügt
	$.each( schedule , function(index, value) {
		lessons +=
		"<tr><td>"+value["tafel_datum"]+"</td><td>"+
		days[value["tafel_wochentag"]-1]+"</td><td>"+ value["tafel_von"] +"</td><td>"+ 
		value["tafel_bis"] +"</td><td>"+ value["tafel_lehrer"] +"</td><td>" +
		value["tafel_longfach"] + "</td><td>"+ value["tafel_raum"] + "</td></tr>";
	});
	lessons +="</table>";
	//Die Tabelle wird gehidet, damit man sie mittels einer Animation einfügen kann
	let new_item = $(lessons).hide();
	$('.table').slideDown("slow");
	$("#time_table").empty();
	$('.table').slideDown("slow");
	// die JQuery Animation
	$('#time_table').append(new_item);
	new_item.show('slow');
	$('.table').slideDown("slow");
	$('.btn-group').css('visibility', 'visible');
	$("#date").empty();
	// Das Datum wird ausgelesen und reingeschrieben.
	get_date();
	
}