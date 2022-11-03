// this sheet MUST be published and public to fetch the data

/*

TotalAvailable	30
Confirmed	5
Remainder	25

*/

const url = [
  "https://docs.google.com/spreadsheets/",
  "d/e/2PACX-1vSd06QuYh5e1UPWrum3Z9ZwKT6MpmZWRz_vxLjlCn0_6uTAD0rsR4aW-IxUUmKwv2Pf9eKd17FaFNQr/",
  "pub?gid=0&single=true&output=tsv",
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
