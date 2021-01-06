class SpyData extends Spy{

    data (arr_bool = true) {
        let user           = detect.parse(navigator.userAgent)
        const screenWidth  = window.screen.width
        const screenHeight = window.screen.height
        const screenDepth  = window.screen.pixelDepth

        if (arr_bool) {
            let array = [
                user.browser.family,
                user.browser.name,
                user.browser.version,
                user.device.type,
                user.device.family,
                user.device.name,
                user.device.manufacturer,
                user.os.family,
                user.os.name,
                user.os.version,
                navigator.platform,
                screenWidth,
                screenHeight,
                screenDepth
            ];

            let array_clear = [];

            for (let i = 0; i < array.length; i++) {
                array_clear[i] = this.check(array[i]);
            }

            return array_clear;
        }
        else{
            let array = {
                browser_family      : user.browser.family,
                browser_name        : user.browser.name,
                browser_version     : user.browser.version,
                device_type         : user.device.type,
                device_family       : user.device.family,
                device_name         : user.device.name,
                device_manufacturer : user.device.manufacturer,
                os_family           : user.os.family,
                os_name             : user.os.name,
                os_version          : user.os.version,
                os_platform         : navigator.platform,
                screen_width        : screenWidth,
                screen_height       : screenHeight,
                screen_depth        : screenDepth
            }

            let array_clear = [];

            for(let arr in array) {
                array_clear[arr] = this.check(array[arr])
            }

            return array_clear;
        }
    }


    ajax () {
        let user           = detect.parse(navigator.userAgent)
        const screenWidth  = window.screen.width
        const screenHeight = window.screen.height
        const screenDepth  = window.screen.pixelDepth
        const is_log       = this.bool_log
        let url            = window.location.href
        let th             = this;

        $.ajax({
            method   : "POST",
            url      : "module_easy-spy/php/handle-data.php",
            data     : {
                url                 : url,
                browser_family      : this.check(user.browser.family),
                browser_name        : this.check(user.browser.name),
                browser_version     : this.check(user.browser.version),
                device_type         : this.check(user.device.type),
                device_family       : this.check(user.device.family),
                device_name         : this.check(user.device.name),
                device_manufacturer : this.check(user.device.manufacturer),
                os_family           : this.check(user.os.family),
                os_name             : this.check(user.os.name),
                os_version          : this.check(user.os.version),
                os_platform         : navigator.platform,
                screen_width        : screenWidth,
                screen_height       : screenHeight,
                screen_depth        : screenDepth
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


    dump_log() {
        let data = this.data(true)

        for (let i = 0; i < data.length; i++) {
            this.log(data[i]);
        }
    }


    dump_print () {
        let data = this.data(true)

        for (let i = 0; i < data.length; i++) {
            this.print(data[i], "info");
        }
    }

}