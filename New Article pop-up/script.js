let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
  console.log("clicked");
  const card = document.getElementById("card");
  card.classList.toggle("active");
});
