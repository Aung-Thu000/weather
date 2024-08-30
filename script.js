	
$(document).ready(function () {



	
function weather(){ 
	
	const city = $('.select-city').val();
	
	{appId =  "b70e5267d06abf06cddd435561d118bf",
	mainLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${appId}`;
	
	$.getJSON(mainLink, function(data){
$('.city').text(data.name);
		$('.weather').text(data.weather[0].description);  
		
		$('.wind-speed').text(data.wind.speed + "mhr"); 
		$('.humidity').text(data.main.humidity + "%" );
		$('.temp').text(data.main.temp + "°C" );
		$('.pressure').text(data.main.temp + "Hpa" );
	   
		
	
	

		let url = `  https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
	    $('.icon').attr('src', url);
		console.log(data);
	});
};
};

$('.select-city').change(weather);	





});



	