

$(function () {
	apiCall('http://sandbox.gibm.ch/berufe.php', '#job_selector');
	$('#job_selector').change(function () { apiCall('http://sandbox.gibm.ch/klassen.php?beruf_id=' + $(this).val(), '#class_selector'); });
	$('#class_selector').change(function () {
		localStorage.setItem("class", $(this).val());
		apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + $(this).val(), null);
	});
	$('#last_week').click(function () {
		let last_week = parseInt(localStorage.getItem('current_week')) - 1;
		localStorage.setItem('current_week', last_week);
		apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + localStorage.getItem("class") + "&woche=" + last_week
			+ $('#regex').text() + $('#current_year').text(), null);
		get_date();
	});
	
	$('#next_week').click(function () {
		let next_week = parseInt(localStorage.getItem('current_week')) + 1;
		localStorage.setItem('current_week', next_week);
		apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + localStorage.getItem("class") + "&woche=" + next_week
			+ $('#regex').text() + $('#current_year').text(), null);
		get_date();
		$('#time_table').slideDown("fast");
	});
});



