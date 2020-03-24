

$(function () {
	apiCall('http://sandbox.gibm.ch/berufe.php', '#job_selector');
	$('#job_selector').change(function () { apiCall('http://sandbox.gibm.ch/klassen.php?beruf_id=' + $(this).val(), '#class_selector'); });
	$('#class_selector').change(function () { apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + $(this).val(), null); });
});



