const spDays = document.querySelector(".specialDays");
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

//global huvisagchid
var sar = 0,
  specialHtml = "";

let monthArr = [
  "JANUARY",
  "FEBRUARY",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];

const render_month_cal = (number) => {
  document.querySelector(".month").innerHTML = monthArr[number];
  const dt = new Date();
  dt.setMonth(number);
  const md = document.querySelector(".day");
  const wd = document.querySelector(".week");
  const currentMonthld = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
  ).getDate();
  const lastMonthld = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  dt.setDate(1);
  let start_index = dt.getDay();
  dt.setDate(currentMonthld);
  let last_index = dt.getDay();
  let html = "";
  for (let i = lastMonthld - start_index + 1; i <= lastMonthld; i++) {
    html += `<div class = "prev">${i}</div>`;
  }

  const colors = ["blue", "cadetblue"];
  for (let i = number; i < number + 1; i++) {
    for (let j = 1; j <= currentMonthld; j++) {
      if (months[i][j] != undefined) {
        html += `<div class = "active" style = "background : ${colors[1]}">${j}</div>`;
      } else {
        html += `<div>${j}</div>`;
      }
    }
  }
  if (last_index == 6) md.innerHTML = html;

  for (let i = 1; i < 7 - last_index; i++) {
    html += `<div class = "next">${i}</div>`;
    md.innerHTML = html;
  }
  wd.innerHTML = `<div class="wd">S</div>
                      <div class="wd">M</div>
                      <div class="wd">T</div>
                      <div class="wd">W</div>
                      <div class="wd">T</div>
                      <div class="wd">F</div>
                      <div class="wd">S</div>`;
};
const webStart = () => {
  render_month_cal(sar);
};
window.addEventListener("load", webStart);

let renderSpecials = (number, day, color) => {
  specialHtml += `
          <div class = "specialP">
              <div class = "front">
                  <div class = "oval" ></div>
                  <div><p>${months[number]} - ${day}</p></div>
              </div>
              <div class = "back">
                  <div><p>${months[number][day]}</p></div>
              </div>
          </div>
      `;
  spDays.innerHTML = specialHtml;
};

function backMonth() {
  specialHtml = "";
  if (sar > 0) {
    sar--;
    render_month_cal(sar);
  }
}

function nextMonth() {
  specialHtml = "";
  if (sar <= 10) {
    sar++;
    render_month_cal(sar);
  }
}
