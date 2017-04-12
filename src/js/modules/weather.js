var city = "深圳";
var weather = '';
function getCity(obj){
	weather = obj.data.forecast[0].type;
}
function getWeather(city){
	return new Promise(function(resolve, reject){

		var url = "http://wthrcdn.etouch.cn/weather_mini?city=" + city + "&callback=getCity";
		var JSONP=document.createElement("script");  
		JSONP.type="text/javascript";  
		JSONP.src=url;

		var asyScript = document.getElementsByTagName("head")[0].appendChild(JSONP);

		asyScript.onload = function(){
			resolve();
		};
	});
}
var p1 = getWeather(city).then(function(){
	console.log(weather);
	show();
});
function show(){
	weatherSvg = new WeatherSvg();
	var weatherArr = {	'多云': 'cloudy',
						'晴': 'sunny', 
						'下雨': 'rainy', 
						'阵雨': 'rainy'};

	document.getElementById("weather").innerHTML=weatherSvg[weatherArr[weather]];
	console.log(weatherSvg[weatherArr[weather]]);
}
function WeatherSvg(){
var sunny = '<svg id="sunday" class="osc"  width="100%" height="100%" viewBox="-120 -130 250 250">' +
				'<style>:root { --sw: 10px;/*等同于设置所有的path line 等stroke-width="10"*/ --a: 30deg; }</style>' +
					'<defs><line id="ray" x1="-2" x2="20"></line></defs>' + 
					'<g id="sun">' + 
						'<g class="osc">' +
							'<circle r="65"></circle>' +
							'<g id="rays1">' +
							'<g transform="rotate(330)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(300)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(270)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(240)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(210)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(180)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(150)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(120)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(90)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(60)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(30)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(0)"><use xlink:href="#ray" x="85"></use></g>' +
						'</g>' +
					'</g>' +
				'</g>' +
			'</svg>';
var rainy = '<svg id="rainy" class="osc"  width="100%" height="100%" viewBox="-100 -80 300 300">' +
				'<style>:root { --sw: 10px;/*等同于设置所有的path line 等stroke-width="10"*/ --a: 30deg; }</style>' +
				'<defs><line id="raindrop" y1="-2" y2="20"></line></defs>' + 
				'<g id="rain">' +
					'<path class="osc" id="cloud" d="M-28 113 a52 52 0 1 1 12-103 a70 70 0 0 1 120-8 a58 58 0 1 1 23 111z"></path>' +
					'<g>' + 
						'<use xlink:href="#raindrop" x="-10" y="140"></use>' +
						'<use xlink:href="#raindrop" x="20" y="140"></use>' +
						'<use xlink:href="#raindrop" x="50" y="140"></use>' +
						'<use xlink:href="#raindrop" x="80" y="140"></use>' +
						'<use xlink:href="#raindrop" x="110" y="140"></use>' +

						'<use xlink:href="#raindrop" x="0" y="170"></use>' +
						'<use xlink:href="#raindrop" x="30" y="170"></use>' +
						'<use xlink:href="#raindrop" x="60" y="170"></use>' +
						'<use xlink:href="#raindrop" x="90" y="170"></use>' +
						'<use xlink:href="#raindrop" x="120" y="170"></use>' +
					'</g>' +
				'</g>' +
			'</svg>'+
			'<span>北京  20°C</span>';
var cloudy = '<svg id="cloudy" class="osc"  width="100%" height="100%" viewBox="-120 -150 320 320">' +
				'<style>:root { --sw: 10px;/*等同于设置所有的path line 等stroke-width="10"*/ --a: 30deg; }</style>' +
				'<defs><line id="ray" x1="-2" x2="20"></line></defs>' + 
				'<path id="cloud" d="M-28 113 a52 52 0 1 1 12-103 a70 70 0 0 1 120-8 a58 58 0 1 1 23 111z"></path>'+
				'<mask id="m">'+
					'<circle r="500"></circle>'+
					'<use xlink:href="#cloud"></use>'+
				'</mask>'+
				'<g id="sun">' + 
					'<g class="osc">' +
					'<circle r="65"></circle>' +
						'<g id="rays1">' +
							'<g transform="rotate(330)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(300)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(270)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(240)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(210)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(180)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(150)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(120)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(90)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(60)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(30)"><use xlink:href="#ray" x="85"></use></g>' +
							'<g transform="rotate(0)"><use xlink:href="#ray" x="85"></use></g>' +
						'</g>' +
					'</g>' +
				'</g>' +
				'<g x="10"><use xlink:href="#cloud"></use></g>' +
			'</svg>';
	return {
		sunny: sunny,
		rainy: rainy,
		cloudy: cloudy
	};
}