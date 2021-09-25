let calendar = document.getElementById('calendar')

// initial table elements with template literals to have the
// main content inside the table and add it to the dom
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



/** Check if the day is holiday or not
 * @param month of the day to check if it is holiday or not
 * @param date of the dayto check if it is holiday or not
 * @return return if the day is holiday or not
 */
function isHoliday(month, date) {
  dateCode = `${parseInt(month)+1}-${date}`

  // array code for the holidays with the logic being <month>-<date>
  holidayArray = [
    "1-14", "1-26", "4-2", "4-13", "4-25", "5-14",
    "5-26", "7-21", "8-15", "8-19", "9-10", "10-2",
    "10-15", "10-19","10-19", "11-4", "11-19", "12-25"
  ]

  // includes method checks if the code derived from input 
  // is present in the array or not as a boolean
  return (holidayArray.includes(dateCode))
}

// oneliner function with help of arrow functions

/** adding 0 as third parameter in the Date function will 
 * get the last date of the previous month which will be 
 * the number of days of the current month.
 * @param month for which we want the number of days
 * @return get the total days in a month
 */
const totalDays = month => new Date(2021, month+1, 0).getDate();

/** create the table with month of the calendar
 * @param month of the calendar to create the calendar
 */ 
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

// event listener to create table on change in the select 
// menu and send the value selected in the event target 
// which is the month number passed to create the calendar
document.getElementById('month').addEventListener('change', function(e) {
  createCalendarTable(e.target.value);
})

// manually create table for the first month
createCalendarTable(0);
