function apiCall(source, destination) {
    console.log(source);
    $.getJSON(source, function (result) {
        if (destination != null) {
            $("#class_selector").empty();
            $("#class_selector").append('<option value="">...</option>');
            $.each(result, function (index, value) {
                $(destination).append('<option value="' + value[Object.keys(value)[0]] + '">' + value[Object.keys(value)[1]] + '</option>');
            });
        } else {
            build_table(result);
        }
    });
}