class UnitCirle{
    constructor(canvas, size=1500){
        this.canvas = canvas;
        this.size = size
        this.resize()
        this.ctx = this.canvas.getContext("2d");
        this.draw_axes()
    }

    resize(canvas_size=this.size){
        this.canvas.width = this.size
        this.canvas.height = this.size
    }

    clear(){
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    draw_axes() { //ToDo прямая линии рушит стрелку
        let size = this.size
        let half_size = Math.ceil(size / 2)
        let arrow_size = Math.ceil(size / 100)
        let circle_radius = Math.ceil(half_size / 5 * 4)
        let line_width = Math.ceil(size * 0.002)
        let font_size = Math.ceil(size * 0.04)


        // Ось ординат
        this.ctx.beginPath()
        this.ctx.moveTo(half_size, size)
        this.ctx.lineWidth = line_width
        this.ctx.lineTo(half_size, 0)
        this.ctx.stroke()
        this.ctx.lineWidth = 1
        this.ctx.lineTo(half_size - arrow_size, arrow_size)
        this.ctx.lineTo(half_size + arrow_size, arrow_size)
        this.ctx.lineTo(half_size, 0)
        this.ctx.fillStyle = "black"
        this.ctx.fill()
        this.ctx.stroke()
    
        // Ось абцис
        this.ctx.beginPath();
        this.ctx.moveTo(0, half_size);
        this.ctx.lineWidth = line_width
        this.ctx.lineTo(size, half_size);
        this.ctx.stroke();
        this.ctx.lineWidth = 1
        this.ctx.lineTo(size - arrow_size, half_size - arrow_size);
        this.ctx.lineTo(size - arrow_size, half_size + arrow_size);
        this.ctx.lineTo(size, half_size);
        this.ctx.fillStyle = "black";
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    
        //Все надписи
        this.ctx.font = font_size + "px Arial";
        let y = this.ctx.measureText("y")
        let x = this.ctx.measureText("x")
        let z = this.ctx.measureText("0")
        this.ctx.fillText("y", Math.ceil(half_size - y.width - arrow_size), font_size);
        this.ctx.fillText("x", size - x.width, half_size + font_size);
        this.ctx.fillText("0", Math.ceil(half_size - z.width * 1.5), half_size + font_size);
    
        //Сама единичная окружность
        this.ctx.moveTo(half_size, half_size);
        this.ctx.lineWidth = line_width
        this.ctx.arc(half_size, half_size, circle_radius, 0, Math.PI * 2, true);
        this.ctx.stroke();
    }

    draw_point_by_coords(x, y, color = "red") {
        let size = this.size
        let half_size = Math.ceil(size / 2)
        let circle_radius = Math.ceil(half_size / 5 * 4)

        this.ctx.beginPath();
        this.ctx.arc(half_size + x * circle_radius, half_size - y * circle_radius, Math.ceil(size * 0.01), 0, Math.PI * 2, true);
        this.ctx.fillStyle = color;
        this.ctx.fill()
        this.ctx.stroke();
    }

    draw_point_by_radian(value, color="red"){
        point_x = Math.cos(value)
        point_y = Math.sin(value)
        this.draw_point_by_coords(point_x, point_y, color)
    }

    draw_point_by_angle(angle, color="red"){
        this.draw_point_by_radian(deg_to_rad(angle), color)
    }

}