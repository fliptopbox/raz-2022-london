const form = document.querySelector("form[data-netlify]");

document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide", {
    type: "loop",
    autoplay: true,
    interval: 5000,
  });
  splide.mount();
});

function validateForm(e) {
  e.stopImmediatePropagation();
  e.preventDefault();

  const form = document.querySelector("form");
  const fullname = document.querySelector("[name=fullname]").value;
  const emailaddress = document.querySelector("[name=emailaddress]").value;

  const radios = document.querySelectorAll("[name=equipment]");
  const confirmed = document.querySelector("[name=confirm]").checked;
  const equipment = Array.from(radios).filter((el) => el.checked);

  const table = equipment.length ? equipment[0].value : null;

  let errors = [];
  const remail = /^[^\s]+@[^\s]+$/i;
  const rname = /^.{3,}$/i;

  if (!rname.test(`${fullname}`.trim())) errors.push("Please enter fullname");
  if (!emailaddress || !remail.test(emailaddress || ""))
    errors.push("Illegal email address");

  if (!table) errors.push("Please select equipment option.");
  if (!confirmed) errors.push("Please confirm certification.");

  console.log(fullname || "", emailaddress || "");
  console.log(errors, errors.length);

  if (errors.length) {
    alert([...errors].join("\n"));
    return false;
  }

  const reflector = `
        <h3 style="margin-top:0">Thank you</h3>

        <p>Your details have been sent successfully,
        and you will recieve a confirmation shortly.</p>

        <p>The moment we are ready to accept payments
        an email will be sent to everyone so keep an eye open
        because there are limited places for the workshop.</p>
    `;

  console.log(reflector);
  console.log(form);

  form.submit();
}
