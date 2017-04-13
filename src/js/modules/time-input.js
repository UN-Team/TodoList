function timeInit(hourId, minuteId) {
	var nowHour = parseInt(new Date().getHours());
	var nowMinute = parseInt(new Date().getMinutes());
	var hourEl = document.getElementById(hourId);
	var minuteEl = document.getElementById(minuteId);
	hourEl.innerHTML = nowHour >= 0 && nowHour <= 9 ? "0" + nowHour : nowHour;
	minuteEl.innerHTML = nowMinute >= 0 && nowMinute <= 9 ? "0" + nowMinute : nowMinute;
	addEvent(hourEl, 'mousewheel', onMouseWheel);
	addEvent(minuteEl, 'mousewheel', onMouseWheel);

	function onMouseWheel(ev) {
		var ev = ev || window.event;
		var flag = ev.wheelDelta;
		if(ev.target === hourEl) {
			if(flag < 0) {
				nowHour -= 1;
			} else if(flag > 0) {
				nowHour += 1
			}
		} else if(ev.target === minuteEl) {
			if(flag < 0) {
				nowMinute -= 1;
			} else if(flag > 0) {
				nowMinute += 1
			}
		}
		if(nowHour > 23) {
			nowHour = 0
		};
		if(nowHour < 0) {
			nowHour = 23
		};
		if(nowMinute > 59) {
			nowMinute = 00
		};
		if(nowMinute < 0) {
			nowMinute = 59
		};
		hourEl.innerHTML = nowHour >= 0 && nowHour <= 9 ? "0" + nowHour : nowHour;
		minuteEl.innerHTML = nowMinute >= 0 && nowMinute <= 9 ? "0" + nowMinute : nowMinute;
		nowHour = parseInt(nowHour);
		nowMinute = parseInt(nowMinute);
		if(ev.preventDefault) {
			ev.preventDefault();
		}
	}

	function addEvent(obj, event, fn) {
		if(obj.attachEvent) {
			obj.attachEvent('on' + event, fn);
		} else {
			obj.addEventListener(event, fn, false);
		}
	}
}