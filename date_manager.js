
function get_current_week() {
    let now = new Date();
    let onejan = new Date(now.getFullYear(), 0, 1);
    week = Math.ceil((((now - onejan) / 86400000) + onejan.getDay() + 1) / 7);
    localStorage.setItem("current_week", week);
    let currentYear = (new Date).getFullYear();
    localStorage.setItem("current_year", currentYear);
    localStorage.setItem("current_week", week);
}

function get_date() {
    if (localStorage.getItem("current_week") == null || localStorage.getItem('current_week')=='') {
        console.log("dingesn is leer");
       get_current_week();
    }else{
        $('#date').empty();
    }
    let resultValue = "<div id='current_week'>" + localStorage.getItem("current_week") + "</div>" + "<div id='regex'>-</div>" + "<div id='current_year'>" + 
    localStorage.getItem("current_year") + "</div>";
    $('#date').append(resultValue)
}
