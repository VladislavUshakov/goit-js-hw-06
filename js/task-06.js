const input = document.querySelector("#validation-input");

input.addEventListener("blur", addValidationClass);

function addValidationClass(event) {
  const stringLength = event.currentTarget.value.length;
  const dataLength = input.dataset.length;

  if (!stringLength) {
    input.classList.remove("valid", "invalid");
    return;
  }

  if (stringLength == dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
