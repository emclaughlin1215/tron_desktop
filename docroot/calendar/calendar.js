function setToday() {
  var now   = new Date();
  var day   = now.getDate();
  var month = now.getMonth();
  var year  = now.getFullYear();
  displayCalendar(day, month, year);
}

function getHeader(month, year) {
  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return "<tr><td colspan=\"7\" style=\"text-align:center;\">" + monthNames[month] + " " + year + "</td></tr><tr><th>Su</th><th>Mo</th><th>Tu</th><th>We</th><th>Th</th><th>Fr</th><th>Sa</th></tr>";
}

function displayCalendar(day, month, year) {
  month = parseInt(month);
  year = parseInt(year);
  var days = getDaysInMonth(month,year);
  var firstOfMonth = new Date(year, month, 1);
  var startingPos = firstOfMonth.getDay();
  days += startingPos;

  var cal = getHeader(month, year);
  var firstRow = true;

  cal += "<tr>";
  for (i = 0; i < startingPos; i++) {
    cal += "<td>&nbsp;</td>";
  }
  if (cal.length == 0) {
    cal += "<tr>"
  }
  for (i = startingPos; i < days; i++) {
    if (i > 6) {
      firstRow = false;
    }
    var printDay = i-startingPos+1;
    var attrs = "";
    if (printDay == day) {
      attrs = " style=\"color:#000000;background-color:#00FFFF\" ";
    }
    cal += "<td" + attrs + ">" + printDay + "</td>";

    if (firstRow && (i%6 == 0)) {
      cal += "</tr><tr>";
    } else if (!firstRow && (i%7 == 6)) {
      cal += "</tr><tr>";
    }
  }
  for (i=days; i<42; i++)  {
    cal += "<td>&nbsp;</td>";
  }
  cal += "</tr>";

  printCalendar(cal);
}

function printCalendar(calendar) {
  document.getElementById("calendar").innerHTML = calendar;
}

function getDaysInMonth(month,year)  {
  if (isLeapYear(year)) {
    days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  } else {
    days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  }

  return (days[month]);
}

function isLeapYear (Year) {
  if (((Year % 4)==0) && ((Year % 100)!=0) || ((Year % 400)==0)) {
    return true;
  } else {
    return false;
  }
}
