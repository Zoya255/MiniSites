// -------------------------------- //
//  EASY SPY VERSION 07 - NASTYA    //
//                                  //
//  Author: Cet500                  //
//  Date:   02.02.2021              //
// -------------------------------- //

window.onload = function() {
    console.log("Start EasySpy [ver 07]...")

    include("module_easy-spy/js/external/jquery-3.5.1.min.js");
    include("module_easy-spy/js/external/detect.min.js");
    include("module_easy-spy/js/lib/spy.js");
    include("module_easy-spy/js/lib/spy-data.js");
    include("module_easy-spy/js/lib/spy-click.js");

    setTimeout(() => { start() }, 1500);
}

function start() {
    let spyData  = new SpyData(true, true);

    spyData.dump_print();
    spyData.dump_log();
    spyData.ajax();

    let spyClick = new SpyClick(true, true);

    spyClick.get_clicks();
}

function include(url) {
    let script = document.createElement('script');
    script.src = url;
    script.async = false;
    document.getElementsByTagName('head')[0].appendChild(script);
}
