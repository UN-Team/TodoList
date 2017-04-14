timeInit("hour", "minute");
input_init("main-input", "todo-list");
var msg = document.getElementById('message-container');
msg.addEventListener('click', function() {
	var timeline = document.getElementById('timeline-container');
	timeline.className = 'timeline-container-show';
	msg.className = 'message-container-hide';
}, false);
document.addEventListener('mousemove', function(e) {
	var timeline = document.getElementById('timeline-container');
	if(e.clientX > 300) {
		timeline.className = 'timeline-container-hide';
	}
});