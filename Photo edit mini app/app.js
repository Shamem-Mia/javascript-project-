const inputs = document.querySelectorAll(".css-controler input");

function controller() {
  const changeData = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + changeData
  );
}

inputs.forEach((input) => {
  input.addEventListener("change", controller);
  input.addEventListener("mousemove", controller); // You might also want to track mouse movements
});
