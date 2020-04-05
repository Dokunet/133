
//Diese Funktion kümmert sich um die verschiedenen Events
$(function () {
	//Event welches auf das selektieren eine Berufs wartet. Da bereits nach jedem refresh die Berufe geholt werden, ist ein Api Call hier unnötig
	$('#job_selector').change(function () { 
		$("#class_selector").empty();
		$("#class_selector").append('<option value="">...</option>');
		//Der Ausgewählt Beruf wird in den Localstorage geschrieben
		localStorage.setItem('job', $(this).val());
		//mit dem ausgewählten Beruf wird ein Api Call ausgeführt welcher alle Klassen des jeweiligen Berufs holt
		apiCall('http://sandbox.gibm.ch/klassen.php?beruf_id=' + $(this).val(), '#class_selector'); });
	//Event welches auf das Selektieren einer Klasse wartet
	$('#class_selector').change(function () {
		//Die Klasse wird in den Localstorage geschrieben und ein API Call wird ausgeführt welcher die Lektionen der Klasse holt und einen Stundenplan zusammen baut
		localStorage.setItem("class", $(this).val());
		apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + $(this).val(), null);
	});
	// Event welches auf das Verändern des Datum wartet
	$('#last_week').click(function () {
		//das Aktuelle Datum wird aus dem HTML File ausgelesen
		let last_week = parseInt(localStorage.getItem('current_week'));
		let last_year = parseInt(localStorage.getItem('current_year'));
		//Logik welche es erlaubt, das Jahr zu wechseln
		if (last_week === 1) {
			last_year -= 1;
			last_week = 52;
			localStorage.setItem('current_year', last_year);
		} else {
			// DAs Datum wird auf letzte Woche verschoben
			last_week -= 1;
		}
		// Das Datum wird gesetzt und in den Localstorage geschrieben
		localStorage.setItem('current_week', last_week);
		//Ein APi Call mit dem neuen Datum wird ausgelöst
		apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + localStorage.getItem("class") + "&woche=" + last_week
			+ $('#regex').text() + last_year, null);
		get_date();
	});
	// Event welches auf das Verändern des Datum wartet
	$('#next_week').click(function () {
		let next_week = parseInt(localStorage.getItem('current_week'));
		let next_year = parseInt(localStorage.getItem('current_year'));
		//Logik welche es erlaubt, das Jahr zu wechseln
		if (next_week === 52) {
			next_year += 1;
			next_week = 1;
			localStorage.setItem('current_year', next_year);
		} else {
			// Das Datum wird auf nächste Woche verschoben
			next_week += 1;
		}
		// Das Datum wird gesetzt und in den Localstorage geschrieben
		localStorage.setItem('current_week', next_week);
		//Ein APi Call mit dem neuen Datum wird ausgelöst
		apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + localStorage.getItem("class") + "&woche=" + next_week
			+ $('#regex').text() + next_year, null);
		get_date();
	});
});




