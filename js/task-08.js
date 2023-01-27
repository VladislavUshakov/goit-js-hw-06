const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const {
    currentTarget: {
      elements: { email, password },
    },
  } = event;

  const formData = new FormData(event.currentTarget);

  if (!email.value || !password.value) {
    alert("Всі поля повинні бути заповнені");
  } else {
    const formDataSet = {};

    formData.forEach((value, key) => {
      formDataSet[key] = value;
    });

    event.currentTarget.reset();
    console.log(formDataSet);
  }
});
