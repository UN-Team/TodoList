document.addEventListener('mousemove', function (e) {
	var timeline = document.getElementById('timeline-container');
	if (e.clientX < 300) {
		timeline.className = 'timeline-container-show'
	} else {
		timeline.className = 'timeline-container-hide';
	}
});