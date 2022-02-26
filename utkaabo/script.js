function open_description(){
    document.getElementById("description").classList.remove("closed")
    document.getElementById("description-open-button").innerText = "▲";
    document.getElementById("description-open-button").setAttribute("onclick","close_description();");
}

function close_description(){
    document.getElementById("description").classList.add("closed")
    document.getElementById("description-open-button").innerText = "▼";
    document.getElementById("description-open-button").setAttribute("onclick","open_description();");
}