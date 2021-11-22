$(document).ready(function () {
    $("form").submit(function (event) {
        var formData = {
            "conn_state": $("#conn_state"),
            "duration": $("#duration"),
            "history": $("#history"),
            "id_orig_p": $("#id_orig_p"),
            "id_resp_p": $("#id_resp_p"),
            "missed_bytes": $("#missed_bytes"),
            "orig_bytes": $("#orig_bytes"),
            "orig_ip_bytes": $("#orig_ip_bytes"),
            "orig_pkts": $("#orig_pkts"),
            "resp_bytes": $("#resp_bytes"),
            "resp_ip_bytes": $("#resp_ip_bytes"),
            "resp_pkts": $("#resp_pkts"),
            "service": $("#service"),
        };

        $.ajax({
            type: "GET",
            url: "http://localhost:8080/iotintrusiondetection",
            data: jQuery.param(formData)
        }).done(function (data) {
            console.log(data);
        }).fail(function (data) {
            $("form").html(
                '<div class="alert alert-danger col-sm-3">Could not reach server, please try again later.</div>'
            );
            console.log(data);
        });

        event.preventDefault();
    });
});