const DIGITS_AFTER_ROUNDING = 4;

let canvas = document.getElementById("canvas");
let formula = document.getElementById("formula");
let error = document.getElementById("error");

let unit_circle = new UnitCirle(canvas);

formula_cookie = get_cookie("formula");

if (formula_cookie != null) {
	formula.value = formula_cookie;
	update();
}

function update() {
	formula_text = formula.value;

	unit_circle.clear();
	unit_circle.draw_axes();

	for (let n = 0; n < 1000; n++) {
		value = math.evaluate(formula_text, { n: n });
		if (!isNaN(value)) {
			if (n == 0) {
				first_value = value;
			} else {
				if (value % (2 * Math.PI) == first_value && n > 0) {
					break;
				}
			}

			point_x = Math.cos(value);
			point_y = Math.sin(value);

			unit_circle.draw_point_by_coords(point_x, point_y);
		}
	}
	error.style = "display: none;";
	set_cookie("formula", formula_text, 7200);
}

function update_with_error_message() {
	try {
		update();
	} catch {
		error.style = "";
	}
}
