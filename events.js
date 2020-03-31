

$(function () {
	$('#job_selector').change(function () { 
		$("#class_selector").empty();
		$("#class_selector").append('<option value="">...</option>');
		localStorage.setItem('job', $(this).val());
		apiCall('http://sandbox.gibm.ch/klassen.php?beruf_id=' + $(this).val(), '#class_selector', true); });

	$('#class_selector').change(function () {
		localStorage.setItem("class", $(this).val());
		apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + $(this).val(), null, true);
	});

	$('#last_week').click(function () {
		let last_week = parseInt(localStorage.getItem('current_week'));
		let last_year = parseInt(localStorage.getItem('current_year'));
		if (last_week === 1) {
			last_year -= 1;
			last_week = 52;
			localStorage.setItem('current_year', last_year);
		} else {
			last_week -= 1;
		}
		localStorage.setItem('current_week', last_week);
		apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + localStorage.getItem("class") + "&woche=" + last_week
			+ $('#regex').text() + last_year, null, true);
		get_date();
	});
	
	$('#next_week').click(function () {
		let next_week = parseInt(localStorage.getItem('current_week'));
		let next_year = parseInt(localStorage.getItem('current_year'));
		if (next_week === 52) {
			next_year += 1;
			next_week = 1;
			localStorage.setItem('current_year', next_year);
		} else {
			next_week += 1;
		}
		localStorage.setItem('current_week', next_week);
		apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + localStorage.getItem("class") + "&woche=" + next_week
			+ $('#regex').text() + next_year, null, true);
		get_date();
		
	});
});




