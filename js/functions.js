function round(value, numbers) {
	return Number(value.toFixed(numbers));
}

function deg_to_rad(deg) {
	return (deg / 180) * Math.PI;
}

function get_table_value(value) {
	if (value < 0) {
		operation = "-";
	} else {
		operation = "";
	}
	value = Math.abs(round(value, 10));
	if (value == round(Math.sin(Math.PI / 3), 10)) {
		// Для sin(60) и сos(30)
		return operation + "\\frac{\\sqrt{3}}{2}";
	}
	if (value == round(Math.sin(Math.PI / 6), 10)) {
		// Для sin(30) и сos(60)
		return operation + "\\frac{1}{2}";
	}
	if (value == round(Math.sin(Math.PI / 4), 10)) {
		// Для sin(45) и сos(45)
		return operation + "\\frac{\\sqrt{2}}{2}";
	}
	if (value == round(Math.tan(Math.PI / 6), 10)) {
		// Для tg(30) и ctg(60)
		return operation + "\\frac{\\sqrt{3}}{3}";
	}
	if (value == round(Math.tan(Math.PI / 3), 10)) {
		// Для tg(60) и ctg(30)
		return operation + "\\sqrt{3}";
	}
	return null;
}

function update_indicator(indicator, value) {
	//ToDo
	if (value == null) {
		indicator.classList.remove("mq-math-mode");
		indicator.removeAttribute("title");
		indicator.innerText = "Не существует";
		return;
	}
	if (!isNaN(value) && value != Infinity) {
		value = round(value, 10);

		table_value = get_table_value(value);
		if (table_value == null) {
			rounded_value = round(value, DIGITS_AFTER_ROUNDING);
			indicator.innerText = rounded_value;
			if (value != rounded_value) {
				indicator.title = value;
			} else {
				indicator.removeAttribute("title");
			}
			indicator.classList.remove("mq-math-mode");
		} else {
			indicator.innerText = table_value;
			MQ.StaticMath(indicator);
		}
	} else {
		indicator.innerText = "-";
		indicator.removeAttribute("title");
		indicator.classList.remove("mq-math-mode");
	}
}

function update_coordinate_quarter_indicator(indicator, x, y) {
	text = "-";
	if (x > 0 && y > 0) {
		indicator.innerText = "I";
	}
	if (x < 0 && y > 0) {
		indicator.innerText = "II";
	}
	if (x < 0 && y < 0) {
		indicator.innerText = "III";
	}
	if (x > 0 && y < 0) {
		indicator.innerText = "IV";
	}
	if (x == 0 && y != 0) {
		indicator.innerText = "Лежит на оси y";
	}
	if (x != 0 && y == 0) {
		indicator.innerText = "Лежит на оси x";
	}
	if (x == 0 && y == 0) {
		indicator.innerText = "В центре координат";
	}
}
