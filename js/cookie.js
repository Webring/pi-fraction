function set_cookie(name, value, age) {
    var age_line = ""
    if (age) {
        age_line = "; max-age="+age
    }
    document.cookie = name + "=" + (value || "")  + age_line
}

function get_cookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function delete_cookie(name) {   
    document.cookie = name + '=; max-age=0'
}