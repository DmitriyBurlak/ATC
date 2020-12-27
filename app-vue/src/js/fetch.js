import * as js from "./index.js";

const requstURL = "../atc.json";

const sendRequest = function(method, url, body = null) {
  return fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return response.json().then((error) => {
      const e = new Error("Ошибка");
      e.data = error;
      throw e;
    });
  });
};

const createElem = (
  tag,
  nameClass,
  text,
  parent,
  nameClassTwo = null,
  attr = null
) => {
  let item = document.createElement(tag);
  item.classList.add(nameClass);
  if (nameClassTwo) {
    item.classList.add(nameClassTwo);
  }
  if (attr) {
    item.setAttribute("nameid", attr);
  }
  item.innerHTML = text;
  parent.append(item);
};

const buildingElem = (data) => {
  let itemParent = document.querySelector(".main__items");
  const atc = data.atc;
  const names = data.names;

  itemParent.innerHTML = "";

  createElem("a", "item", "У меня нет АТС", itemParent, "item__no", 99);

  atc.forEach((atc) => {
    createElem("div", "item__title", atc.category, itemParent);

    names.forEach((name) => {
      if (atc.id === name.parentId) {
        createElem("a", "item", name.name, itemParent, null, name.nameId);
      }
    });
  });
  js.choiceElem();
};

export let request = () => {
  sendRequest("POST", requstURL)
    .then((data) => buildingElem(data))
    .catch((err) => console.log(err));
};
