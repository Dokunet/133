async function loadCachedData() {
    let job =  localStorage.getItem('job');
    let v_class = localStorage.getItem('class');
    await apiCall('http://sandbox.gibm.ch/berufe.php', '#job_selector');
    if (job != null && v_class != null) {
    await apiCall('http://sandbox.gibm.ch/klassen.php?beruf_id=' + job, '#class_selector', true);

    await apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + v_class, null, true);
    setTimeout( function(){
   
       $('#job_selector').val(job);
       $('#class_selector').val(v_class);
    }, 500);
}
};