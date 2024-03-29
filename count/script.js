function countdown(dateEnd) {
      var timer, days, hours, minutes, seconds;
      dateEnd = new Date(dateEnd);
      dateEnd = dateEnd.getTime();
      if ( isNaN(dateEnd) ) {
        return;
      }
      timer = setInterval(calculate, 1000);
      function calculate() {
        var dateStart = new Date();
        var dateStart = new Date(dateStart.getUTCFullYear(),
                             dateStart.getUTCMonth(),
                             dateStart.getUTCDate(),
                             dateStart.getUTCHours(),
                             dateStart.getUTCMinutes(),
                             dateStart.getUTCSeconds());
        var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

        if ( timeRemaining >= 0 ) {
          days    = parseInt(timeRemaining / 86400);
          timeRemaining   = (timeRemaining % 86400);
          hours   = parseInt(timeRemaining / 3600);
          timeRemaining   = (timeRemaining % 3600);
          minutes = parseInt(timeRemaining / 60);
          timeRemaining   = (timeRemaining % 60);
          seconds = parseInt(timeRemaining);

          $("#c_days").text(parseInt(days, 10));
          $("#c_hours").text(("0" + hours).slice(-2));
          $("#c_mins").text(("0" + minutes).slice(-2));
          $("#c_sec").text(("0" + seconds).slice(-2));
        } else {
          return;
        }
      }
      function display(days, hours, minutes, seconds) {}
    }
    countdown('12/31/2019 6:30:00 pm');