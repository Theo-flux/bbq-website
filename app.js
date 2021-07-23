
const btnForm = document.getElementById('bbqForm');

btnForm.addEventListener("submit", event => {
  event.preventDefault();

  let mainContent = document.getElementById("mainContent");
  let form = new FormData(event.target);
  let userName = form.get("firstname");
  let userMail = form.get("mail");

  let message = `
      <h2>Congratulations!, ${userName}</h2>
      <p>You're on your way to becoming a BBQ Master!</p>
      <p class="fine-print">You will get weekly BBQ tips sent to: ${userMail}</p>
  `
  mainContent.innerHTML = message;

  console.log(mainContent);
})
