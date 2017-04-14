function hasClass(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
	if (!hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
	if (hasClass(obj, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
}
var times;

function insertContent(d, v) {
	var con = document.querySelectorAll(".todo-content");
	var t = times % 4;
	if (t == 1) {
		console.log(con[0]);
		con[0].innerHTML = d + "  " + v;
		removeClass(con[0], "move1");
		addClass(con[0], "move2");

		con[1].innerHTML = "";
		removeClass(con[1], "move4");
		addClass(con[1], "move1");

		removeClass(con[2], "move3");
		addClass(con[2], "move4");


		removeClass(con[3], "move2");
		addClass(con[3], "move3");
	} else if (t == 2) {
		removeClass(con[0], "move2");
		addClass(con[0], "move3");

		con[1].innerHTML = d + "  " + v;
		removeClass(con[1], "move1");
		addClass(con[1], "move2");

		con[2].innerHTML = "";
		removeClass(con[2], "move4");
		addClass(con[2], "move1");


		removeClass(con[3], "move3");
		addClass(con[3], "move4");
	} else if (t == 3) {
		removeClass(con[0], "move3");
		addClass(con[0], "move4");

		removeClass(con[1], "move2");
		addClass(con[1], "move3");

		con[2].innerHTML = d + "  " + v;
		removeClass(con[2], "move1");
		addClass(con[2], "move2");

		con[3].innerHTML = "";
		removeClass(con[3], "move4");
		addClass(con[3], "move1");
	} else if (t == 0) {
		con[0].innerHTML = "";
		removeClass(con[0], "move4");
		addClass(con[0], "move1");

		removeClass(con[1], "move3");
		addClass(con[1], "move4");

		removeClass(con[2], "move2");
		addClass(con[2], "move3");

		con[3].innerHTML = d + "  " + v;
		removeClass(con[3], "move1");
		addClass(con[3], "move2");

	}
}
var temp = [];

function input_init(inputId, containerId) {
	var input = document.querySelector("#" + inputId);
	var container = document.querySelector("#" + containerId);
	var li;
	for (var i = 0; i < 4; i++) {
		li = document.createElement("div");
		addClass(li, "todo-content");
		addClass(li, "move1");
		container.append(li);
	}
	times = 0;
	input.addEventListener("keypress", function(evt) {
		if (evt.keyCode == 13 && input.value != "") {
			var value = input.value;
			var h = document.querySelector("#hour").innerHTML;
			var m = document.querySelector("#minute").innerHTML;
			var t = h + ":" + m;
			var date = new Date().toLocaleString().slice(0, 9) + "," + t;
			times++;
			var obj = {
				todoContent: value,
				todoDate: date
			};
			temp.push(obj);
			input.value = "";
			var str = value;
			if (str.length > 6) {
				str = str.slice(0, 6);
				str += "...";
				value = str;
			}
			insertContent(t, value);
		}
	}, true);

}