var Main_Js = {
    countdownTypeHhMmSs: function(hour, min ,sec) {
        var thisHour 	= document.getElementById("hour");
        var thisMin 	= document.getElementById("min");
        var thisSec 	= document.getElementById("sec");

        setInterval(function() {
            if (hour > 0) {
                document.getElementById("hour_number").innerHTML = hour;
                var currentHour = (hour + 35 * 24 / 365) * 365 / 24;
                update(thisHour, currentHour);
            } else {
                document.getElementById("hour_number").innerHTML = 0;
                thisHour.style.strokeDashoffset = "35";
            }

            if (min > 0) {
                document.getElementById("min_number").innerHTML = min;
                var currentMin 	= Math.floor((min + 35 * 60 / 365) * 365 / 60);
                update(thisMin, currentMin);
            } else {
                document.getElementById("min_number").innerHTML = 0;
                thisMin.style.strokeDashoffset  = "35";
            }

		    if (sec > 0) {
                document.getElementById("sec_number").innerHTML = sec;
		        var currentSec 	= Math.floor((sec + 35 * 60 / 365) * 365 / 60);
                update(thisSec, currentSec);        
            } else {
                document.getElementById("sec_number").innerHTML 	= 0;
                thisSec.style.strokeDashoffset  = "35";
            }

            function update(id, currentNo) {
                id.style.strokeDashoffset = currentNo;
            }
	    }, 1000);
    }
};

export default Main_Js;