const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const user = {};
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    user.email = email.value;
    user.password = password.value;
  }

  console.log(user);
  event.currentTarget.reset();
}
