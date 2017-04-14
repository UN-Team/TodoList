// function yangzhenfang_showTodo(v) {
// 	var item = document.querySelector("#new-item");
// 	item.innerHTML = "";
// 	/*var len = 0;
// 	if (typeof v === 'string') {
// 		len = v.length;
// 	}*/
// 	var s = document.createElement("div");
// 	s.innerHTML = v;
// 	s.style.animation = "jumb 4s ease";
// 	// s.style.opacity = "0";
// 	item.append(s);
// 	/*for (var i = 0; i < len; i++) {
// 		var s = document.createElement("span");
// 		s.innerHTML = v[i];
// 		var j = 0.1 * i;
// 		s.style.animation = "jumb 4s ease " + j + "s" + " 1";
// 		s.style.display = "table-cell";
// 		s.style.opacity = "0";
// 		item.append(s);
// 	}*/
// }
function yangzhenfang_hasClass(obj, cls) {
	return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function yangzhenfang_addClass(obj, cls) {
	if (!yangzhenfang_hasClass(obj, cls)) obj.className += " " + cls;
}

function yangzhenfang_removeClass(obj, cls) {
	if (yangzhenfang_hasClass(obj, cls)) {
		var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
		obj.className = obj.className.replace(reg, ' ');
	}
}
var yangzhenfang_times;

function yangzhenfang_insertContent(v) {
	var con = document.querySelectorAll(".todo-content");
	var t = yangzhenfang_times % 4;
	if (t == 1) {
		con[0].innerHTML = v;
		yangzhenfang_removeClass(con[0], "move1");
		yangzhenfang_addClass(con[0], "move2");

		con[1].innerHTML = "";
		yangzhenfang_removeClass(con[1], "move4");
		yangzhenfang_addClass(con[1], "move1");

		yangzhenfang_removeClass(con[2], "move3");
		yangzhenfang_addClass(con[2], "move4");


		yangzhenfang_removeClass(con[3], "move2");
		yangzhenfang_addClass(con[3], "move3");
	} else if (t == 2) {
		yangzhenfang_removeClass(con[0], "move2");
		yangzhenfang_addClass(con[0], "move3");

		con[1].innerHTML = v;
		yangzhenfang_removeClass(con[1], "move1");
		yangzhenfang_addClass(con[1], "move2");

		con[2].innerHTML = "";
		yangzhenfang_removeClass(con[2], "move4");
		yangzhenfang_addClass(con[2], "move1");


		yangzhenfang_removeClass(con[3], "move3");
		yangzhenfang_addClass(con[3], "move4");
	} else if (t == 3) {
		yangzhenfang_removeClass(con[0], "move3");
		yangzhenfang_addClass(con[0], "move4");

		yangzhenfang_removeClass(con[1], "move2");
		yangzhenfang_addClass(con[1], "move3");

		con[2].innerHTML = v;
		yangzhenfang_removeClass(con[2], "move1");
		yangzhenfang_addClass(con[2], "move2");

		con[3].innerHTML = "";
		yangzhenfang_removeClass(con[3], "move4");
		yangzhenfang_addClass(con[3], "move1");
	} else if (t == 0) {
		con[0].innerHTML = "";
		yangzhenfang_removeClass(con[0], "move4");
		yangzhenfang_addClass(con[0], "move1");

		yangzhenfang_removeClass(con[1], "move3");
		yangzhenfang_addClass(con[1], "move4");

		yangzhenfang_removeClass(con[2], "move2");
		yangzhenfang_addClass(con[2], "move3");

		con[3].innerHTML = v;
		yangzhenfang_removeClass(con[3], "move1");
		yangzhenfang_addClass(con[3], "move2");

	}
}
var temp = [];

function yangzhenfang_input_init(inputId, containerId) {
	var input = document.querySelector("#" + inputId);
	var container = document.querySelector("#" + containerId);
	// var list = document.querySelectorAll(".todo-content");
	var li;
	for (var i = 0; i < 4; i++) {
		li = document.createElement("div");
		yangzhenfang_addClass(li, "todo-content");
		yangzhenfang_addClass(li, "move1");
		container.append(li);
		// yangzhenfang_addClass(list[i], "move1");
	}
	yangzhenfang_times = 0;
	input.addEventListener("keypress", function(evt) {
		if (evt.keyCode == 13 && input.value != "") {
			var value = input.value;
			yangzhenfang_times++;
			var obj = {
				todoContent: value,
				todoDate: new Date().toLocaleString()
			};
			temp.push(obj);
			input.value = "";
			var str = value;
			if (str.length > 6) {
				str = str.slice(0, 6);
				str += "...";
				value = str;
			}
			yangzhenfang_insertContent(value);
		}
	}, true);

}