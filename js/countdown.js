function countdown() {
    var year_div = document.getElementById('year');
    var month_div = document.getElementById('month');
    var day_div = document.getElementById('day');
    var hour_div = document.getElementById('hour');
    var minute_div = document.getElementById('minutes');
    var second_div = document.getElementById('second');
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    // console.log(year + '.' + month + '.' + day);
    year_div.textContent = year;
    month_div.textContent = month;
    day_div.textContent = day;
    hour_div.textContent = hour;
    minute_div.textContent = minutes;
    second_div.textContent = seconds;
    // console.log(1);
}
countdown();
setInterval(countdown, 1000);
