//Funktion welche das Datum ermittelt.
function get_current_week() {
    //Das aktuelle Datum wird ermittelt
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    //Die Woche wird ermittelt und in den Localstorage geschrieben
    week = Math.ceil((((now - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    localStorage.setItem("current_week", week);
    //Das Jahr wird ermittelt und in den Localstorage geschrieben
    let currentYear = (new Date).getFullYear();
    localStorage.setItem("current_year", currentYear);
    localStorage.setItem("current_week", week);
}
//Funktion welche das ermitteln des Datums managed
function get_date() {
    //wenn bereits ein Datum im Localstorage steht so wird das Datum nicht ermittelt sondern das bereits vorhandene Datum ausgewählt
    //Wenn kein Datum im Localstorag exestiert, so wird die Methode get_current_week ausgeführt
    if (localStorage.getItem("current_week") == null || localStorage.getItem('current_week')=='') {
       get_current_week();
    }else{
        $('#date').empty();
    }
    //Das Datum wird in ein Html element reingeschrieben und ausgegeben
    let resultValue = "<div id='current_week'>" + localStorage.getItem("current_week") + "</div>" + "<div id='regex'>-</div>" + "<div id='current_year'>" + 
    localStorage.getItem("current_year") + "</div>";
    $('#date').append(resultValue)
}
