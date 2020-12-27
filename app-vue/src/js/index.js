export let choiceElem = () => {
  let items = document.querySelectorAll(".item");
  let btn = document.querySelector(".main__button");

  let classDel = (items) => {
    items.forEach((item) => {
      item.classList.remove("active");
    });
  };

  items.forEach((item) => {
    if (localStorage.getItem("nameid")) {
      let idStorage = localStorage.getItem("nameid");
      let idItem = item.getAttribute("nameid");
      if (idStorage == idItem) {
        item.classList.add("active");
        btn.removeAttribute("disabled");
      }
    }

    item.addEventListener("click", () => {
      classDel(items);
      item.classList.add("active");
      btn.removeAttribute("disabled");
      if (item.hasAttribute("nameid")) {
        localStorage.setItem("nameid", item.getAttribute("nameid"));
      }
    });
  });
};
