const choices = document.querySelector(".choices");
const result = document.querySelector("#result");
const meter = document.querySelector("#meter");
const lastSlot = document.querySelector("#last-slot");

choices.hidden = false;
for (const button of choices.querySelectorAll("button")) {
  button.addEventListener("click", () => {
    const choice = button.dataset.choice;
    const contributed = choice === "give";
    meter.textContent = contributed ? "3 / 3" : "2 / 3";
    lastSlot.className = contributed ? "token" : "slot";
    result.textContent = result.dataset[choice];
    for (const option of choices.querySelectorAll("button")) {
      option.setAttribute("aria-pressed", String(option === button));
    }
  });
}
