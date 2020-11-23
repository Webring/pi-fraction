var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function degToRad(deg) {
    return deg / 180 * Math.PI;
}

function clear_screen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw_axes() {
    ctx.beginPath();
    ctx.moveTo(250, 500);
    ctx.lineTo(250, 0);
    ctx.stroke();
    ctx.lineTo(245, 5);
    ctx.lineTo(255, 5);
    ctx.lineTo(250, 0);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(0, 250);
    ctx.lineTo(500, 250);
    ctx.stroke();
    ctx.lineTo(495, 245);
    ctx.lineTo(495, 255);
    ctx.lineTo(500, 250);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.font = "18px Arial";
    ctx.fillText("y", 234, 12);
    ctx.fillText("x", 490, 268);
    ctx.fillText("0", 454, 245);


    ctx.moveTo(250, 250);
    ctx.arc(250, 250, 200, 0, Math.PI * 2, true);
    ctx.stroke();
}

function draw_point(x, y) {
    ctx.beginPath();
    ctx.arc(250 + x * 200, 250 + y * (-1) * 200, 5, 0, Math.PI * 2, true);
    ctx.fillStyle = "red";
    ctx.fill()
    ctx.stroke();
}

function update_labels(angle, x, y) {
    if (isNaN(angle)){
        document.getElementById('ang1').innerHTML = "-";
        document.getElementById('ang2').innerHTML = "-";
        document.getElementById('x-cord').innerHTML = "-";
        document.getElementById('y-cord').innerHTML = "-";
    }
    else{
        document.getElementById('x-cord').innerHTML = fractions(x);
        document.getElementById('y-cord').innerHTML = fractions(y);
        update_fraction();
        document.getElementById('ang1').innerHTML = angle;
        if (angle >= 0) {
            document.getElementById('ang2').innerHTML = angle - 360;
        } else {
            document.getElementById('ang2').innerHTML = angle + 360;
        }
    }
}

function Round(value, numbers){return Number(value.toFixed(numbers))}

function fractions(value){
    console.log(Number(value.toFixed(4)));
    c30 = Math.cos(degToRad(30))
    c45 = Math.cos(degToRad(45))
    c60 = Math.cos(degToRad(60))
    if (value > 0){
        if (Round(value, 5) == Round(c60, 5)){return "1/2";}
        if (Round(value, 5) == Round(c45, 5)){return "√2/2";}
        if (Round(value, 5) == Round(c30, 5)){return "√3/2";}
    }
    if (value < 0){
        if (-1*Round(value, 5) == Round(c60, 5)){return "-1/2";}
        if (-1*Round(value, 5) == Round(c45, 5)){return "-√2/2";}
        if (-1*Round(value, 5) == Round(c30, 5)){return "-√3/2";}
    }
    return Number(value.toFixed(4))
}

function main(){
    up = Number(document.getElementById('up').value);
    down = Number(document.getElementById('down').value);

    angle = Number((((180 / down) * up) % 360).toFixed(4));

    p_x = Math.cos(degToRad(angle));
    p_y = Math.sin(degToRad(angle));
    update_labels(angle, p_x, p_y);

    clear_screen();
    draw_axes();

    if (!isNaN(angle)){
        draw_point(p_x, p_y);
    }

}
draw_axes();

function update_fraction(){
    $('.fraction').each(function(key, value) {
        $this = $(this)
        var split = $this.html().split("/")
        if( split.length == 2 ){
            $this.html('<span class="top">'+split[0]+'</span><span class="bottom">'+split[1]+'</span>')
        }
    });}