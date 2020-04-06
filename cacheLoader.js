
//Diese Funktion wird bei jedem refreshen der Seite ausgeführt
async function loadCachedData() {
    //Die vorausgewählte KLasse und Job werden aus dem Localstorage geladen und in Variablen gespeichert.
    let job =  localStorage.getItem('job');
    let v_class = localStorage.getItem('class');
    //wenn die Seite neu ohne Cache geladen wird, wird der Klassen Selektor ausgeblendet.
    if(job == null){
        $("#class_selector_div").css('visibility', 'hidden');
    }
    //Ein Api Call mit den ausgelesenen Daten ausgelöst
    await apiCall('http://sandbox.gibm.ch/berufe.php', '#job_selector');
    //wenn der API Call erfolgrecih verlaufen ist, werden die Tabelle sowie die bereits selektierten Werte angeszeigt.
    if (job != null && v_class != null) {
    await apiCall('http://sandbox.gibm.ch/klassen.php?beruf_id=' + job, '#class_selector');

    await apiCall('http://sandbox.gibm.ch/tafel.php?klasse_id=' + v_class, null);
    setTimeout( function(){
   
       $('#job_selector').val(job);
       $('#class_selector').val(v_class);
    }, 500);
}
};