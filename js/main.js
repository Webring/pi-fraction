const DIGITS_AFTER_ROUNDING = 4;

let canvas = document.getElementById("canvas");
let numerator_fraction = document.getElementById("numerator");
let denominator_fraction = document.getElementById("denominator");
let angle_indicator = document.getElementById("angle_indicator");
let simplified_angle_indicator = document.getElementById("simplified_angle_indicator");
let reverse_simplified_angle_indicator = document.getElementById("reverse_simplified_angle_indicator");
let x_coord_indicator = document.getElementById("x_coord_indicator");
let y_coord_indicator = document.getElementById("y_coord_indicator");
let coordinate_quarter_indicator = document.getElementById("coordinate_quarter_indicator");
let sine_indicator = document.getElementById("sine_indicator");
let cosine_indicator = document.getElementById("cosine_indicator");
let tangent_indicator = document.getElementById("tangent_indicator");
let cotangent_indicator = document.getElementById("cotangent_indicator");

let unit_circle = new UnitCirle(canvas);
let MQ = MathQuill.getInterface(2);

numerator_cookie_value = get_cookie("numerator");
denominator_cookie_value = get_cookie("denominator");

if (!isNaN(numerator_cookie_value) && !isNaN(denominator_cookie_value)) {
	numerator_fraction.value = numerator_cookie_value;
	denominator_fraction.value = denominator_cookie_value;
	update();
}

function update() {
	value = (numerator_fraction.value * Math.PI) / denominator_fraction.value;

	angle = (numerator_fraction.value * 180) / denominator_fraction.value;

	simplified_angle = angle % 360;

	if (simplified_angle > 0) {
		reverse_simplified_angle = simplified_angle - 360;
	} else {
		reverse_simplified_angle = 360 + simplified_angle;
	}

	point_x = Math.cos(value);
	point_y = Math.sin(value);

	update_indicator(angle_indicator, angle);
	update_indicator(simplified_angle_indicator, simplified_angle);
	update_indicator(reverse_simplified_angle_indicator, reverse_simplified_angle);
	update_indicator(x_coord_indicator, point_x);
	update_indicator(y_coord_indicator, point_y);
	update_indicator(sine_indicator, point_y);
	update_indicator(cosine_indicator, point_x);

	point_x = round(point_x, 10);
	point_y = round(point_y, 10);

	if (point_x == 0) {
		update_indicator(tangent_indicator, null);
	} else {
		update_indicator(tangent_indicator, point_y / point_x);
	}

	if (point_y == 0) {
		update_indicator(cotangent_indicator, null);
	} else {
		update_indicator(cotangent_indicator, point_x / point_y);
	}

	update_coordinate_quarter_indicator(coordinate_quarter_indicator, point_x, point_y);

	unit_circle.clear();
	unit_circle.draw_axes();
	unit_circle.draw_point_by_coords(point_x, point_y);

	set_cookie("numerator", numerator_fraction.value, 7200);
	set_cookie("denominator", denominator_fraction.value, 7200);
}
