function resultFix(id) {
    id_base = "script-result-" + id;

    document.getElementById(id_base).contentWindow.document.body.style.display = "inline-block";
    document.getElementById(id_base).contentWindow.document.body.style.height = "100%";
    height = document.getElementById(id_base).contentWindow.document.body.scrollHeight;
    width  = document.getElementById(id_base).contentWindow.document.body.offsetWidth;

    document.getElementById(id_base).height = height + 20 + "px";
    // document.getElementById(id_base).width  = width + "px";

}