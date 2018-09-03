var Main_Js = {
    countdownTypeHhMmSs: function(_totalSecs) {
        var thisHour 	= document.getElementById("hour");
        var thisMin 	= document.getElementById("min");
        var thisSec 	= document.getElementById("sec");

        var seconds = _totalSecs;

        let hour = Math.floor(seconds / 3600);
        let min = Math.floor(((seconds - (hour * 3600))/60));
        let sec = Math.floor(seconds - (hour * 3600) - (min * 60));

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
            document.getElementById("sec_number").innerHTML = 0;
            thisSec.style.strokeDashoffset  = "35";
        }


        function update(id, currentNo) {
            id.style.strokeDashoffset = currentNo;
        }
    }

    ,countdownTypeMmDdYyyy: function(_totalSecs){
        var thisDay     = document.getElementById("day");
        var thisHour 	= document.getElementById("hour");
        var thisMin 	= document.getElementById("min");
        var thisSec 	= document.getElementById("sec");

        var seconds = _totalSecs;

        let day     = Math.floor(seconds / 86400)
        let hour    = Math.floor((seconds - (day * 86400)) / 3600);
        let min     = Math.floor(((seconds - (hour * 3600) - (day * 86400))/60));
        let sec     = Math.floor(seconds - (day * 86400) - (hour * 3600) - (min * 60));

        if (day > 0){
            document.getElementById("day_number").innerHTML = day;
            var currentDay 	= 35 + day;
            update(thisDay, currentDay);
        } else {
            document.getElementById("day_number").innerHTML = 0;
            thisDay.style.strokeDashoffset = "35";
        }

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
            document.getElementById("sec_number").innerHTML = 0;
            thisSec.style.strokeDashoffset  = "35";
        }

        function update(id, currentNo) {
            id.style.strokeDashoffset = currentNo;
        }
    }
};

export default Main_Js;