class SpyClick extends Spy{

    get_clicks() {
        let th = this;

        $("body").click(function (e) {
            th.add_click(e.clientX, e.clientY);
        });
    }


    add_click(x, y) {
        let coords = x + " " + y;

        this.log(coords, "info");
        this.print(coords, "debug");

        this.ajax(x, y);
    }


    ajax(x, y) {
        const is_log = this.bool_log
        let url      = window.location.href
        let th       = this;

        $.ajax({
            method   : "POST",
            url      : "module_easy-spy/php/handle-click.php",
            data     : {
                url     : url,
                click_x : x,
                click_y : y
            },
            success  : function (data, textStatus) {
                if (is_log) {
                    console.log(textStatus)
                    th.print(textStatus, "success");
                }
            },
            error    : function (jqXHR, textStatus) {
                if (is_log) {
                    console.error(textStatus)
                    th.print(textStatus, "error");
                }
            },
        });
    }

}
