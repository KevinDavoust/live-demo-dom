import { container, createCard } from "./createCard";
import houseToRent from "./houseToRent";

const houses = houseToRent;

for (let i = 0; i < houses.length; i++) {
  const currentHouse = houses[i];
  createCard(currentHouse);
}

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", (event) => {
  const searchValue = event.target.value;
  container.innerHTML = "";

  houses.filter((house) => {
    if (house.name.toLowerCase().includes(searchValue.toLowerCase())) {
      createCard(house);
    }
  });
});

const showAvailable = document.getElementById("available");

showAvailable.addEventListener("click", () => {
  container.innerHTML = "";
  const isChecked = showAvailable.checked;
  if (isChecked) {
    houses.filter((house) => house.available && createCard(house));
  } else {
    houses.map((house) => createCard(house));
  }
});

const selectbutton = document.getElementById("select-button");

selectbutton.addEventListener("change", () => {
  container.innerHTML = "";

  const selectValue = selectbutton.value;
  houses.filter((house) => house.type === selectValue && createCard(house));
  selectValue === "All" && houses.map((house) => createCard(house));
});
