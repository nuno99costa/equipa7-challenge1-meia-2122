$(document).ready(function () {
    $("form").submit(function (event) {
        var formData = {
            "conn_state": $("#conn_state").val(),
            "duration": $("#duration").val(),
            "history": $("#history").val(),
            "id_orig_p": $("#id_orig_p").val(),
            "id_resp_p": $("#id_resp_p").val(),
            "missed_bytes": $("#missed_bytes").val(),
            "orig_bytes": $("#orig_bytes").val(),
            "orig_ip_bytes": $("#orig_ip_bytes").val(),
            "orig_pkts": $("#orig_pkts").val(),
            "resp_bytes": $("#resp_bytes").val(),
            "resp_ip_bytes": $("#resp_ip_bytes").val(),
            "resp_pkts": $("#resp_pkts").val(),
            "service": $("#service").val(),
        };

        $.ajax({
            type: "GET",
            url: "http://localhost:8080/iotintrusiondetection",
            data: formData,
            dataType:'json'
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