function getRemainingTime(et) {
    var dt = Date.parse(et) - Date.parse(new Date());
    var seconds = Math.floor((dt / 1000) % 60);
    var minutes = Math.floor((dt / 1000 / 60) % 60);
    var hours = Math.floor((dt / (1000 * 60 * 60)) % 24);
    var days = Math.floor(dt / (1000 * 60 * 60 * 24));
    return { days, hours, minutes, seconds };
}
function initRemainingTime(id, endTime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
    function updateRemainingTime() {
        var t = getRemainingTime(endTime);
        daysSpan.innerHTML = ('0' + t.days).slice(-2);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.days <= 0 && t.hours <= 0 && t.minutes <= 0 && t.seconds <= 0) { clearInterval(timeInterval); }
    }
    updateRemainingTime();
    var timeInterval = setInterval(updateRemainingTime, 1000);
}



    const specificDate = new Date(2025, 8, 3, 9, 0, 0, 0);
    console.log(new Date(Date.parse(specificDate)));
    console.log("new datae");

var timeForBigDay = new Date(2025, 7, 3, 9, 0, 0, 0);
console.log(timeForBigDay);
initRemainingTime('reminder-clock', timeForBigDay);