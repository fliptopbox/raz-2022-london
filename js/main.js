import "./registrations.js";
const form = document.querySelector("form[data-netlify]");

window.validateForm = validateForm;
function validateForm(e) {
  e.stopImmediatePropagation();
  e.preventDefault();

  const form = document.querySelector("form");
  const fullname = document.querySelector("[name=fullname]").value;
  const emailaddress = document.querySelector("[name=emailaddress]").value;

  const confirmed = document.querySelector("[name=confirm]").checked;

  let errors = [];
  const remail = /^[^\s]+@[^\s]+$/i;
  const rname = /^.{3,}$/i;

  if (!rname.test(`${fullname}`.trim())) errors.push("Please enter fullname");
  if (!emailaddress || !remail.test(emailaddress || ""))
    errors.push("Illegal email address");

  if (!confirmed) errors.push("Please confirm certification.");

  if (errors.length) {
    alert([...errors].join("\n"));
    return false;
  }

  console.log(reflector);
  console.log(form);

  form.submit();
  setTimeout(reflector, 350);
}

function reflector() {
  const html = `
        <h3 style="margin-top:0">Thank you</h3>

        <p>Your details have been sent successfully,
        and you will recieve a confirmation shortly.</p>

        <p>The moment we are ready to accept payments
        an email will be sent to everyone so keep an eye open
        because there are limited places for the workshop.</p>
    `;

  document.querySelector("form").innerHTML = html;
}
