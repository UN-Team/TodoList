function yangzhenfang_showTodo(v) {
	var item = document.querySelector("#new-item");
	item.innerHTML = "";
	/*var len = 0;
	if (typeof v === 'string') {
		len = v.length;
	}*/
	var s = document.createElement("div");
	s.innerHTML = v;
	s.style.animation = "jumb 4s ease";
	// s.style.opacity = "0";
	item.append(s);
	/*for (var i = 0; i < len; i++) {
		var s = document.createElement("span");
		s.innerHTML = v[i];
		var j = 0.1 * i;
		s.style.animation = "jumb 4s ease " + j + "s" + " 1";
		s.style.display = "table-cell";
		s.style.opacity = "0";
		item.append(s);
	}*/
}

function yangzhenfang_init() {
	var input = document.querySelector("#todo-input");
	input.addEventListener("keypress", function (evt) {
		if (evt.keyCode == 13) {
			var value = input.value;
			var obj = {
				todoContent: value,
				todoDate: new Date().toLocaleString()
			};
			console.log(obj);
			localStorage.setItem("todoItem", {
				item: value
			});
			input.value = "";
			yangzhenfang_showTodo(value);
		}
	}, true);

}
window.onload = function () {
	yangzhenfang_init();
}