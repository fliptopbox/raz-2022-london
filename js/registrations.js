// this sheet MUST be published and public to fetch the data

/*

TotalAvailable	30
Confirmed	5
Remainder	25

*/

const url = [
  "https://docs.google.com/spreadsheets/",
  "d/e/2PACX-1vR714PJy2qhiN3qeH9K062wnQ3UM0hmncZB5BAUop8rr5XOHnLJ7RkIvn0zAOwhksF2Hjt9XBzTnWT3/",
  "pub?gid=1499064379&single=true&output=tsv"
].join("");

const data = await fetch(url);
const text = await data.text();
const array = text
  .split(/[\n\r]+/g)
  .map((row) => row.split(/\t/))
  .map(([key, value]) => [key.toLowerCase(), Number(value) || value]);

const summary = Object.fromEntries(array);

const reminders = document.querySelectorAll(".remainder");
const noun = "place" + String(summary.remainder > 1 ? "s" : "");
const html = summary.remainder ? `${summary.remainder} ${noun} remaining` : "SOLD OUT";
reminders.forEach((el) => (el.innerHTML = html));

const totalplaces = document.querySelectorAll(".total-places");
totalplaces.forEach(el => el.innerHTML = summary.totalavailable);

const buttonText = document.querySelectorAll("#ctatext");
buttonText.innerHTML = summary.buttontext || "Submit";


export default function getRegistrations() {
  return array;
}
