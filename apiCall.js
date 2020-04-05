
//Ausgelagerter API Call 
function apiCall(source, destination) {
    $.getJSON(source, function (result) {
        // wenn ein Ziel ort bestimmt ist soll die Ausgabe in das Select Element reingeschrieben werden
        if (destination != null) {
            $.each(result, function (index, value) {
                $(destination).append('<option value=' + value[Object.keys(value)[0]] + '>' + value[Object.keys(value)[1]] + '</option>');
            });


        } else {
           // wenn kein Ziel ort mitgegeben wurde, soll der Stundeplan ertellt werden.
            build_table(result);
        }
    });
}
