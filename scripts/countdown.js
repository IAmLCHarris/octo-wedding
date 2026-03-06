var expectedDate = new Date("2027-07-02").getTime();
var today = new Date().getTime();
// July 2, 2027 12:00:00 GMT+00:00
// console.log(expectedDay);

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;

var expectedDay = Math.round((expectedDate - today) / day);

console.log(expectedDay);
document.getElementById("countdown").innerHTML =
  `${expectedDay} DÍAS PARA EL EVENTO`;
