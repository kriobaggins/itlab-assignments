let calendar = document.getElementById('calendar')

function tableInitial(innerContent) {
  return `
<table>
  <colgroup>
    <col width=100/>
    <col width=100/>
    <col width=100/>
    <col width=100/>
    <col width=100/>
    <col width=100/>
    <col width=100/>
  </colgroup>
  <tr>
    <th>Sun</th>
    <th>Mon</th>
    <th>Tue</th>
    <th>Wed</th>
    <th>Thurs</th>
    <th>Fri</th>
    <th>Sat</th>
  </tr>
  ${innerContent}
</table>
`
}

function isHoliday(month, date) {
  dateCode = `${parseInt(month)+1}-${date}`

  holidayArray = ["1-14", "1-26", "4-2", "4-13", "4-25", "5-14", "5-26", "7-21", "8-15", "8-19", "9-10", "10-2", "10-15", "10-19", "10-19", "11-4", "11-19", "12-25"]

  return (holidayArray.includes(dateCode))
}

function totalDays (month) { return new Date(2021, month+1, 0).getDate(); }

function createCalendarTable(month) {
  let date = new Date(2021, month);
  calendar.innerHTML = tableInitial("");
  let innerTableInitial = "";

  let weekCounter = 0;

  innerTableInitial += "<tr>";
  for(let i=0; i<date.getDay(); i++) {
    innerTableInitial += "<td></td>";
    weekCounter++;
  }

  let current = date.getDate();

  for(let i=date.getDay(); i<7; i++) {
    if (weekCounter % 7 == 0) {
      innerTableInitial += `<td class="weekend">${current++}</td>`;
    } 
    else if (isHoliday(month, current)) {
      innerTableInitial += `<td class="holiday">${current++}</td>`;
    } else {
      innerTableInitial += `<td>${current++}</td>`;
    }
    weekCounter++;
  }
  innerTableInitial += "</tr>";

  let noOfDays = totalDays(parseInt(month));

  let isCrossed = false;
  console.log(month, noOfDays);
  while(current <= noOfDays) {

    innerTableInitial += "<tr>";
    for(let i=0; i<7; i++) {

      if (isCrossed == false) {
        if (weekCounter % 7 == 0) {
          innerTableInitial += `<td class="weekend">${current++}</td>`;
        } 
        else if (isHoliday(month, current)) {
          innerTableInitial += `<td class="holiday">${current++}</td>`;
        } else {
          innerTableInitial += `<td>${current++}</td>`;
        }
        weekCounter++;

        if(current == noOfDays+1) isCrossed = true;

      } else {
        innerTableInitial += `<td></td>`;
      }
    }

    innerTableInitial += "</tr>";

    if(isCrossed == true) break;
  }

  calendar.innerHTML = tableInitial(innerTableInitial);

}

document.getElementById('month').addEventListener('change', function(e) {
  createCalendarTable(e.target.value);
})

createCalendarTable(0);
