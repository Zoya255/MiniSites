// ------------------------------- //
//  EASY SPY VERSION 01 - VERDANA  //
//                                 //
//  Author: Cet500                 //
//  Date:   29.11.2020             //
// ------------------------------- //

window.onload = function() {
    include("module_easy-spy/js/external/jquery-3.5.1.min.js");
    include("module_easy-spy/js/external/detect.min.js");
    include("module_easy-spy/js/lib/spy.js");

    setTimeout(() => { start() }, 1000);
}

function start() {
    let spy = new Spy(true, true);

    spy.dump_print();
    spy.dump_log();
    spy.ajax();
}

function include(url) {
    let script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
